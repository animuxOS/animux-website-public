# System tools

> Backups with Timeshift, disks with Disks and GParted, burning with K3b, system monitors, virtual machines, containers and remote access.

## Backups

| Tool | Backs up | Use |
|---|---|---|
| **Timeshift** (*Digital Asset Managers*) | the **system** (installed Animux) | take a snapshot before big updates; roll back if something breaks |
| a copy to an external disk | your **projects** | drag `~/Projects` to the disk in the file manager, or use the command below |
| **Borg**, **rsnapshot**, **rclone** (terminal) | projects, automatically, also to the cloud | for advanced users |

```
rsync -a --info=progress2 ~/Projects/ /media/$USER/BACKUP/Projects/
```

Timeshift does **not** back up your Home folder by default. That is what the project copy is for.

## Disks

- **Disks** (*System → Disks*): see all disks, check their health (*SMART Data*), format USB sticks, create disk images.
- **GParted** (*System → GParted*): resize and create partitions.

!!! danger
    Both can erase data. Check the disk name and size twice before you click *Format* or *Apply*.

## Burning discs: K3b

**DVD Authoring → Backup → K3b**. *New Data Project* for a backup DVD, *New Video DVD Project* if you already have DVD video files, *Burn Image* to write an ISO to disc.

## Watching the system

| Tool | Shows |
|---|---|
| **Task Manager** (*System*) or `htop` | which programs use processor and memory; end a frozen program |
| `btop`, `glances` | a colourful overview of everything |
| `nvidia-smi` (NVIDIA driver installed) | graphics card use |
| **Psensor** | temperatures. Long renders heat the computer; check that fans work |
| `df -h`, **Disk Usage Analyzer** | free disk space |

## Virtual machines and containers

Animux includes **QEMU**, **Virtual Machine Manager** (*System → Virtual Machine Manager*), **Docker** and **Podman** for running other systems or packaged services (for example a web server for a render farm dashboard). They are for advanced users.

## Remote access

The **SSH** server is installed and enabled on installed systems. From another computer: `ssh your-login@animux-computer`. Useful to start renders on a render node. Change the default live password if a live system is connected to a network you do not trust.

## Security

`ufw` (firewall), `fail2ban`, `rkhunter` and `lynis` are included. On r16 (`_21`) the `fail2ban` service reports an error at start-up (fixed in r16.1, see [Troubleshooting](../help/troubleshooting.md)); it does no harm.
