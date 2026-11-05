# Get the ISO file

> Download Animux, check that the download is complete and undamaged, and know which file is the newest.

Animux comes as one **ISO file**, a copy of a whole disc in a single file. For release r16.3 it is:

| File | Size | Release |
|---|---|---|
| `animux-genesis64-deb_28.iso` | about 12 GB | Genesis64 r16.3 |

The number after `deb_` counts the builds, not the releases. Always use the newest release named on the [News](../news/2026-10-30-r16-3-release.md) page.

## Download

Download the ISO from the Animux download page, or copy it from someone who already has it (a USB disk works fine; it is free to share). The file is large, so:

- use a wired connection or a good Wi-Fi signal;
- make sure the disk you save it to has **at least 15 GB free**;
- on a USB disk formatted as **FAT32**, files over 4 GB do not fit. Use **exFAT** or **NTFS**.

## Check the download (recommended)

A broken download causes strange errors later. Compare the file's **SHA-256 checksum** with the one published next to the download (a long string of 64 letters and digits).

**Windows** – open **PowerShell** (Start menu → type `powershell`) and type:

```
Get-FileHash -Algorithm SHA256 "$HOME\Downloads\animux-genesis64-deb_28.iso"
```

**macOS** – open **Terminal**:

```
shasum -a 256 ~/Downloads/animux-genesis64-deb_28.iso
```

**Linux** (including Animux):

```
sha256sum ~/Downloads/animux-genesis64-deb_28.iso
```

The long string printed must match the published one exactly. If it does not, download again.

## Next step

- Try it in a virtual machine: [VirtualBox](virtualbox.md) or [other virtual machines](other-vms.md).
- Start a real computer from it: [Make a USB stick](usb-stick.md).
