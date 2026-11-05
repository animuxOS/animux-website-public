# Command reference

> Headless and command-line use of every Animux program, with conventions for output paths, exit codes, logs, displays and time limits.

## Conventions

| Topic | Rule on Animux |
|---|---|
| Shell | `bash`; the user's Home is `$HOME`; the guide's commands assume a normal user |
| Graphical programs | need the user's display: `DISPLAY=:0` (X11, Xfce). Check with `xdpyinfo -display :0 >/dev/null` |
| Headless programs | need no display; prefer them |
| Exit codes | 0 = success for every command below. Still check the output file: some programs return 0 after writing nothing |
| Time limits | wrap long jobs: `timeout 3600 blender -b …` |
| Logs | redirect: `cmd > job.log 2>&1` |
| Paths with spaces | quote them |
| Parallel jobs | Blender, Cycles, pbrt, LuxCore and Mitsuba each use all cores; run them one after another |
| Python with VFX libraries | `animux-vfx-python` (OpenUSD, OIIO, OpenEXR, OCIO, MaterialX, Mitsuba, LuxCore, NumPy) |
| Blender's own Python | `blender -b --python script.py` (module `bpy`) |
| Gaffer's Python | `gaffer env python script.py` or `gaffer python script.py` (modules `Gaffer`, `GafferScene`, `IECore`) |

## All headless commands

| Program | Command-line use (no window) |
|---|---|
| [Blender](../software/blender.md) | `blender -b scene.blend -o //render_#### -F PNG -f 1` |
| [Blender](../software/blender.md) | `blender -b scene.blend -a` |
| [Blender](../software/blender.md) | `blender -b --python script.py` |
| [OpenSCAD](../software/other-3d.md) | `openscad -o part.stl part.scad` |
| [POV-Ray](../software/renderers.md) | `povray +Iscene.pov +Oscene.png +W1280 +H720 +A -D` |
| [appleseed](../software/renderers.md) | `appleseed.cli scene.appleseed --output out.png` |
| [LuxCoreRender](../software/renderers.md) | `animux-vfx-python /usr/share/animux/samples/luxcore/render.py out.png` |
| [Mitsuba 3](../software/renderers.md) | `mitsuba scene.xml -o out.exr` |
| [Mitsuba 3](../software/renderers.md) | `animux-vfx-python /usr/share/animux/samples/mitsuba/render.py out.exr` |
| [pbrt-v4](../software/renderers.md) | `pbrt --outfile out.exr scene.pbrt` |
| [pbrt-v4](../software/renderers.md) | `imgtool convert out.exr out.png` |
| [Gaffer](../software/gaffer.md) | `gaffer execute -script scene.gfr -nodes Render` |
| [Gaffer](../software/gaffer.md) | `gaffer python script.py` |
| [OpenUSD tools (usdview, usdcat …)](../software/pipeline-formats.md) | `usdcat scene.usda -o scene.usdc` |
| [OpenUSD tools (usdview, usdcat …)](../software/pipeline-formats.md) | `usdchecker scene.usda` |
| [OpenUSD tools (usdview, usdcat …)](../software/pipeline-formats.md) | `usdtree scene.usda` |
| [Alembic tools (abcls, abctree …)](../software/pipeline-formats.md) | `abcls -r file.abc` |
| [Alembic tools (abcls, abctree …)](../software/pipeline-formats.md) | `abctree file.abc` |
| [Alembic tools (abcls, abctree …)](../software/pipeline-formats.md) | `abcecho file.abc` |
| [Open Shading Language (oslc, oslinfo, testshade)](../software/pipeline-formats.md) | `oslc myshader.osl` |
| [Open Shading Language (oslc, oslinfo, testshade)](../software/pipeline-formats.md) | `oslinfo myshader.oso` |
| [OpenEXR and OpenImageIO tools](../software/pipeline-formats.md) | `oiiotool in.exr --resize 50% -o out.png` |
| [OpenEXR and OpenImageIO tools](../software/pipeline-formats.md) | `exrheader in.exr` |
| [OpenEXR and OpenImageIO tools](../software/pipeline-formats.md) | `iinfo -v in.exr` |
| [OpenColorIO tools](../software/pipeline-formats.md) | `ociocheck --iconfig config.ocio` |
| [OpenVDB tools](../software/pipeline-formats.md) | `vdb_print -l file.vdb` |
| [Animux VFX Python](../software/pipeline-formats.md) | `animux-vfx-python -c "import pxr, OpenImageIO, PyOpenColorIO, mitsuba, pyluxcore"` |
| [Flamenco](../software/flamenco.md) | `flamenco-manager` |
| [Flamenco](../software/flamenco.md) | `flamenco-worker -manager http://MANAGER:8080/` |
| [OpenToonz](../software/opentoonz.md) | `LD_LIBRARY_PATH=/opt/animux/opentoonz/lib/opentoonz /opt/animux/opentoonz/bin/tcomposer scene.tnz -o out.png` |
| [Synfig Studio](../software/synfig.md) | `synfig file.sif -t png -o frame.png` |
| [Synfig Studio](../software/synfig.md) | `synfig file.sifz -t ffmpeg -o movie.mp4` |
| [GIMP](../software/gimp-inkscape.md) | `gimp-console -i --batch-interpreter=python-fu-eval -b "exec(open('script.py').read())" --quit` |
| [GIMP](../software/gimp-inkscape.md) | `gimp-console -i -b '(gimp-quit 0)'` |
| [Inkscape](../software/gimp-inkscape.md) | `inkscape drawing.svg --export-type=png --export-width=1920` |
| [ImageMagick and G'MIC](../tutorials/command-line-rendering.md) | `convert in.png -resize 50% out.jpg` |
| [ImageMagick and G'MIC](../tutorials/command-line-rendering.md) | `mogrify -format jpg *.png` |
| [ImageMagick and G'MIC](../tutorials/command-line-rendering.md) | `montage frame*.png -tile 4x -geometry +4+4 contact-sheet.png` |
| [Avidemux](../software/video-tools.md) | `avidemux-cli --load in.mp4 --save out.mkv --output-format MKV` |
| [HandBrake](../software/video-tools.md) | `HandBrakeCLI -i in.mov -o out.mp4 --preset "Fast 1080p30"` |
| [FFmpeg](../software/video-tools.md) | `ffmpeg -framerate 24 -i render_%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 movie.mp4` |
| [FFmpeg](../software/video-tools.md) | `ffmpeg -i movie.mp4 -i music.wav -c:v copy -c:a aac -shortest final.mp4` |
| [Sound analysis and conversion (Sonic Visualiser, Praat, SoundConverter, SoX)](../software/audio.md) | `sox in.wav out.flac` |
| [Sound analysis and conversion (Sonic Visualiser, Praat, SoundConverter, SoX)](../software/audio.md) | `sox in.wav -n stat` |
| [Whisper](../software/ai-tools.md) | `animux-whisper dialogue.wav --model small --language en --output_format srt` |
| [Whisper](../software/ai-tools.md) | `animux-whisper film.mp4 --task translate --output_format srt` |
| [rembg](../software/ai-tools.md) | `animux-rembg i photo.jpg cutout.png` |
| [rembg](../software/ai-tools.md) | `animux-rembg p frames/ frames-cutout/` |
| [Ollama](../software/ai-tools.md) | `ollama serve` |
| [Ollama](../software/ai-tools.md) | `ollama run llama3.2 "Write three names for a robot character"` |
| [Ollama](../software/ai-tools.md) | `curl http://127.0.0.1:11434/api/generate -d '{"model":"llama3.2","prompt":"hello"}'` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `animux-mcp blender lab` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `animux-mcp gimp on` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `animux-mcp krita on` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `animux-mcp inkscape on` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `animux-mcp status` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `animux-mcp agent qwen3:8b` |
| [MCP servers (Blender, GIMP, Krita, Inkscape)](../software/ai-agents.md) | `blender --background scene.blend --command blender_mcp` |
| [LTX (Lightricks API)](../software/ai-tools.md) | `animux-ltx-api t2v "PROMPT" --duration 6` |
| [LTX (Lightricks API)](../software/ai-tools.md) | `animux-ltx-api i2v frame.png "PROMPT"` |
| [LTX (Lightricks API)](../software/ai-tools.md) | `animux-ltx-api mcp` |
| [Animux Self-Test](../help/self-test.md) | `animux-selftest` |
| [Animux Self-Test](../help/self-test.md) | `animux-selftest --list` |
| [Animux Self-Test](../help/self-test.md) | `animux-selftest blender povray` |
| [Animux Guide](overview.md) | `animux-docs search render farm` |
| [Animux Guide](overview.md) | `animux-docs show tutorials/first-3d-render` |
| [Animux Guide](overview.md) | `animux-docs software blender --json` |
| [Animux Guide](overview.md) | `animux-docs mcp` |


## Blender recipes

```
# Render frame 1 of a file to PNG, 50% resolution, 16 samples
blender -b in.blend --python-expr "import bpy; s=bpy.context.scene; s.render.resolution_percentage=50; s.cycles.samples=16" -o /tmp/out_#### -F PNG -f 1

# Information about a .blend file (scenes, frame range, engine), as JSON
blender -b in.blend --python-expr "import bpy,json; s=bpy.context.scene; print('JSON'+json.dumps({'scene':s.name,'start':s.frame_start,'end':s.frame_end,'fps':s.render.fps,'engine':s.render.engine,'res':[s.render.resolution_x,s.render.resolution_y]}))" | grep '^JSON' | cut -c5-

# Convert / export
blender -b in.blend --python-expr "import bpy; bpy.ops.wm.usd_export(filepath='/tmp/out.usdc')"
blender -b --python-expr "import bpy; bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.wm.obj_import(filepath='in.obj'); bpy.ops.wm.save_as_mainfile(filepath='/tmp/out.blend')"
```

Progress lines start with `Fra:`; a finished still prints `Saved: '<path>'`.

## Images and video

```
oiiotool in.exr --colorconvert linear sRGB -o out.png      # EXR → PNG with a colour transform
iinfo -v in.exr                                            # resolution, channels, metadata
ffprobe -v error -show_entries format=duration -of csv=p=0 in.mp4   # length in seconds
ffmpeg -y -framerate 24 -i f_%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 out.mp4
convert in.png -resize 1920x1080 out.jpg
```

## Checking the system

```
animux-selftest --list               # available test names
animux-selftest blender              # exit 0 = Blender works
grep -o -w -E 'sse4_2|avx|avx2' /proc/cpuinfo | sort -u
nproc; free -g; df -h "$HOME"
test -d /run/live/medium && echo live || echo installed
dpkg-query -W 'animux-*'             # installed Animux packages and versions
```

## Opening programs for the user

When the user wants to work in a program themselves, open it on their display and detach it:

```
DISPLAY=:0 setsid -f krita ~/Pictures/sketch.kra >/dev/null 2>&1
DISPLAY=:0 xdg-open ~/Videos/film.mp4            # default program for a file
```

The menu entries' exact commands are in `/usr/share/applications/*.desktop` (`Exec=` lines).
