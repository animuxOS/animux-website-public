# What is Animux?

> A free, complete studio for animators on one disc image. What is inside, what you need and how you can use it.

Animux is an **operating system**, like Windows or macOS. It replaces or sits beside them and comes with the programs an animation studio needs. It is built on **Debian 12**, one of the oldest and most stable Linux systems, and uses the **Xfce** desktop, which is simple and light.

The current release is **Animux Genesis64 r16.3**. It comes as one file, `animux-genesis64-deb_28.iso` (12 GB). The `_28` is the build number, not the release.

## What you get

| For | Main programs |
|---|---|
| 3D modelling and animation | [Blender 5.2](../software/blender.md), [MakeHuman II and MPFB](../software/makehuman.md), [FreeCAD, Wings 3D, MeshLab](../software/other-3d.md) |
| Rendering | Cycles and EEVEE in Blender, [POV-Ray, LuxCoreRender, Mitsuba, appleseed, pbrt](../software/renderers.md) |
| 2D animation | [Synfig Studio](../software/synfig.md), [Pencil2D and TupiTube](../software/pencil2d.md), [Krita](../software/krita.md) |
| Stop motion | [Stopmotion](../software/stopmotion.md) |
| Drawing and images | [Krita](../software/krita.md), [GIMP, Inkscape, MyPaint](../software/gimp-inkscape.md) |
| Video | [Kdenlive](../software/kdenlive.md), [OpenShot, Cinelerra-GG, Avidemux, HandBrake, FFmpeg, DJV](../software/video-tools.md) |
| Sound and music | [Audacity, Ardour, LMMS, Hydrogen, MuseScore](../software/audio.md) |
| Studio pipeline | [Gaffer](../software/gaffer.md), [OpenUSD, Alembic, OpenEXR, OpenColorIO](../software/pipeline-formats.md) |
| Render farm | [Flamenco](../software/flamenco.md) |
| AI (offline) | [Upscayl](../software/upscayl.md) (image upscaling), [Whisper, rembg, Ollama, ComfyUI, LTX](../software/ai-tools.md) (subtitles, background removal, chat models, Stable Diffusion, video API), [AI agents in Blender, GIMP, Krita and Inkscape](../software/ai-agents.md) (MCP) |

The [software list](../software/index.md) shows all of them.

Also included: a web browser (Firefox), office-style viewers, a [self-test](../help/self-test.md) that checks every renderer, sample scenes, and this guide.

## Three ways to use Animux

1. **In a virtual machine**: a pretend computer inside Windows, macOS or Linux. Nothing on your computer changes. It is the best way to look around. → [VirtualBox guide](virtualbox.md)
2. **Live from a USB stick**: start a real computer from the stick. It runs at full speed, and the hard disk is not touched. Anything you save inside the live system is **lost when you switch off**, unless you save it to a USB drive. → [USB stick guide](usb-stick.md)
3. **Installed on a disk**: Animux becomes a normal system, and your files and settings stay. → [Installation guide](install.md)

!!! tip "Not sure? Start with VirtualBox."
    A virtual machine is slower than a real computer, especially for 3D, but it is completely safe. When you like Animux, put it on a USB stick or install it.

## What your computer needs

| | Minimum | Recommended |
|---|---|---|
| Processor | 64-bit Intel or AMD, 2 cores | 4 or more cores, made in 2013 or later |
| Memory (RAM) | 4 GB | 16 GB or more |
| Disk space (to install) | 40 GB | 100 GB or more |
| USB stick (live use) | 16 GB | 32 GB, USB 3 |
| Graphics | any | a recent AMD, Intel or NVIDIA card |

!!! warning "Very old processors"
    Blender 5, appleseed, Mitsuba and LuxCoreRender need a processor with **SSE4.2**; Mitsuba and LuxCore also need **AVX**. Almost every Intel or AMD processor sold since about 2011 has both. On an older one these programs do not start; the [self-test](../help/self-test.md) tells you so. See [Requirements](requirements.md) for how to check.

## Is it really free?

Yes. Animux and almost all its programs are **free and open-source software**: you may use them for any purpose, including paid commercial work, copy them and share them. The work you make belongs to you. Each program has its own licence; see [Licences and credits](../about/licenses.md).

## Words you will meet

- **ISO file**: one file that contains a whole disc. You use it to make a USB stick or to start a virtual machine.
- **Live session**: Animux running from the USB stick or ISO, without being installed.
- **Render**: let the computer calculate the final picture or film from a 3D scene.
- **Terminal**: a window where you type commands. You rarely need it; this guide gives every command in full.

More in the [Glossary](../help/glossary.md).
