# System facts

> The layout of an Animux system in one page. Release, base, users, important paths, Animux packages, services, ports, boot roles and how to tell a live session from an installed one.

## Identity

| | |
|---|---|
| Release | Animux Genesis64 **r16.3**, ISO `animux-genesis64-deb_28.iso` |
| Base | Debian 12 "bookworm", amd64, Linux 6.1, systemd |
| Desktop | Xfce 4.18 on X11, LightDM |
| `/etc/os-release` | `ID=animux`, `ID_LIKE=debian`, `PRETTY_NAME="Animux Genesis64"` |
| Release in machine-readable form | `release` in `/usr/share/animux/docs/api/software.json` |

## Users

| Situation | User | Password | sudo |
|---|---|---|---|
| Live session | `user` (display name "Animator"), auto-login | `user` | without password |
| Installed | chosen in the installer | chosen | with password |

## Important paths

| Path | Contents |
|---|---|
| `/usr/share/animux/docs/` | this guide (HTML, Markdown, JSON, llms.txt) |
| `/usr/share/animux/samples/` | sample scenes for every renderer and format |
| `~/animux-selftest/<date-time>/` | self-test results, images, logs, `summary.txt` |
| `/opt/animux/blender/` | Blender 5.2.3 (`/usr/bin/blender`), extensions in `5.2/extensions/system/` (MPFB) |
| `/opt/animux/gaffer/` | Gaffer 1.7.5 with Cortex, OSL, OpenUSD, Alembic; wrappers in `/usr/bin` (`usdview`, `oslc`, `abcls`…) |
| `/opt/animux/vfx-env/` | Python 3.11 venv: Mitsuba, LuxCore, usd-core, OIIO, OpenEXR, OCIO, MaterialX (`animux-vfx-python`) |
| `/opt/animux/makehuman2/` | MakeHuman II (`makehuman2`) |
| `/opt/animux/flamenco/` | Flamenco Manager and Worker |
| `/opt/animux/appleseed/`, `/opt/animux/pbrt/` | appleseed CLI, pbrt-v4 |
| `/opt/animux/avidemux/`, `/opt/animux/cinelerra-gg/`, `/opt/animux/djv/` | video tools |
| `/opt/farmerjoe/` | Farmerjoe |
| `/usr/lib/animux/` | role selector, installer launcher, helper scripts |
| `/etc/apt/sources.list.d/animux.sources` | Animux repository (`Enabled: no` in r16) |
| `/usr/share/keyrings/animux-archive-keyring.gpg` | repository signing key (fingerprint `B47E D034 EDD3 3360 7502 EE4B F334 23FB B235 4B3B`) |

## Animux packages

`dpkg-query -W 'animux-*' upscayl` lists them: `animux-archive-keyring`, `animux-branding`, `animux-menus`, `animux-roles`, `animux-docs`, `animux-samples`, `animux-farmerjoe`, `animux-flamenco`, `animux-blender`, `animux-blender-mpfb`, `animux-gaffer`, `animux-vfx-python`, `animux-makehuman2`, `animux-appleseed`, `animux-pbrt`, `animux-avidemux`, `animux-cinelerra-gg`, `animux-djv`, and `upscayl`.

## Services and ports

| Service | Port | Notes |
|---|---|---|
| `animux-docs.service` | 8765/tcp on 127.0.0.1 | this guide; read-only |
| `animux-role-config.service` | — | reads `animux.role=` at boot, writes `/run/animux/role` |
| `ssh.service` | 22/tcp | enabled |
| Flamenco Manager (when started) | 8080/tcp | web interface and API |
| `isc-dhcp-server`, `nfs-kernel-server` | — | masked, except in the *Render Farm Master* role |

## Boot roles

The kernel parameter `animux.role=` selects the role; the current one is in `/run/animux/role`.

| Role | Desktop | Purpose |
|---|---|---|
| `workstation` (default) | yes | normal use |
| `install` | yes, installer opens | Calamares installation |
| `master` | no (display manager masked) | render farm head; DHCP and NFS unmasked |
| `slave` | no | render node |

## Live or installed?

```
test -d /run/live/medium && echo live || echo installed
```

A live session keeps all changes in RAM (overlay) and loses them at shutdown.

## Hardware notes

- Blender 5, appleseed: need SSE4.2. Mitsuba, LuxCore: need SSE4.2 and AVX.
- OpenCL: Debian's software drivers (Mesa, PoCL) are hidden from `animux-vfx-python` programs because they crash LuxCore. Set `ANIMUX_KEEP_ALL_OPENCL=1` to see all drivers.
- No NVIDIA proprietary driver on the ISO; GPU rendering in Cycles needs it (`nvidia-driver` from Debian non-free).
- No VirtualBox/VMware guest tools on the ISO.
