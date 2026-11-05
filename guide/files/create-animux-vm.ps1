<#
  create-animux-vm.ps1 - create a VirtualBox virtual machine for Animux.
  From the Animux Guide: "Try Animux in VirtualBox".

  Right-click this file and choose "Run with PowerShell", or run:
      powershell -ExecutionPolicy Bypass -File create-animux-vm.ps1
  Options:
      -Iso C:\path\animux-genesis64-deb_28.iso   the Animux ISO (asked if missing)
      -Name Animux        VM name           -MemoryMB 8192    memory
      -Cpus 4             processors        -DiskGB 80        virtual disk size
      -Folder D:\VMs      where the VM is stored (default: VirtualBox's folder)
      -Efi                start with UEFI instead of BIOS
      -Start              start the VM when it is created

  Nothing is deleted: the script stops if a VM with the same name exists.
#>
param(
    [string]$Iso,
    [string]$Name = "Animux",
    [int]$MemoryMB = 8192,
    [int]$Cpus = 4,
    [int]$DiskGB = 80,
    [string]$Folder,
    [switch]$Efi,
    [switch]$Start
)
$ErrorActionPreference = "Stop"

function Find-VBoxManage {
    $c = Get-Command VBoxManage.exe -ErrorAction SilentlyContinue
    if ($c) { return $c.Source }
    $dirs = @($env:VBOX_MSI_INSTALL_PATH, $env:VBOX_INSTALL_PATH, "$env:ProgramFiles\Oracle\VirtualBox")
    foreach ($d in $dirs) {
        if ($d -and (Test-Path (Join-Path $d "VBoxManage.exe"))) { return (Join-Path $d "VBoxManage.exe") }
    }
    throw "VirtualBox was not found. Install it from https://www.virtualbox.org/wiki/Downloads and run this script again."
}

$vbm = Find-VBoxManage
Write-Host "Using $vbm"

if (-not $Iso) {
    Add-Type -AssemblyName System.Windows.Forms
    $dlg = New-Object System.Windows.Forms.OpenFileDialog
    $dlg.Title = "Choose the Animux ISO file"
    $dlg.Filter = "Disc images (*.iso)|*.iso"
    if ($dlg.ShowDialog() -ne "OK") { throw "No ISO file chosen." }
    $Iso = $dlg.FileName
}
if (-not (Test-Path $Iso)) { throw "ISO not found: $Iso" }
$Iso = (Resolve-Path $Iso).Path

$existing = & $vbm list vms
if ($existing -match ('^"' + [regex]::Escape($Name) + '"')) {
    throw "A virtual machine called '$Name' already exists. Use -Name to choose another name."
}

$create = @("createvm", "--name", $Name, "--ostype", "Debian_64", "--register")
if ($Folder) { $create += @("--basefolder", $Folder) }
& $vbm @create | Out-Host

$firmware = if ($Efi) { "efi" } else { "bios" }
& $vbm modifyvm $Name --memory $MemoryMB --cpus $Cpus --vram 128 --graphicscontroller vmsvga `
    --accelerate3d off --firmware $firmware --boot1 dvd --boot2 disk --boot3 none --boot4 none `
    --nic1 nat --audio-enabled on --audio-out on --audio-controller hda --usb-ohci on --mouse usbtablet --rtc-use-utc on | Out-Host

# Virtual disk next to the VM settings file (grows as it is used)
$info = & $vbm showvminfo $Name --machinereadable
$cfg = (($info | Where-Object { $_ -like 'CfgFile=*' }) -replace '^CfgFile="(.*)"$', '$1') -replace '\\\\', '\'
$disk = Join-Path (Split-Path $cfg) "$Name.vdi"
& $vbm createmedium disk --filename $disk --size ($DiskGB * 1024) --format VDI | Out-Host

& $vbm storagectl $Name --name "SATA" --add sata --controller IntelAhci --portcount 2 | Out-Host
& $vbm storageattach $Name --storagectl "SATA" --port 0 --device 0 --type hdd --medium $disk | Out-Host
& $vbm storagectl $Name --name "IDE" --add ide | Out-Host
& $vbm storageattach $Name --storagectl "IDE" --port 1 --device 0 --type dvddrive --medium $Iso | Out-Host

Write-Host ""
Write-Host "Done. Virtual machine '$Name': $MemoryMB MB memory, $Cpus processors, $DiskGB GB disk ($disk), $firmware firmware."
Write-Host "Start it in VirtualBox, or run this script with -Start next time."
if ($Start) { & $vbm startvm $Name --type gui | Out-Host }
if ($Host.Name -eq "ConsoleHost" -and -not $env:ANIMUX_NO_PAUSE) { Read-Host "Press Enter to close" | Out-Null }
