# Make a bootable USB stick

> Step by step - write the Animux ISO to a USB stick with Rufus, balenaEtcher or Ventoy, start a computer from it, and fix the usual problems.

From a USB stick, Animux runs **at full speed** on your real computer and uses its real graphics card, without changing anything on the hard disk. Making the stick takes about half an hour, most of it waiting.

## Before you start

- **A USB stick of 16 GB or more.** The ISO file is 12 GB. A USB 3 stick (often blue inside the plug) is much faster, both to write and to run from.
- **Everything on the stick is erased.** Copy anything you want to keep onto your computer first.
- **Unplug other USB drives and memory cards**, so you cannot pick the wrong one by mistake.
- **The ISO file** `animux-genesis64-deb_28.iso` ([Get the ISO](get-the-iso.md)).

!!! tip "Optional: check the ISO is not damaged"
    A download that broke halfway gives a stick that does not start. On Windows, open **PowerShell** (right-click the Start button → *Terminal*) and type, with your own path:

    ```
    Get-FileHash "C:\Users\you\Downloads\animux-genesis64-deb_28.iso" -Algorithm SHA256
    ```

    Compare the long code with the SHA-256 published next to the download. On macOS use `shasum -a 256 file.iso`, on Linux `sha256sum file.iso`.

Pick **one** of the three programs below. On Windows, Rufus is recommended.

## Option A: Rufus (Windows, recommended)

1. Download Rufus from <https://rufus.ie/>. The *Portable* version needs no installation. Start it and answer **Yes** when Windows asks for permission.
2. **Device**: choose your USB stick. Check the size, so you do not pick another disk.
3. **Boot selection**: click **SELECT** and choose `animux-genesis64-deb_28.iso`.
4. Leave **Partition scheme**, **Target system** and everything else as Rufus fills it in.
5. Click **START**.
6. Rufus says **"ISOHybrid image detected"**. Choose **Write in DD Image mode** and click **OK**.
7. Confirm that the stick will be erased. Writing takes **10 to 30 minutes**.
8. When the bar says **READY**, click **CLOSE**.

!!! warning "DD Image mode is important"
    The ISO contains files bigger than 4 GB. The other choice, *ISO Image mode*, cannot copy them, and the stick then does not start.

!!! note "Windows says: You need to format the disk"
    After writing, Windows may say *You need to format the disk in drive E: before you can use it*. Click **Cancel**. This is normal: Windows cannot read the stick's Linux format. Formatting would erase Animux again.

## Option B: balenaEtcher (Windows, macOS, Linux, simplest)

1. Download balenaEtcher from <https://etcher.balena.io/>, install it and start it.
2. **Flash from file** → choose `animux-genesis64-deb_28.iso`.
3. **Select target** → choose your USB stick. Check the size.
4. **Flash!** Wait until it says **Flash Complete** (10 to 30 minutes). Etcher checks the stick for errors by itself after writing.

On macOS, click **Ignore** if macOS says it cannot read the disk; on Windows click **Cancel** at the "format the disk" message, as above.

## Option C: Ventoy (several ISO files on one stick)

Ventoy is useful when you want to keep several builds or other systems on the same stick.

1. Download Ventoy from <https://www.ventoy.net/>, unpack it and start `Ventoy2Disk.exe`.
2. Choose the stick and click **Install**. This erases the stick once.
3. Copy `animux-genesis64-deb_28.iso` onto the stick **like a normal file** (Explorer or Finder). Later versions can sit beside it.
4. When you start from the stick, Ventoy shows a list. Choose the Animux ISO, then **Boot in normal mode**.

## Start the computer from the stick

1. Plug the stick in and switch the computer on, or restart it.
2. Straight away, press the **boot menu key** a few times. It depends on the maker:

| Maker | Boot menu key |
|---|---|
| Acer, Asus (laptops), Dell, Lenovo (most), Toshiba | **F12** |
| Asus (desktops), MSI | **F8** or **F11** |
| HP | **F9** (or **Esc**, then F9) |
| Gigabyte, ASRock | **F12** or **F11** |
| Lenovo with a "Novo" button | press the small Novo button while off |
| Apple Mac (Intel) | hold **⌥ Option** while starting |

3. Choose the USB stick. It may be listed twice, once as **UEFI: …** and once without. Either works; UEFI is preferred.
4. The [Animux boot menu](boot-menu.md) appears. Press **Enter**. The desktop appears after one to three minutes.

!!! tip "From Windows 10 or 11, without a boot key"
    Hold **Shift** while you click **Start → Power → Restart**. In the blue menu choose **Use a device** and then your USB stick.

Apple Macs with an M1, M2 or later chip (Apple silicon) cannot start Animux; use a [virtual machine](other-vms.md) there.

## If it does not start

| What you see | What to do |
|---|---|
| The stick is not in the boot menu | Use a USB port directly on the computer (not a hub or front port). Write the stick again; with Rufus, check you chose **DD Image mode**. |
| "Secure Boot violation", or the computer skips the stick | Open the firmware setup (usually **F2** or **Del** right after switching on), set **Secure Boot** to **Disabled**, save and restart. You can enable it again later. |
| The screen stays black after the boot menu | Wait two minutes. Still black: restart and choose **Workstation (KMS / no nomodeset)** in the [boot menu](boot-menu.md). See also [Troubleshooting](../help/troubleshooting.md#black-screen-after-the-boot-menu). |
| Windows' disk is locked inside Animux | In Windows, turn off **Fast Startup**: Control Panel → Power Options → *Choose what the power buttons do* → untick *Turn on fast startup*. |
| Writing fails or stops halfway | Try another USB port or another stick. Cheap or old sticks often fail with files this big. |

## Saving your work in the live session

The live session forgets everything when you switch off. Save your projects to:

- a **second USB stick or disk**: it appears on the desktop and in the [file manager](../desktop/files.md) when you plug it in;
- the computer's own hard disk (it is visible in the file manager; be careful not to delete anything there);
- a cloud drive in Firefox.

To keep everything automatically, [install Animux](install.md).

## Using the stick as a normal stick again

The stick stays an Animux stick until you change it. To get it back for files:

- **Windows**: start Rufus, choose the stick, set **Boot selection** to **Non bootable** and click **START**. Or open *Disk Management* (right-click the Start button), delete every partition on the stick, then right-click the empty space → **New Simple Volume**.
- **macOS**: *Disk Utility* → choose the stick → **Erase** (format *ExFAT*).
- **Linux or Animux**: the *Disks* program → choose the stick → **Format Disk**.
