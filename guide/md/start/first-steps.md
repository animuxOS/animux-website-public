# First steps after installing

> A ten-minute checklist for a freshly installed Animux, covering updates, the screen, the self-test, a project folder and backups.

1. **Log in** with the name and password you chose in the installer.
2. **Connect to the internet**: click the network icon at the top right (Wi-Fi) or plug in a cable.
3. **Update** the system. Open the [terminal](../desktop/terminal.md) and type:
   ```
   sudo apt update && sudo apt upgrade
   ```
4. **Screen**: **Settings → Display**. Set the resolution, and the position of a second monitor. See [Settings](../desktop/settings.md).
5. **Keyboard layout**: **Settings → Keyboard → Layout**, if the installer's choice is not right.
6. **Run the self-test**: **Animux Tools → Animux Self-Test**. Every line should say PASS. See [Self-test](../help/self-test.md).
7. **Graphics driver** (NVIDIA cards): install NVIDIA's driver for fast 3D. See [Adding software](../desktop/add-software.md#nvidia-driver).
8. **Make a projects folder**: `~/Projects`, with the [folder layout](../desktop/files.md#a-folder-layout-for-an-animation-project) studios use.
9. **Plan backups**: an external disk with a copy of `~/Projects`, and a **Timeshift** snapshot of the system (*Digital Asset Managers → Timeshift*).
10. **Make something**: start with [Your first 3D render](../tutorials/first-3d-render.md) or [Hand-drawn animation](../tutorials/hand-drawn-pencil2d.md).

## Differences from the live session

| | Live session | Installed |
|---|---|---|
| Files and settings | lost at shutdown | kept |
| Login | automatic as `user` | your own account and password |
| `sudo` | no password | your password |
| Start-up | text, then desktop | Animux splash screen, then login screen |
| Graphics driver | safe mode on BIOS computers | the card's own driver |
| Speed | depends on the USB stick | full disk speed |
