# Other virtual machines

> Settings for QEMU and virt-manager, VMware, Hyper-V and Parallels, and the one setting that matters most for 3D programs.

Any virtual machine program that can start a 64-bit Linux ISO can run Animux. Use the same sizes everywhere:

| Setting | Value |
|---|---|
| Guest type | Linux, Debian 12 64-bit |
| Memory | 8 GB (4 GB minimum) |
| Processors | 4 |
| Disk | 80 GB, growing ("thin", "dynamically allocated") |
| Firmware | BIOS or UEFI. **Secure Boot off.** |
| Graphics | the standard adapter; no 3D acceleration needed |
| CPU model | **pass through the host CPU** (see below) |

!!! warning "Pass through the processor"
    Blender 5, appleseed, Mitsuba and LuxCore need SSE4.2 and AVX. Some VM programs show the guest a basic processor without them. Choose "host-passthrough", "host" or "copy host CPU configuration".

## QEMU (command line)

```
qemu-img create -f qcow2 animux.qcow2 80G
qemu-system-x86_64 -enable-kvm -cpu host -m 8192 -smp 4 \
  -machine q35 -vga std -nic user,model=e1000 \
  -cdrom animux-genesis64-deb_28.iso -drive file=animux.qcow2,if=virtio \
  -boot d -usb -device usb-tablet
```

On Windows replace `-enable-kvm` with `-accel whpx,kernel-irqchip=off`, on macOS with `-accel hvf`. Add UEFI with `-bios /usr/share/ovmf/OVMF.fd` (Linux; path may differ).

## virt-manager (Linux, also included in Animux)

**File → New Virtual Machine → Local install media** → choose the ISO → operating system **Debian 12** → memory 8192, CPUs 4 → disk 80 GB → tick **Customize configuration before install** → **CPUs**: tick **Copy host CPU configuration (host-passthrough)** → **Begin Installation**.

## VMware Workstation Player / Fusion (Intel Mac)

**Create a New Virtual Machine** → **Installer disc image file (iso)** → guest **Linux, Debian 12.x 64-bit** → disk 80 GB, *store as a single file* → **Customize Hardware**: memory 8 GB, 4 processors. VMware passes the CPU through by default.

## Hyper-V (Windows Pro)

Create a **Generation 2** VM with 8192 MB startup memory (untick *Dynamic Memory*), connect it to the *Default Switch*, create an 80 GB disk and choose the ISO. Then in **Settings → Security** **untick Enable Secure Boot**, and in **Processor** set 4 virtual processors.

## Apple Silicon Macs (M1–M4)

Animux is built for Intel/AMD (x86-64) processors. On an Apple Silicon Mac it can only run through emulation (UTM in "Emulate" mode), which is far too slow for animation work. Use a PC instead.
