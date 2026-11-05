# Updates and adding software

> Keep Animux up to date and install more programs with Synaptic, apt or Flatpak, including DaVinci Resolve and the NVIDIA driver.

!!! note "Installed systems only"
    In the live session you can install software too, but it is gone after a restart.

## Updates

Animux gets software from two places:

1. **Debian 12**: security and bug-fix updates for the base system and most programs.
2. **The Animux repository**: Animux's own packages (Blender 5, Gaffer, the renderers, the menus, this guide…). It is signed with the *Animux Archive Signing Key*. **In r16 it is switched off** (`/etc/apt/sources.list.d/animux.sources`, `Enabled: no`) until it is online; Animux packages are then updated with the next release.

To update, open a [terminal](terminal.md) and type:

```
sudo apt update
sudo apt upgrade
```

Answer **Y** when asked. Restart if the kernel was updated.

## Synaptic: install with a list

**System → Synaptic Package Manager**. Click **Search**, type a name (for example `natron` or `obs`), right-click the package → **Mark for Installation** → **Apply**.

## apt: install with one command

```
sudo apt install obs-studio
```

`apt search word` finds packages, `sudo apt remove name` removes one.

## Flatpak and Flathub: newer versions

Flathub has newer versions of many creative programs (Krita, OBS Studio, OpenToonz, Natron, Inkscape…). Set it up once:

```
flatpak remote-add --if-not-exists --user flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Then install, for example OpenToonz (2D animation used by Studio Ghibli; already installed on Animux r16.3 and later):

```
flatpak install --user flathub io.github.OpenToonz
```

Flatpak programs appear in the menu after you log out and in.

## DaVinci Resolve

**Animux Tools → Install DaVinci Resolve** opens Blackmagic Design's download page. Resolve is free to download but not open source, so Animux cannot include it. It needs a strong NVIDIA or AMD graphics card with the vendor's driver.

## NVIDIA driver

For fast 3D and GPU rendering with an NVIDIA card, install NVIDIA's own driver from Debian's *non-free* section:

```
sudo apt install nvidia-driver firmware-misc-nonfree
```

Restart. Check with `nvidia-smi`. Cycles can then render on the GPU (*Blender → Edit → Preferences → System → CUDA or OptiX*).

!!! warning
    Do not install drivers downloaded as `.run` files from nvidia.com at the same time; use one or the other.

## What not to do

- Do not add software sources ("PPAs") made for **Ubuntu**; they can break Debian.
- Do not remove packages whose names start with `animux-` unless you know why: menus, branding and the start-up roles depend on them.
