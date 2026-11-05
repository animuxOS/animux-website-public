# Questions and answers

> Short answers to the questions new Animux users ask most often.

**Is Animux free? Can I use it for paid work?**
Yes and yes. Animux and its programs are free and open source. Your films, images and models belong to you. See [Licences](../about/licenses.md).

**Do I have to know Linux?**
No. This guide explains everything from the start. You need the terminal for only a few jobs, and the guide gives the full command each time.

**Will Animux delete Windows?**
Not unless you tell the installer to. The live session and virtual machines change nothing. When [installing](../start/install.md), choose *Install alongside* to keep Windows.

**Can I open my Maya / 3ds Max / Cinema 4D / After Effects files?**
Not directly. Export them from the old program as **FBX**, **OBJ**, **USD** or **Alembic** and import them in Blender. Images and videos (PNG, EXR, MP4) work everywhere.

**Does Animux have Photoshop, Toon Boom, Maya or After Effects?**
No, those are commercial programs for Windows and macOS. Animux has free alternatives: Krita/GIMP (painting, photos), Pencil2D/Synfig/Krita (2D animation), Blender (3D, compositing), Kdenlive (editing). DaVinci Resolve can be installed: [Adding software](../desktop/add-software.md#davinci-resolve).

**Which program should I learn first?**
For 2D: [Pencil2D](../software/pencil2d.md), then Krita or Synfig. For 3D: [Blender](../software/blender.md). For editing: Kdenlive. Follow the [tutorials](../tutorials/first-3d-render.md) in order.

**Can Blender render on my graphics card?**
With an NVIDIA card and NVIDIA's driver (CUDA/OptiX) or an AMD card with ROCm (HIP), yes. Without them, Blender renders on the processor, which always works. See [Adding software](../desktop/add-software.md#nvidia-driver).

**Why is Blender 5 and not Debian's Blender 3.4?**
Debian 12's Blender is from 2022. Animux packages the official Blender 5.2 LTS release from blender.org.

**Can I use a drawing tablet?**
Yes. Wacom, Huion, XP-Pen and others work with pressure in Krita, GIMP, MyPaint, Pencil2D and Blender.

**Do my files survive a restart?**
In the live session: **no**. Installed: yes. See [The live session](../start/live-session.md).

**How do I update Animux?**
`sudo apt update && sudo apt upgrade` on an installed system. See [Updates](../desktop/add-software.md#updates).

**Can several computers render together?**
Yes, with [Flamenco](../software/flamenco.md).

**Does Animux run on a Mac?**
On Intel Macs in VirtualBox, VMware Fusion or Parallels, and from USB on many models. On Apple Silicon (M1–M4) only through very slow emulation.

**Is Animux safe? Does it send my data anywhere?**
Animux has no tracking. Programs connect to the internet only for things you ask for (updates, web browsing, downloading Blender extensions). Upscayl's AI runs offline.

**Where is OpenToonz / Natron / OBS Studio?**
[OpenToonz](../software/opentoonz.md) is on Animux from r16.3 (**2D Animation → OpenToonz**); on older releases get it from Flathub. Natron and OBS Studio are not on the ISO. OBS Studio: `sudo apt install obs-studio`. Natron: from Flathub, see [Adding software](../desktop/add-software.md#flatpak-and-flathub-newer-versions).

**What do the numbers in the ISO name mean?**
`animux-genesis64-deb_28.iso` is build number 28 of Genesis64; it is release **r16.3** (build 27 was r16.2, build 25 was r16.1, build 21 was r16).
