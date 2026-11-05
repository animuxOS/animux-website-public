# Guide updates

> What changed in each version of this guide, which version you have, and how to install a newer one without a new ISO.

This guide is its own small package, **`animux-docs`**. When the guide improves, only that package changes: you **do not need a new ISO** or a reinstall. The ISO build number (`_25`) and the guide version (`1.0.25`) are separate.

## Which version do I have?

- At the bottom of every page: *Animux Guide 1.0.x for Genesis64 r16.1*.
- In a terminal: `animux-docs info` (line `docs_version`), or `dpkg -s animux-docs | grep Version`.
- For programs and AI agents: the `version` field in [api/pages.json](../../api/pages.json).

## How to get a newer guide

**From the Animux package repository** (once it is online; see the note below):

```
sudo apt update
sudo apt install --only-upgrade animux-docs
```

**From a downloaded file** (`animux-docs_<version>_all.deb`): open a [terminal](../desktop/terminal.md) in the folder that holds the file and type:

```
sudo apt install ./animux-docs_1.0.19_all.deb
```

When `sudo` asks for a password, type your own login password (nothing appears while you type). In the live session no password is needed.

Reload the guide in Firefox (**F5**) afterwards. The local guide server and the `animux-docs` command use the new pages at once.

!!! note "Live session"
    In a live session (USB stick or ISO), an updated guide lasts until you switch off, like everything else you change there. On an [installed](../start/install.md) Animux it stays.

!!! info "Repository not online yet"
    The Animux package repository (`https://apt.animux.org`) is prepared but not yet published, so `apt` cannot find updates there yet. Until it is, use the downloaded file.

## What changed

### 1.0.34 (2026-11-02)

- New page **[Renderer comparison](../software/renderer-comparison.md)**: the seven renderers side by side (full name, maker, how they calculate light, what they run on, best at, use it for), which one when, and OSL.
- New page **[Studio formats](../software/studio-formats.md)**: OpenUSD, Alembic, OpenEXR, OpenColorIO and OpenVDB, one card each: which studio made it, the problem it solves, the answer.
- **[Flamenco render farm](../software/flamenco.md#coming-opencue)**: a card on OpenCue (Sony Pictures Imageworks and Google Cloud, 2019), planned for r17, with the sources.
- **[Used in film production](../start/in-production.md)**: two Blender cards, *Flow* (Academy Award for Best Animated Feature 2025, made in Blender) and Ubisoft Animation Studio (Blender as its main 3D tool since 2019), with the sources.

### 1.0.33 (2026-11-02)

- **[Used in film production](../start/in-production.md)**: a third card, Studio Ghibli (Toonz Ghibli Edition, today OpenToonz), with its source.

### 1.0.32 (2026-11-02)

- New page **[Used in film production](../start/in-production.md)**: *Tears of Steel* (storyboards drawn in Krita) and *Stuart Little* 1 and 2 (textures and frame fixes in Film Gimp, a version of GIMP), with the sources.

### 1.0.31 (2026-11-01)

- New page **[Animux at a glance](../start/at-a-glance.md)**: all programs on one screen, grouped by the stages of a production (drawing, 2D, 3D, rendering, pipeline, render farm, sound, edit, AI, system), on the Debian 12 base. It is made from the software list, so it always shows the programs this guide describes.

### 1.0.30 (2026-10-30)

- The guide now describes **Animux r16.3** (`animux-genesis64-deb_28.iso`): [News](../news/2026-10-30-r16-3-release.md) with what is new (OpenToonz 1.8, the Maya Workflow Kit for Blender).

### 1.0.29 (2026-10-30)

- New page **[OpenToonz](../software/opentoonz.md)** (r16.3): the studio 2D animation program, built from source by Animux. Starting it, the Startup window, rooms and the Xsheet, a first drawing, rendering with and without the window. OpenToonz is in the [software list](../software/index.md) and `animux-selftest opentoonz` renders its sample project. [FAQ](../help/faq.md) and [Adding software](../desktop/add-software.md) no longer send you to Flathub for it.
- [Blender](../software/blender.md#coming-from-maya): new section **Coming from Maya** for the Maya Workflow Kit (r16.3, off by default; `animux-blender-maya on|off|status` or the menu entry **Animux Tools → Blender: Maya Workflow Kit on/off**).

### 1.0.28 (2026-10-29)

- The guide now describes **Animux r16.2** (`animux-genesis64-deb_27.iso`; 1.0.27 named the test build `_26`, whose BIOS boot menu lost its artwork): [News](../news/2026-10-29-r16-2-release.md) with what changed (Claude Code in one step from the menu, boot menu without syntax errors).

### 1.0.26 (2026-10-29)

- **[AI agents with Claude Code](../software/ai-agents.md#2b-with-claude-code)**: one step instead of nine. The new menu entry **Animux Tools → Claude Code (AI agent)** (or `animux-mcp claude-code setup`, animux-mcp 1.2.0) installs Claude Code with Anthropic's installer, fixes the PATH, switches on the four bridges, makes the work folder `~/ai-art`, keeps the account's claude.ai connectors (Gmail, Drive, ...) out and adds the Animux servers. The commands by hand are still there. Tested in the r16.1 live session.

### 1.0.25 (2026-10-29)

- **[AI agents with Claude Code](../software/ai-agents.md#2b-with-claude-code)**: how to install Claude Code, work in a folder of its own, connect the Animux bridges (`claude mcp add`, `claude mcp list`) and ask for work in Blender, GIMP, Krita and Inkscape. Fixed the GIMP menu path: **Tools → MCP → Start MCP Server**. Tested on Animux r16.1 while recording the tutorial video *AI agents in Blender, GIMP, Krita and Inkscape*.

### 1.0.24 (2026-10-27)

- The guide now describes **Animux r16.1** (`animux-genesis64-deb_25.iso`): GIMP 3.2, Krita 5.3, Inkscape 1.4 and the AI bridges on the ISO; Debian's Krita 5.1 and Inkscape 1.2 removed (GIMP 2.10 stays as `gimp.debian` for G'MIC). The r16 problems with Flamenco workers, render farm roles (text login, own computer name per node), Wings 3D, moved UEFI installs and fail2ban are marked as fixed in r16.1.

### 1.0.23 (2026-10-27)

- **[AI agents](../software/ai-agents.md#1b-switch-on-gimp-krita-or-inkscape)** now also work in **GIMP 3.2, Krita 5.3 and Inkscape 1.4**: `animux-mcp gimp on`, `animux-mcp krita on`, `animux-mcp inkscape on` (package `animux-mcp` 1.1). Any server can be switched on or off for your account with `animux-mcp enable|disable <name>`. Tested on Animux r16.

### 1.0.22 (2026-10-27)

- **[AI tools](../software/ai-tools.md)**: the installer for AI that runs on your own computer is now `sudo animux-install-local-ai` (Ollama, ComfyUI, and new: **LTX-2 locally** with `--ltx-local`); the old name `animux-install-ai` still works. LTX in Lightricks' cloud is now `animux-ltx-api`.

### 1.0.21 (2026-10-27)

- **[GIMP 3.2, Krita 5.3, Inkscape 1.4](../software/gimp-inkscape.md)**: Animux now provides the current versions (packages `animux-gimp`, `animux-krita`, `animux-inkscape`); how to install them on r16, GIMP 3 batch mode with Python, and where G'MIC went.
- New page **[AI agents in Blender (MCP)](../software/ai-agents.md)**: the official Blender Lab MCP server and MCP for Blender (package `animux-mcp`), an offline agent with Ollama, Claude Code, and Higgsfield cloud generation. Tested on Animux r16.
- **[AI tools](../software/ai-tools.md#ltx-in-the-cloud-video-and-sound-from-text-and-images)**: LTX video with sound through the Lightricks API (`animux-ltx`: text to video, picture to video, MCP server for agents).

### 1.0.20 (2026-10-27)

- New page **[AI tools](../software/ai-tools.md)**: Whisper (speech to text, subtitles), rembg (background removal), Ollama (chat models) and ComfyUI (Stable Diffusion), tested on Animux r16 with measured download sizes and times. Four new entries in the software list.
- **[VirtualBox](../start/virtualbox.md#screen-size-copy-and-paste-shared-folders)**: Guest Additions steps tested on an installed r16 (screen resize, shared folders and clipboard in both directions); added the step "double-click the disc icon first", which was missing.
- **[Troubleshooting](../help/troubleshooting.md#no-bootable-option-after-installing-uefi)**: "No bootable option" after moving an installed UEFI disk, with the one-line fix.
- **[Flamenco render farm](../software/flamenco.md)**, tested with a Manager and a Worker in two Animux r16 machines: shared storage steps that also work in a live session (RAM disk, `fsid=0`, Workers mount `manager-pc:/`); the r16 problem where Workers never get work, with a one-line fix; the farm boot entries' known problems (desktop starts, all machines named "animux").
- **[Wings 3D](../software/other-3d.md#wings-3d)**: real screenshot, and how to start it on r16, where it opens no window without a graphics-card OpenCL driver.

### 1.0.19 (2026-10-27)

- **[Make a bootable USB stick](../start/usb-stick.md)** rewritten as a full step-by-step guide: what you need, checking the ISO, Rufus (with *DD Image mode* and the "format the disk" message explained), balenaEtcher, Ventoy, starting from the stick with the boot menu keys or from Windows, a problem table, and how to use the stick as a normal stick again.
- New page: **Guide updates** (this page). The guide version is shown at the bottom of every page, in `api/pages.json` and in `animux-docs info`.

### 1.0.18 (2026-10-27, on `animux-genesis64-deb_21.iso`)

- The first published guide: Getting Started, Using the Desktop, Software, ten tutorials, Help, For AI Agents, News and About, with screenshots taken on Animux.
- Offline search, `animux-docs` command, MCP server for AI agents, local server on `http://127.0.0.1:8765/`.
