# AI tools

> Speech to text and subtitles (Whisper), background removal (rembg), local chat models (Ollama) and Stable Diffusion (ComfyUI), all running on your own computer.

Animux comes with AI tools that run **on your own computer**. Nothing you process is uploaded. Some tools are ready to use; the large ones are downloaded only when you want them.

| Tool | What it does | Ready? | Command |
|---|---|---|---|
| **Whisper** | turns speech into text and subtitles | yes | `animux-whisper` |
| **rembg** | cuts people and objects out of pictures (removes the background) | yes | `animux-rembg` |
| **[Upscayl](upscayl.md)** | makes pictures bigger and sharper | yes, in the menu | — |
| **Ollama** | chat models (like ChatGPT, but offline) | download 1.5 GB | `sudo animux-install-local-ai --ollama` |
| **ComfyUI** | Stable Diffusion: make pictures from text | download 0.5–3 GB, plus a model | `sudo animux-install-local-ai --comfyui` |
| **LTX** in the cloud (Lightricks API) | video **with sound** from text or a picture | LTX account + API key; paid per second of video | `animux-ltx-api` |
| **LTX-2** on your computer | the same, run locally in ComfyUI | NVIDIA card with 24–32 GB; about 40 GB of models | `sudo animux-install-local-ai --ltx-local --cuda` |

!!! note "Internet and space for the first use"
    Every tool downloads its **AI model** the first time you use it (from 70 MB to several GB). After that it works offline. In a [live session](../start/live-session.md) downloads are kept in memory and lost when you switch off; [install Animux](../start/install.md) to keep them.

These tools work from the [terminal](../desktop/terminal.md). Open a terminal in the folder with your files (in the file manager: right-click → *Open Terminal Here*).

## Whisper: speech to text and subtitles

Whisper listens to an audio or video file and writes down what is said. Use it for dialogue transcripts, lip-sync timing sheets and subtitles.

```
animux-whisper dialogue.wav --model small --language en
```

It writes `dialogue.txt`, `dialogue.srt` and other formats into the folder the terminal is in. Video files work too (`scene01.mp4`). Useful options:

| Option | Meaning |
|---|---|
| `--model tiny` / `base` / `small` / `medium` / `large` | bigger = more accurate and slower. `small` is a good start. First download: tiny 72 MB, small 460 MB, large 2.9 GB. |
| `--language en` | the spoken language (`de`, `fr`, `es`, `ja` …). Without it Whisper guesses. |
| `--output_format srt` | only the subtitle file. `txt` = plain text, `all` = every format. |
| `--task translate` | translate the speech into English. |
| `--output_dir subtitles` | where to put the files. |

On the Animux test machine (4 processor cores, no graphics card) the `tiny` model wrote down a 9-second clip in 10 seconds, including the model download. Names it has never heard may be misspelt ("Animux" became "Anomox"), so check the text.

**Subtitles in a film:** load the `.srt` file in [Kdenlive](kdenlive.md) (*Project → Subtitles → Import Subtitle File*), or burn it in with FFmpeg:

```
ffmpeg -i film.mp4 -vf subtitles=film.srt film-subtitled.mp4
```

## rembg: remove backgrounds

rembg cuts out the main subject of a picture and makes the background transparent (a PNG with transparency). Use it for reference photos, collage animation, character turnarounds and compositing.

```
animux-rembg i photo.jpg photo-cutout.png
```

For a whole folder, for example an image sequence:

```
animux-rembg p frames/ frames-cutout/
```

The first time, rembg downloads its model (**about 1 GB**). On the test machine the first picture took two and a half minutes including the download; later pictures take seconds.

!!! tip "Check the edges"
    AI cut-outs can be soft or miss thin parts like hair and fingers. Clean the edge in [Krita or GIMP](gimp-inkscape.md) when it matters. In an image sequence the edge may flicker a little from frame to frame.

## Ollama: chat models on your computer

Ollama runs language models offline: ask for story ideas, dialogue variations, names, or help with commands. Install it once (1.5 GB download):

```
sudo animux-install-local-ai --ollama
```

Then start the Ollama service in one terminal and leave that window open:

```
ollama serve
```

In a **second** terminal, download a model and chat with it (type `/bye` to stop):

```
ollama run llama3.2
```

Models are listed at <https://ollama.com/library>. Small models (1–3 billion parameters, 1–2 GB) answer at reading speed on a normal processor; larger ones need a lot of memory or a graphics card. On the test machine a tiny model (`smollm2:135m`) downloaded and answered within a minute.

## ComfyUI: Stable Diffusion

ComfyUI makes pictures from a text description with Stable Diffusion models. You connect boxes (*nodes*) in your web browser. Install it once:

| Your graphics card | Command |
|---|---|
| NVIDIA | `sudo animux-install-local-ai --comfyui --cuda` |
| AMD (recent) | `sudo animux-install-local-ai --comfyui --rocm` |
| none, or Intel | `sudo animux-install-local-ai --comfyui` (runs on the processor: a picture takes many minutes) |

Start it from **2D Graphics → Ancillary Tools → ComfyUI (Stable Diffusion)** or with `animux-comfyui`. A terminal window opens (keep it open) and Firefox shows ComfyUI at `http://127.0.0.1:8188/`.

ComfyUI does **not** include a model. Download a Stable Diffusion model (a `.safetensors` file, 2–7 GB) from a model site, check its licence, and put it in your own folder:

```
~/ComfyUI/models/checkpoints/
```

Your pictures are saved in `~/ComfyUI/output/`.

!!! warning "Licences of AI models"
    Each model has its own licence, and some forbid commercial use. Read it before you use the pictures in paid work.

## LTX in the cloud: video and sound from text and images

**LTX** by Lightricks makes video clips **with matching sound** (up to 20 seconds, up to 4K) from a text description, or animates a picture, for example a still from your animation. Animux uses the **LTX API**: the video is made on Lightricks' servers, so no special graphics card is needed, but you need an account and it is **paid per second of video** (see <https://docs.ltx.io/pricing>).

1. Create an account and an **API key** at <https://console.ltx.io>, then store the key on Animux (only you can read it):
   ```
   animux-ltx-api key
   ```
2. **Text to video:**
   ```
   animux-ltx-api t2v "A paper boat drifts down a rainy street gutter, close-up, evening light"
   ```
3. **Animate a picture** (it becomes the first frame; describe the motion):
   ```
   animux-ltx-api i2v ~/Pictures/frame-001.png "The character turns her head and smiles"
   ```
   Add `--last ~/Pictures/frame-120.png` to also give the last frame: LTX fills in the movement between the two.

The finished MP4 is saved in `~/Videos/LTX/` (or where `-o file.mp4` says). Useful options:

| Option | Meaning |
|---|---|
| `--model ltx-2-5-fast` | default; `ltx-2-5-pro` gives better quality for a higher price; `ltx-2-3-fast`/`ltx-2-3-pro` are the older models |
| `--duration 6` | length in seconds; `auto` (default, LTX-2.5 only) lets the model choose |
| `--resolution 1920x1080` | also e.g. `1280x720`, `1080x1920` (portrait), `1080x1080` (square, LTX-2.5) |
| `--camera dolly_in` | camera move: `dolly_in`, `dolly_out`, `dolly_left`, `dolly_right`, `jib_up`, `jib_down`, `static`, `focus_shift` |
| `--no-audio` | silent video |

AI agents can use LTX too: `animux-ltx-api mcp` is an MCP server with the tools *text_to_video* and *image_to_video* (see [AI agents](ai-agents.md#4-ltx-video-for-agents)).

On the Animux test machines the command reached the LTX API (it answered with the expected "invalid key" error); making a real video needs your own key and credits.

## LTX-2 on your own computer

With a strong NVIDIA graphics card, LTX-2 can also run **locally** in ComfyUI: no account, no cost per video, nothing leaves your computer.

| | |
|---|---|
| Graphics card | **NVIDIA with 24 GB** (32 GB recommended); on the processor it is far too slow |
| Download | LTX-2.5 (int8): about **40 GB**; LTX-2.3: about 71 GB |
| Licence | LTX-2 Community License: free, also for paid work, for companies below USD 10 million yearly revenue |

1. Install ComfyUI with Lightricks' LTX nodes:
   ```
   sudo animux-install-local-ai --ltx-local --cuda
   ```
2. LTX-2.5 is *gated*: create a free account on huggingface.co, open <https://huggingface.co/Lightricks/LTX-2.5>, accept the licence, then sign in with an access token:
   ```
   /opt/animux/comfyui-env/bin/hf auth login
   ```
3. See what will be downloaded, then download (into `~/ComfyUI/models`):
   ```
   animux-ltx-models
   animux-ltx-models 2.5 --yes
   ```
4. Start ComfyUI (`animux-comfyui`) and open an LTX example workflow from `~/ComfyUI/custom_nodes/ComfyUI-LTXVideo/example_workflows/`.

Versions are pinned by Animux (nodes 1.1.0, fixed model revisions). On the Animux test machine (no graphics card) the installation was tested: ComfyUI loaded all 55 LTX nodes. Making videos locally was not tested, because it needs an NVIDIA card.

## For programmers

The tools live in a Python environment at `/opt/animux/ai-env` (Python 3.11, PyTorch 2.14 for the processor, Whisper, rembg, Hugging Face Hub). Use it for your own scripts:

```
/opt/animux/ai-env/bin/python my_script.py
/opt/animux/ai-env/bin/hf download <model-name>
```

The commands come from the package `animux-ai-tools`.
