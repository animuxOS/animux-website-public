# OpenToonz

> The studio 2D animation program: hand-drawn and cut-out animation with the Xsheet, scan cleanup, ink and paint, and node-based effects. New in r16.3.

<div class="factbox" markdown="1">

| OpenToonz | |
|---|---|
| Menu | 2D Animation → OpenToonz |
| Version | 1.8.0 (built by Animux, new in r16.3) |
| Command | `opentoonz` |
| Good for | Intermediate |
| Files | .tnz scenes with .tlv, .pli and raster levels; renders PNG/TIFF sequences and video |
| Licence | BSD-3-Clause |
| Website | [opentoonz.github.io](https://opentoonz.github.io/) |
| Self-test | `animux-selftest opentoonz` |

</div>


**OpenToonz** is the open-source version of **Toonz**, the 2D animation software used in studios, among them Studio Ghibli, whose edition it is based on. It covers the whole traditional 2D pipeline: draw or scan the drawings, clean up the lines, paint them, time them on the **Xsheet**, add effects and render.

!!! note "New in r16.3"
    OpenToonz is on Animux from release **r16.3**. Debian has no OpenToonz package, so Animux builds version 1.8.0 from its source code (package `animux-opentoonz`, installed in `/opt/animux/opentoonz`).

## Start it

**2D Animation → OpenToonz**, or type `opentoonz`. The first start copies OpenToonz's brushes, templates and settings to `~/.config/OpenToonz`; that takes a few seconds.

The **Startup** window opens on top:

1. Keep the project **sandbox** (OpenToonz's practice project), or click **New Project...** for a real one.
2. Click **Create a New Scene**, type a **Scene Name** and click **Create Scene**.

Untick **Show this at startup** if you do not want this window every time.

## The main parts

| Part | What it is |
|---|---|
| **Rooms** (tabs top right) | ready-made window layouts: *Drawing*, *Timeline*, *Cleanup*, *InknPaint*, *Xsheet*, … |
| **Viewer** | the canvas; the red frame is the camera |
| **Xsheet** / **Timeline** | columns are layers, rows are frames: which drawing is shown on which frame |
| **Level Strip** | all drawings of the current level |
| **FX Schematic** | effects as connected nodes (*Windows → Schematic*) |

A **level** is a set of drawings (one character, one prop). OpenToonz has three kinds: **Toonz Raster** (`.tlv`, pencil-like lines with separate ink and paint), **Toonz Vector** (`.pli`, editable lines) and plain **Raster** (`.tif`, `.png`).

## A first drawing

1. In the **Drawing** room, click the cell of frame 1 in column *Col1*.
2. Press **B** for the **Brush** and draw in the viewer. OpenToonz makes a new level for it.
3. Click frame 2 and draw the next pose. **Onion skin** (*View → Onion Skin*) shows the frame before.
4. **File → Save All** (**Ctrl+S**). The scene goes to `scenes/`, the drawings to `drawings/` of the project.
5. **Render → Output Settings** to choose the format and folder, then **Render → Render** (**Ctrl+Shift+R**). Files go to the project's `outputs/` folder.

A ready-made sample project is in `/usr/share/animux/samples/opentoonz/animux-lines`; `animux-selftest opentoonz` renders it.

## Render without the window

OpenToonz renders with **tcomposer**. After you have started OpenToonz once:

```
LD_LIBRARY_PATH=/opt/animux/opentoonz/lib/opentoonz \
  /opt/animux/opentoonz/bin/tcomposer ~/.config/OpenToonz/stuff/sandbox/scenes/myscene.tnz -o /tmp/out.png
```

This writes `/tmp/out.0001.png`, `/tmp/out.0002.png`, … one file per frame. On a server without a screen, put `QT_QPA_PLATFORM=offscreen` in front.

## When to use something else

- Simple frame-by-frame drawing, for beginners and schools: [Pencil2D](pencil2d.md).
- Animation by moving shapes and bones with automatic in-betweens: [Synfig](synfig.md).
- Painterly animation with brushes and textures: [Krita](krita.md).

Help: the OpenToonz manual at [opentoonz.readthedocs.io](https://opentoonz.readthedocs.io/).
