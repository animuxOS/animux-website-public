# Command-line rendering and batch jobs

> Render Blender, Synfig and POV-Ray without opening them, keep renders running after you log out, render overnight, join frames into a video and convert hundreds of images at once.

Rendering from the [terminal](../desktop/terminal.md) is faster (no window to draw), uses less memory, and can run while you work or sleep. The same commands are what render farms and AI agents use.

## Blender

```
blender -b shot.blend -a                              # the whole animation, as set in the file
blender -b shot.blend -s 1 -e 48 -a                   # frames 1 to 48
blender -b shot.blend -f 1                            # only frame 1
blender -b shot.blend -o //frames/sh010_#### -F PNG -a   # choose output path and format
blender -b shot.blend -E CYCLES -a -- --cycles-device CPU
blender -b shot.blend --python-expr "import bpy; bpy.context.scene.cycles.samples=16" -a
```

- `-b` (background) must come **first**, the `.blend` file next, then the options in order; `-a` or `-f` at the **end** (Blender acts on the options in order).
- `####` becomes the frame number with four digits: `sh010_0001.png`.
- `//` means "relative to the .blend file".

## Keep it running after you close the terminal

```
nohup blender -b shot.blend -a > render.log 2>&1 &
tail -f render.log          # watch progress (Ctrl+C stops watching, not the render)
```

Or use `tmux`: type `tmux`, start the render, press **Ctrl+B** then **D** to leave it running; `tmux attach` brings it back.

## Render overnight, then switch off

```
blender -b shot.blend -a && systemctl poweroff
```

(Make sure the computer will not go to sleep first: [Settings → Power](../desktop/settings.md#power-screen-saver-and-lock).)

## Several shots in a row

```
for f in ~/Projects/my-short/04-shots/sh*.blend; do
    blender -b "$f" -a
done
```

## Use all processor cores, or leave some free

Blender uses every core. To keep the computer usable while rendering, lower its priority: `nice -n 19 blender -b shot.blend -a`. To limit threads: `blender -b shot.blend -t 4 -a`.

## Other programs

```
synfig ball.sifz -t png -o frames/ball.png                  # Synfig: all frames
povray +Iscene.pov +Oframes/f.png +W1920 +H1080 +A -D +KFI1 +KFF96   # POV-Ray: frames 1–96 (clock)
inkscape title.svg --export-type=png --export-width=1920      # Inkscape
openscad -o part.stl part.scad                               # OpenSCAD
gaffer execute -script lighting.gfr -nodes Render -frames 1-24  # Gaffer
```

## Frames into a video

```
ffmpeg -framerate 24 -i frames/sh010_%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 sh010.mp4
```

## Convert and check many images

```
mogrify -path small -resize 50% -format jpg frames/*.png      # half-size JPEG copies in ./small
oiiotool frames/sh010_0001.exr -o check.png                   # one EXR → PNG
ls frames | wc -l                                             # how many frames are there?
```

## Check that everything still works

```
animux-selftest blender povray synfig
```

See [the self-test](../help/self-test.md). The [command reference for agents](../agents/command-reference.md) lists the command-line use of every program.
