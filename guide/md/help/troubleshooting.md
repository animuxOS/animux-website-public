# Troubleshooting

> Solutions for black screens, slow virtual machines, programs that do not start, no sound, no Wi-Fi, full memory and lost files.

Start with the **[self-test](self-test.md)**: it often tells you exactly what is wrong.

## Black screen after the boot menu

1. **Wait two minutes**: a slow USB stick or a VM can take that long the first time.
2. Restart and choose **Workstation (KMS / no nomodeset)** in the [boot menu](../start/boot-menu.md). This uses the graphics card's own driver.
3. In VirtualBox: **Settings → Display → Graphics Controller: VMSVGA**, Video Memory 128 MB, 3D acceleration **off**.
4. Choose **Workstation (verbose / no Plymouth)** to see the messages, or **DEBUG: Text Console** to log in as `user` / `user` and look at the logs: `journalctl -b -p err`.

## The screen resolution is wrong or too small

**Settings → Display**. If the resolution you want is missing, start with **Workstation (KMS / no nomodeset)**. In VirtualBox the window does not resize automatically (no Guest Additions); see [VirtualBox](../start/virtualbox.md#screen-size-copy-and-paste-shared-folders).

## Blender or a renderer does not start

- **"Illegal instruction"**, or Blender closes at once: the processor (or the virtual machine) does not offer **SSE4.2** or **AVX**. Check with `grep -o -w -E 'sse4_2|avx' /proc/cpuinfo | sort -u`. In QEMU add `-cpu host`; in other VMs choose "host CPU" passthrough. On a real computer from before about 2011 these programs cannot run.
- Blender starts but the viewport is black or very slow: in a VM this is normal for EEVEE (software OpenGL). Use **Workbench** or **Cycles** (CPU).
- Start it from a terminal to see the error message: type `blender` and read the last lines.

## Everything is slow

| Where | Fix |
|---|---|
| In a VM | give it more memory (8 GB+) and processors (4+). Close programs on the host. |
| Live session from USB | use a USB 3 stick in a USB 3 port (blue), or install Animux. |
| During rendering | normal: rendering uses every core. Lower the priority: `nice -n 19 blender -b …` |
| Blender viewport | use *Solid* shading while animating; lower *Viewport* subdivision levels. |

Watch what uses the computer: **System → Task Manager** or `htop`.

## Memory is full / programs crash in the live session

In the live session, files you save are kept in memory. Delete old renders, save to a USB drive instead, or install Animux. Check: `free -h` and `df -h /`.

## No sound

1. Click the speaker icon: is it muted? Turn the volume up.
2. **Sound Engineering → Sound Server Configuration → PulseAudio Volume Control** → *Output Devices* and *Configuration*: choose the right device (speakers, HDMI, headphones) and profile.
3. A JACK program (Ardour, Hydrogen) is silent: start it with `pw-jack ardour`.

## No Wi-Fi

- Click the network icon at the top right. Is Wi-Fi enabled? Is the network listed?
- Some Wi-Fi chips need firmware Animux does not have, or are switched off with a key (airplane mode) on the laptop.
- Show the chip: `lspci -nnk | grep -A3 -i network` and search the web for its name plus "Debian 12".
- A USB Wi-Fi stick or a cable (or phone USB tethering) always works.

## A USB stick or disk does not appear

Unplug and plug it in again; look in the file manager's left panel. A Windows disk from a computer with *Fast Startup* may be locked: shut Windows down fully (hold **Shift** while clicking *Shut down*).

## I forgot my password (installed system)

Restart; in the start menu choose **Advanced options → recovery mode**, then **root** and type `passwd your-login-name`. Then `reboot`.

## "No bootable option" after installing (UEFI)

An Animux installed on a **UEFI** computer or VM up to r16 may not start when the disk is moved to another computer or VM, or when the firmware forgets its boot list: the screen says *No bootable option or device was found*. The installer wrote Animux's start file only to `EFI/Animux/`, not to the standard fallback place `EFI/BOOT/BOOTX64.EFI`.

To start it once: open the firmware menu (press a key at that message, or **F2**/**Del** at start-up), choose **Boot Maintenance Manager → Boot From File** (the name differs between makers), then the disk → `EFI` → `Animux` → `grubx64.efi`.

To fix it for good, in Animux open a terminal and type:

```
sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --removable
```

From then on the disk starts on any UEFI computer. (Tested in VirtualBox with an installed r16. Animux r16.1 (`_25`) and later do this when installing.)

## A program froze

Close it with the × button and wait. If it does not close: **System → Task Manager**, select it, **End Task**; or in a terminal `pkill -f programname`. In Blender, **File → Recover → Auto Save** brings back recent work.

## I lost my files after a restart

In the live session, nothing is kept after a restart. See [The live session](../start/live-session.md). Files deleted in the file manager are in the **Trash** until you empty it.

## The fail2ban service failed

On r16 (`_21`), `fail2ban` shows as failed at start-up (Debian 12 has no `/var/log/auth.log`); it does not affect anything else. Fixed in r16.1: it reads the system journal instead. To fix it on r16, in a [terminal](../desktop/terminal.md):

```
sudo apt install python3-systemd
printf '[sshd]\nbackend = systemd\n' | sudo tee /etc/fail2ban/jail.d/animux.conf
sudo systemctl restart fail2ban
```

(Tested on an installed Animux: afterwards `sudo fail2ban-client status sshd` shows the jail.)

## Still stuck?

See [Getting help](getting-help.md).
