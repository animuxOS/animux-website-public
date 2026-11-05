# AI agents in Blender, GIMP, Krita and Inkscape (MCP)

> Let an AI assistant work in Blender, GIMP, Krita and Inkscape through MCP, offline with a local model or with Claude Code; plus Higgsfield and LTX cloud generation.

**MCP** (Model Context Protocol) lets an AI assistant use programs: it can ask Blender what is in the scene and build or change things, paint and edit images in GIMP and Krita, or draw vector shapes in Inkscape. Animux comes with the pieces in the package `animux-mcp`:

| Server | What it is | Notes |
|---|---|---|
| **blender** | the official **Blender Lab** MCP server 1.0.3 (Blender Foundation) | scene and file summaries, run code, screenshots, renders, Blender API and manual search |
| **blender-community** | **MCP for Blender** 2.2.4 by Siddharth Ahuja | run code, scene info, viewport look, Poly Haven assets; Animux turns its usage statistics **off** and its safe mode **on** |
| **gimp** | **GIMP MCP** by maorcc (GPL-3.0), for GIMP 3.2 | 79 tools: new images, layers, selections, colour and filters, text, export; run Python in GIMP; off until `animux-mcp gimp on` |
| **krita** | **Krita MCP** by SanSaSane (CC0), for Krita 5.3 | documents, layers, drawing, filters, export; run Python in Krita; off until `animux-mcp krita on` |
| **inkscape** | **inkmcp** 1.0.0 by Shriinivas (AGPL-3.0), for Inkscape 1.4 | create and change SVG elements in the open drawing, document info, PNG preview; run Python (inkex); off until `animux-mcp inkscape on` |
| **animux-guide** | this guide | search and read the guide |
| **higgsfield** | Higgsfield cloud image and video generation | needs a Higgsfield account and uses its paid credits; off by default |
| **ltx-api** | LTX video with sound (Lightricks API), `animux-ltx-api mcp` | needs an LTX API key; paid per second; off by default |
| **ltx-docs** | search the LTX API documentation | off by default |

!!! warning "The assistant can run code in your programs"
    All these bridges let the AI run Python inside Blender, GIMP, Krita or Inkscape **as you**: it can change or delete your work and read and write your files. **Save your work first**, keep backups, and switch a bridge off when you do not use it (`animux-mcp blender off`, `animux-mcp gimp off`, ...). The bridges only accept connections from your own computer. Blender itself recommends using this in a virtual machine or on a computer without sensitive files.

## 1. Switch on a Blender add-on

Only one of the two Blender add-ons can be on at a time (both use port 9876). In a [terminal](../desktop/terminal.md):

```
animux-mcp blender lab          # the official Blender Lab add-on (recommended)
animux-mcp blender community    # or: MCP for Blender
animux-mcp blender off          # switch both off again
```

The official add-on needs *Allow Online Access* in Blender's preferences; `animux-mcp` switches that on (the add-on only listens on your own computer, 127.0.0.1). Then **start Blender**. Check that it is ready:

```
animux-mcp status
```

The last line must say *Blender MCP bridge: listening on 127.0.0.1:9876*.

## 1b. Switch on GIMP, Krita or Inkscape

Each program gets a small plug-in that runs inside it; `animux-mcp` installs it **for your account only** and switches the matching server on in your server list (`~/.config/animux/mcp/servers.json`). Run these as your normal user, not with sudo.

| Program | Switch on | Then |
|---|---|---|
| **GIMP 3.2** | `animux-mcp gimp on` | `animux-mcp gimp start` opens GIMP with the bridge already running (127.0.0.1:9877). Or start GIMP yourself and choose **Tools → MCP → Start MCP Server**. |
| **Krita 5.3** | close Krita, then `animux-mcp krita on` | Start Krita: the bridge starts with it (it uses a secret token stored in your Krita folder). Check it with `python3 /usr/share/animux/mcp/krita/mcp_server.py --selftest`. |
| **Inkscape 1.4** | `animux-mcp inkscape on` | Start (or restart) Inkscape and open a drawing; the AI works on the drawing that is open. It talks to Inkscape through your desktop session (D-Bus). |

`animux-mcp status` shows which bridges are running. Switch one off again with `animux-mcp gimp off` (or `krita off`, `inkscape off`).

These bridges belong to the **new** GIMP 3.2, Krita 5.3 and Inkscape 1.4 from the Animux repository (packages `animux-gimp`, `animux-krita`, `animux-inkscape`); they do not work with the older Debian versions.

## 2a. Offline, with a local model (Ollama)

1. Install Ollama once: `sudo animux-install-local-ai --ollama` (see [AI tools](ai-tools.md#ollama-chat-models-on-your-computer)).
2. Download a model that can **use tools**, for example `ollama pull qwen3:8b` (5 GB; needs about 8 GB of free memory) or, on a small computer, `ollama pull llama3.2` (2 GB).
3. Start the agent: menu **Animux Tools → AI Agent (local, MCP)**, or in a terminal:

   ```
   animux-mcp agent qwen3:8b
   ```

4. Type what you want, for example *"Add a red cube above the monkey and point the camera at it"*. Before each action the agent asks for your OK (**y**). Type `quit` to stop.

Small local models make mistakes with tools; larger models (or a graphics card) work much better.

## 2b. With Claude Code

Claude Code is Anthropic's AI assistant for the terminal. It needs a Claude account (a paid plan or API credits) and the internet. It is Anthropic's program, under their terms, and it updates itself often, so Animux does not ship it: Animux sets it up for you with Anthropic's own installer.

**The easy way:** menu **Animux Tools → Claude Code (AI agent)**. The first time, it asks a few questions and then starts Claude Code. Or, in a [terminal](../desktop/terminal.md):

```
animux-mcp claude-code setup
```

It asks before each step (press Enter for yes):

1. Installs Claude Code from claude.ai (about a minute). The installer's note about *PATH* is taken care of in the next step.
2. Adds Claude Code's folder `~/.local/bin` to your PATH, for new terminals.
3. Switches on the bridges for Blender (official add-on), GIMP, Krita and Inkscape (section 1 and 1b). Close Krita first.
4. Makes the work folder `~/ai-art` (or the folder you name: `animux-mcp claude-code setup ~/my-film`). Claude Code asks once per folder whether you trust it, and never remembers that for your home folder, so work in a folder.
5. Keeps your account's **claude.ai connectors** (Gmail, Google Drive, Calendar, ...) out of Claude Code on this computer, so it cannot read your mail. Then it adds the Animux servers that are switched on (the guide, Blender, GIMP, Krita, Inkscape) to the work folder.

Then start Claude Code from the menu, or with `animux-mcp claude-code start`. The first start asks for a text style, signs you in through your browser, and asks whether you trust the folder: choose **Yes, I trust this folder** (the first answer offered is *No, exit*). Run the setup again at any time, for example after `animux-mcp enable ltx-api`: it updates the servers of the folder. In a live session, everything is gone at power-off, so run it once per session.

**By hand:** install with `curl -fsSL https://claude.ai/install.sh | bash`, add `~/.local/bin` to your PATH, make a folder and go into it, and add the servers there. `animux-mcp claude-code` prints the commands; for example:

```
claude mcp add animux-guide -- /usr/bin/animux-docs mcp
claude mcp add blender -e BLENDER_MCP_HOST=127.0.0.1 -e BLENDER_MCP_PORT=9876 -- /opt/animux/mcp/lab/bin/blender-mcp
claude mcp add gimp -- /opt/animux/mcp/apps/bin/python /usr/share/animux/mcp/gimp/gimp_mcp_server.py
claude mcp add krita -- /usr/bin/python3 /usr/share/animux/mcp/krita/mcp_server.py
claude mcp add inkscape -- /opt/animux/mcp/apps/bin/python /usr/share/animux/mcp/inkscape/extension/inkmcp/main.py
claude mcp list               # each one should say: Connected
```

Then start `claude` in that folder. Start the programs (section 1 and 1b), click back into the terminal and say what you want in plain words, for example *"Use Blender: replace the cube with a monkey on a floor, make her shiny red, and aim the camera at her"*. Claude asks before actions it cannot check; renders in a virtual machine without a graphics card are slow, so ask for a small preview.

## 3. Higgsfield (cloud)

Higgsfield offers 30+ image and video models (and workflows such as product videos and ads) through MCP at `https://mcp.higgsfield.ai/mcp`. It runs in Higgsfield's cloud, needs a Higgsfield account and uses their paid credits; nothing is installed on Animux. With Claude Code:

```
claude mcp add --transport http higgsfield https://mcp.higgsfield.ai/mcp
```

then sign in with `/mcp` inside Claude Code.

## 4. LTX video for agents

With an LTX API key (`animux-ltx-api key`, see [AI tools](ai-tools.md#ltx-in-the-cloud-video-and-sound-from-text-and-images)), agents can make videos with the tools *text_to_video* and *image_to_video*; each call waits until the video is ready and returns the path of the MP4. With Claude Code:

```
claude mcp add ltx-api -- /usr/bin/animux-ltx-api mcp
```

For the local agent: `animux-mcp enable ltx-api` (and `animux-mcp disable ltx-api` to switch it off). Every video costs money, so agents should ask before generating.

## Tested on Animux

On Animux r16 with Blender 5.2.3, both Blender servers listed their tools, read the scene and created an object through MCP; the guide server answered searches.

On Animux r16 (step-39) a test client acting like an AI agent used each bridge in a running program: **GIMP 3.2.6** made a new image, drew an ellipse, added text and exported a PNG; **Krita 5.3.4.1** passed its 9 self-checks, made a document, drew and exported a PNG; **Inkscape 1.4.4** added a circle and text to the open drawing, read the document and returned a PNG preview.

On Animux r16.1 (`_25`, step-44) **Claude Code** 2.1.312 in the live session used all four bridges, each started as described above: a monkey scene with a red material and a Cycles preview in Blender, a sunset poster with three layers in GIMP, a night-sky painting in Krita and a logo in Inkscape. This is the tutorial video *AI agents in Blender, GIMP, Krita and Inkscape*.

On the same live session (step-45), `animux-mcp claude-code setup` (animux-mcp 1.2.0) installed Claude Code 2.1.312, switched on the four bridges and added five servers to `~/ai-art`; `claude mcp list` showed all five *Connected* and none of the account's claude.ai connectors, and the menu entry started Claude Code in that folder.

Animux changes three small things in the upstream code, all checked at build time: GIMP MCP gets one renamed setting for the current MCP library; inkmcp is made to run on the Python 3.8 inside the Inkscape AppImage, starts Inkscape the way the AppImage needs for exports, and keeps its request file in a private folder (`~/.cache/inkmcp`) instead of the shared `/tmp`.

## For programmers and AI agents

- Server list (the usual `mcpServers` format): `/etc/animux/mcp/servers.json`; with your on/off choices applied: `~/.config/animux/mcp/servers.json` (`animux-mcp config` prints it). Switch any server: `animux-mcp enable|disable <name>`.
- Server programs: `/opt/animux/mcp/lab/bin/blender-mcp`, `/opt/animux/mcp/community/bin/mcp-for-blender`, `animux-docs mcp`; GIMP and Inkscape servers run on `/opt/animux/mcp/apps/bin/python` (`/usr/share/animux/mcp/gimp/gimp_mcp_server.py`, `/usr/share/animux/mcp/inkscape/extension/inkmcp/main.py`), the Krita server on `/usr/bin/python3 /usr/share/animux/mcp/krita/mcp_server.py` (standard library only).
- Versions and licences: `/usr/share/animux/mcp/VERSIONS`.
- Headless Blender with the official add-on: `blender --background file.blend --command blender_mcp`.
- See also [For AI agents](../agents/overview.md).
