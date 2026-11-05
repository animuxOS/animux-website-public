# From idea to finished short film

> The stages of an animated film production and which Animux program to use at each one, with a realistic plan for a first 30-second film.

Every animated film, from a school project to a feature, goes through the same stages. Knowing them helps you choose the right program and avoid redoing work.

<div class="pipeline">
<span>Idea</span><span>Script</span><span>Storyboard</span><span>Animatic</span><span>Design</span><span>Assets</span><span>Animation</span><span>Lighting &amp; render</span><span>Compositing</span><span>Edit &amp; sound</span><span>Export</span>
</div>

## The stages and the tools

| Stage | What you make | 2D film | 3D film | Stop motion |
|---|---|---|---|---|
| **1. Idea and script** | a one-sentence idea, then a short script | Mousepad, Gedit | | |
| **2. Storyboard** | a drawing per shot | [Krita](../software/krita.md), paper + scanner, Blender's Storyboarding template | same | same |
| **3. Animatic** | storyboard timed with dialogue | [Kdenlive](../software/kdenlive.md) | Blender | Kdenlive |
| **4. Voice recording** | dialogue as WAV | [Audacity](../software/audio.md) | Audacity | Audacity |
| **5. Design** | characters, colours, backgrounds | Krita, [Inkscape](../software/gimp-inkscape.md) | Krita, [MakeHuman](../software/makehuman.md) | clay, paper |
| **6. Assets** | finished characters and sets | Synfig cut-outs, Krita backgrounds | [Blender](../software/blender.md) models, rigs, materials | puppets, sets |
| **7. Animation** | the movement, shot by shot | [Pencil2D](../software/pencil2d.md), [Synfig](../software/synfig.md), Krita | Blender | [Stopmotion](../software/stopmotion.md) |
| **8. Lighting and rendering** | final frames as images | export frames | Blender Cycles/EEVEE, [render farm](../software/flamenco.md) | your photos |
| **9. Compositing** | effects, colour correction | Krita, Blender compositor | Blender compositor, [Gaffer](../software/gaffer.md) | Blender compositor |
| **10. Edit and sound** | the film with music, effects, titles | Kdenlive + [Ardour](../software/audio.md) | same | same |
| **11. Export** | MP4 for the web, high-quality master | Kdenlive, [HandBrake](../software/video-tools.md) | same | same |

## Your first 30-second film: a realistic plan

| Week | Do |
|---|---|
| 1 | Idea (one character, one place, one problem). Script of half a page. Storyboard with 8–12 shots. |
| 2 | Record the voices or choose music. Make the animatic in Kdenlive and watch it ten times. Change what does not work **now**. |
| 3 | Design and build: character, background(s). |
| 4–6 | Animate, shot by shot. Start with the hardest shot. Show it to someone every few days. |
| 7 | Render (overnight), colour, final edit, sound mix, titles and credits. Export. |

!!! tip "Keep it small"
    Thirty seconds is 720 frames at 24 fps. One character and one place is plenty. Finished and short beats long and unfinished.

## Rules that save days

- **One folder per project**, with the [layout studios use](../desktop/files.md#a-folder-layout-for-an-animation-project).
- **Name shots by number**: `sh010`, `sh020`… (leaving gaps lets you add `sh015` later).
- **Render to image sequences** (PNG or EXR), not to video. Edit in Kdenlive.
- **Lock the frame rate** (24 or 25 fps) at the start and use it everywhere.
- **Back up** to an external drive every day.
- **Test render small** (25–50 % resolution, few samples) before the final render.

## Credits and licences

If you use music, sounds, fonts or models made by others, check that their licence allows it, and credit them. CC0 means free for everything; CC-BY means free with credit.
