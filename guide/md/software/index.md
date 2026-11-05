# All software

> Every program on Animux by job, with what it does and the command that starts it.

Animux has more than a hundred programs. This list has the ones that matter for animation, grouped by job. The name links to a longer page where there is one. **Start it** is what you type after **Alt+F2** or in a [terminal](../desktop/terminal.md); every program is also in the [menu](../desktop/menu.md).

!!! tip "Where to begin"
    New to animation software? Try these first: **[Pencil2D](pencil2d.md)** (drawing), **[Blender](blender.md)** (3D), **[Kdenlive](kdenlive.md)** (editing) and **[Audacity](audio.md)** (sound).


## 3D modelling and animation

Menu: **3D Animation → Modellers**.

| Program | What it does | Start it |
|---|---|---|
| [Blender](blender.md) | The complete 3D studio: modelling, sculpting, rigging, animation, simulation, rendering (Cycles and EEVEE), compositing and video editing. | `blender` |
| [MPFB (MakeHuman Plugin for Blender)](makehuman.md) | Creates realistic human characters, ready to animate, directly inside Blender. Switched on automatically. | `blender` |
| [Maya Workflow Kit for Blender](blender.md) | Makes Blender work like Autodesk Maya for animators trained on it: Maya hotkeys, marking menus, shelf, Channel Box and layout. Off until you switch it on. | `animux-blender-maya on` |
| [MakeHuman II](makehuman.md) | Stand-alone character creator: shape a human body with sliders, add clothes, a skeleton and poses, then export for Blender or games. | `makehuman2` |
| [FreeCAD](other-3d.md) | Precise CAD modelling for props, sets and objects that must have exact sizes. | `freecad` |
| [OpenSCAD](other-3d.md) | Build 3D objects by writing a short description instead of drawing them. | `openscad` |
| [Wings 3D](other-3d.md) | Small, friendly polygon modeller, good for learning how 3D meshes are built. | `wings3d` |
| [MeshLab](other-3d.md) | Clean up, repair and simplify 3D scans and heavy meshes. | `meshlab` |
| [Geomview](other-3d.md) | Viewer for mathematical 3D shapes (OFF files). | `geomview` |

## Renderers

Programs that turn a 3D scene into a picture. Menu: **3D Animation → Renderers** (several are command-line programs only).

| Program | What it does | Start it |
|---|---|---|
| [Cycles and EEVEE (inside Blender)](renderers.md) | Blender's own renderers. Cycles is realistic (path tracing); EEVEE is fast (real time). Start here. | `blender` |
| [POV-Ray](renderers.md) | Classic ray tracer: you describe the scene in a text file and POV-Ray draws it. The menu entry asks for a .pov file and shows the picture. | `animux-povray-gui` |
| [appleseed](renderers.md) | Physically based production renderer. Command line only on Animux (its editor window needs Python 2.7, which Debian 12 no longer has). | `appleseed.cli` |
| [LuxCoreRender](renderers.md) | Unbiased physically based renderer, good for realistic light, glass and caustics. Used from Python scripts. | `animux-vfx-python` |
| [Mitsuba 3](renderers.md) | Research renderer, also able to compute how a picture changes when the scene changes (differentiable rendering). | `mitsuba` |
| [pbrt-v4](renderers.md) | The renderer from the book "Physically Based Rendering". Ideal for learning how renderers work. | `pbrt` |

## Pipeline tools and file formats

For studios and advanced users: scene assembly, interchange formats and colour management. Menu: **3D Animation → Pipeline Tools**.

| Program | What it does | Start it |
|---|---|---|
| [Gaffer](gaffer.md) | Node-based tool for look development, lighting and scene assembly, used in film studios. Renders with Cycles. Includes Cortex, OSL, OpenUSD and Alembic tools. | `gaffer` |
| [OpenUSD tools (usdview, usdcat …)](pipeline-formats.md) | Universal Scene Description: the scene format shared by Blender, Houdini, Maya and game engines. usdview shows a USD file; usdcat, usdchecker, usdtree inspect and convert. | `usdview` |
| [Alembic tools (abcls, abctree …)](pipeline-formats.md) | Alembic stores baked animation (moving geometry) to move it between programs. | `abcls` |
| [Open Shading Language (oslc, oslinfo, testshade)](pipeline-formats.md) | Language for writing your own materials (shaders); works in Blender Cycles and Gaffer. | `oslc` |
| [OpenEXR and OpenImageIO tools](pipeline-formats.md) | EXR is the high-quality image format of film work (many layers, real light values). oiiotool converts, resizes and combines images; exrheader shows what is inside. | `oiiotool` |
| [OpenColorIO tools](pipeline-formats.md) | Colour management: keeps colours identical across Blender, Krita, Gaffer and your screen. | `ociocheck` |
| [OpenVDB tools](pipeline-formats.md) | Format for smoke, fire, clouds and other volumes. | `vdb_print` |
| [Animux VFX Python](pipeline-formats.md) | A ready Python 3.11 with Mitsuba, LuxCore, OpenUSD, OpenEXR, OpenColorIO, OpenImageIO, MaterialX and NumPy installed together. | `animux-vfx-python` |

## Render farm

Spread rendering over several computers. Menu: **3D Animation → Render Queue Managers**.

| Program | What it does | Start it |
|---|---|---|
| [Flamenco](flamenco.md) | Blender's official render farm: one Manager hands out frames, every other computer runs a Worker. Has a web page to watch the jobs. | `animux-flamenco-manager` |
| [Farmerjoe](flamenco.md) | The small Perl render farm that came with the original Animux. Kept for compatibility; use Flamenco for new work. | `farmerjoe` |

## 2D animation

Menu: **2D Animation**.

| Program | What it does | Start it |
|---|---|---|
| [OpenToonz](opentoonz.md) | The studio 2D animation program (the open-source Toonz used by Studio Ghibli): hand-drawn and cut-out animation with the Xsheet timesheet, scan cleanup, ink and paint, and a node-based FX schematic. | `opentoonz` |
| [Synfig Studio](synfig.md) | 2D vector animation with automatic in-between frames (tweening) and bone rigs for cut-out characters. | `synfigstudio` |
| [Pencil2D](pencil2d.md) | The simplest way to make hand-drawn, frame-by-frame animation with onion skin. Great first program for children and beginners. | `pencil2d` |
| [TupiTube (Tupi)](pencil2d.md) | 2D animation for schools and beginners: draw, tween and export short cartoons. | `tupi` |

## Stop motion

Menu: **StopMotion Animation**.

| Program | What it does | Start it |
|---|---|---|
| [Stopmotion (Linux Stopmotion)](stopmotion.md) | Take pictures with a webcam or camera, frame by frame, with onion skin to line up the next shot, then export a video. | `stopmotion` |

## Drawing, painting and images

Menu: **2D Graphics**.

| Program | What it does | Start it |
|---|---|---|
| [Krita](krita.md) | Professional digital painting with brushes, layers and a full frame-by-frame animation timeline. Works well with drawing tablets. | `krita` |
| [GIMP](gimp-inkscape.md) | Photo and image editing: retouch renders, paint textures, cut out backgrounds, batch-convert images. | `gimp` |
| [Inkscape](gimp-inkscape.md) | Vector drawing: logos, titles, character designs and backgrounds that stay sharp at any size. | `inkscape` |
| [MyPaint](gimp-inkscape.md) | Distraction-free painting on an endless canvas, for sketches and concept art. | `mypaint` |
| [GrafX2](gimp-inkscape.md) | Pixel-art editor for game sprites and retro graphics. | `grafx2` |
| [mtPaint](gimp-inkscape.md) | Very small, fast paint program for pixel art and quick edits. | `mtpaint` |
| [ImageMagick and G'MIC](../tutorials/command-line-rendering.md) | Command-line image tools: resize, convert or add text to hundreds of images at once. | `convert` |

## Video editing and conversion

Menu: **NLV Editors** (non-linear video editors) and **DVD Authoring → Production**.

| Program | What it does | Start it |
|---|---|---|
| [Kdenlive](kdenlive.md) | The recommended video editor on Animux: cut shots together, add music, titles, transitions and effects, then export MP4. | `kdenlive` |
| [OpenShot](video-tools.md) | Very simple video editor: drag clips onto the timeline and export. | `openshot-qt` |
| [Cinelerra-GG](video-tools.md) | Powerful, professional-style editor with colour grading, motion tracking and many effects. Takes time to learn. | `cin` |
| [Avidemux](video-tools.md) | Quick cutting, filtering and re-encoding of a single video file. | `avidemux` |
| [HandBrake](video-tools.md) | Convert a finished video for YouTube, phones or the web with ready presets. | `ghb` |
| [FFmpeg](video-tools.md) | The command-line Swiss army knife for video and sound: turn image sequences into movies, convert, cut, record the screen. | `ffmpeg` |
| [MKVToolNix](video-tools.md) | Combine video, several audio tracks and subtitles into one .mkv file without re-encoding. | `mkvtoolnix-gui` |
| [Subtitle Editor and Gnome Subtitles](video-tools.md) | Write and time subtitles for your film. | `subtitleeditor` |

## Playback and review

Look at renders, image sequences and videos.

| Program | What it does | Start it |
|---|---|---|
| [DJV](video-tools.md) | Professional player for image sequences and EXR renders: play frames at the right speed, compare versions, check colours. | `djv` |
| [VLC](video-tools.md) | Plays every video and sound file. | `vlc` |
| Ristretto and Eye of GNOME | Simple picture viewers. Double-click any image in the file manager. | `ristretto` |

## Sound and music

Menu: **Sound Engineering**.

| Program | What it does | Start it |
|---|---|---|
| [Ardour](audio.md) | Professional recording studio: record voices, mix many tracks, add effects, master the soundtrack. | `ardour` |
| [Audacity](audio.md) | Record and clean up voice-overs and sound effects. The easiest sound editor. | `audacity` |
| [LMMS](audio.md) | Make music with built-in instruments, beats and loops. | `lmms` |
| [Hydrogen](audio.md) | Drum machine: click patterns together to make rhythms. | `hydrogen` |
| [MuseScore 3](audio.md) | Write sheet music and hear it played back. | `mscore3` |
| [Rosegarden](audio.md) | MIDI and audio sequencer for composing a score. | `rosegarden` |
| [Synthesizers (ZynAddSubFX, Yoshimi, Qsynth, Guitarix, VMPK)](audio.md) | Software instruments, a guitar amplifier and an on-screen piano keyboard. |  |
| [Sound analysis and conversion (Sonic Visualiser, Praat, SoundConverter, SoX)](audio.md) | See sound as a picture, analyse speech for lip sync, convert between formats. |  |
| [Audio setup (PipeWire, JACK, QjackCtl, PulseAudio Volume Control)](audio.md) | Choose speakers and microphones, set volumes, connect audio programs to each other. | `pavucontrol` |

## AI tools

Programs that use machine learning. They run on your computer; nothing is sent to the internet.

| Program | What it does | Start it |
|---|---|---|
| [Upscayl](upscayl.md) | Makes small or blurry images 2× to 4× bigger and sharper with AI models, offline. Needs a Vulkan graphics card for good speed. | `/opt/Upscayl/upscayl` |
| [Whisper](ai-tools.md) | Speech to text: transcripts and subtitles (SRT, VTT) from audio or video, in many languages, offline after the model download. | `animux-whisper` |
| [rembg](ai-tools.md) | Removes the background of photos and frames with an AI model; writes PNG with transparency. About 1 GB model download on first use. | `animux-rembg` |
| [Ollama](ai-tools.md) | Runs chat language models offline. Not on the ISO: install with sudo animux-install-local-ai --ollama (1.5 GB). | `ollama` |
| [ComfyUI](ai-tools.md) | Stable Diffusion image generation with a node editor in the browser. Not on the ISO: install with sudo animux-install-local-ai --comfyui (--cuda for NVIDIA, --rocm for AMD). Models go in ~/ComfyUI/models/checkpoints. | `animux-comfyui` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](ai-agents.md) | Let an AI assistant work in Blender, GIMP 3.2, Krita 5.3 and Inkscape 1.4 through MCP: offline with a local Ollama model (animux-mcp agent) or with Claude Code. | `animux-mcp` |
| [LTX (Lightricks API)](ai-tools.md) | Video with sound from text or a picture, made in Lightricks' cloud with an API key (animux-ltx-api key). Also an MCP server for AI agents. | `animux-ltx-api` |
| [LTX-2 local (ComfyUI)](ai-tools.md) | LTX-2 video with sound on your own NVIDIA card (24-32 GB) in ComfyUI; about 40 GB of models. | `animux-ltx-models` |
| [Python for AI and data](../agents/command-reference.md) | Ready to run your own image and machine-learning scripts; use python3 -m venv for extra libraries. | `python3` |

## Storyboards, print and PDF

Menu: **Publishing**.

| Program | What it does | Start it |
|---|---|---|
| [Scribus](storyboard-publishing.md) | Page layout for storyboards, posters, comics and portfolios, with PDF export. | `scribus` |
| [PDF Arranger and Document Viewer](storyboard-publishing.md) | Read PDFs; merge, reorder and rotate their pages. | `pdfarranger` |

## Discs and backups

Menu: **DVD Authoring → Backup** and **Digital Asset Managers**.

| Program | What it does | Start it |
|---|---|---|
| [K3b](system-tools.md) | Burn data, audio and video DVDs or CDs (for example a backup of a project). | `k3b` |
| [Timeshift](system-tools.md) | Snapshots of the system, so you can roll back after a bad update (installed systems only). | `timeshift-launcher` |

## Desktop and system tools

Everyday tools. Most are in **Accessories**, **System** and **Settings**.

| Program | What it does | Start it |
|---|---|---|
| [Thunar File Manager](../desktop/files.md) | Browse, copy, rename and open files; USB drives appear here automatically. | `thunar` |
| [Catfish and Disk Usage Analyzer](../desktop/files.md) | Find files by name, and see which folders fill up your disk. | `catfish` |
| [Firefox ESR](../desktop/tour.md) | Web browser. Also shows this guide. | `firefox-esr` |
| [Xfce Terminal](../desktop/terminal.md) | Type commands. Only needed for a few tasks; this guide gives every command in full. | `xfce4-terminal` |
| [Screenshot](video-tools.md) | Take a picture of the screen or a window. For screen recording see the FFmpeg command. | `xfce4-screenshooter` |
| [Synaptic Package Manager](../desktop/add-software.md) | Install, update and remove software with a list and check boxes. | `synaptic-pkexec` |
| [GParted and Disks](system-tools.md) | See, format and partition disks and USB sticks. Careful: these can erase data. | `gnome-disks` |
| [Virtual machines and containers (QEMU, Virtual Machine Manager, Docker, Podman)](system-tools.md) | Run other systems inside Animux, or packaged services. | `virt-manager` |
| [Flatpak](../desktop/add-software.md) | Install newer versions of programs from Flathub (for example Krita, OBS Studio, OpenToonz). | `flatpak` |

## Animux tools

Menu: **Animux Tools**.

| Program | What it does | Start it |
|---|---|---|
| [Animux Self-Test](../help/self-test.md) | Checks in a few minutes that the renderers and main programs work on your computer, and saves every test picture. | `animux-selftest` |
| [Animux Sample Scenes](../help/self-test.md) | Small example files for each renderer and format, to open and learn from. | `xdg-open /usr/share/animux/samples` |
| [Animux Guide](../agents/overview.md) | This guide, offline. Also at http://127.0.0.1:8765/ for programs and AI agents. | `animux-docs` |
| [Install DaVinci Resolve](../desktop/add-software.md) | Opens the Blackmagic download page for DaVinci Resolve, which Animux may not include for licence reasons. | `/usr/lib/animux/install-scripts/install-davinci-resolve.sh` |


The same list for programs is in [api/software.json](../../api/software.json); [Versions](../about/versions.md) shows every version number.
