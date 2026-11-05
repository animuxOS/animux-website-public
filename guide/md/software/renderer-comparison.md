# Renderer comparison

> The seven renderers in Animux side by side: full name, who makes it, how it calculates light, what it runs on, what it does best and when to use it.

A renderer turns a 3D scene into a picture. They differ in **how they calculate light**: following rays of light like a camera does (*path tracing*), drawing the scene the way games do (*rasterisation*), or following light from both the camera and the lamps (*bidirectional*). That decides what each one is good at. Animux installs all seven, ready to use.

<div class="matrix" markdown="1">

| | Full name | Made by | How it calculates light | Runs on | Best at | Use it for |
|---|---|---|---|---|---|---|
| **Cycles** | Cycles Render Engine | Blender Foundation, in Blender | Path tracing, physically based | Processor or graphics card | Realistic light, soft shadows, glass, built-in denoising | Final frames of most films; also renders from Gaffer |
| **EEVEE** | Extra Easy Virtual Environment Engine | Blender Foundation, in Blender | Rasterisation (real time) with ray-traced reflections | Graphics card | Instant feedback, stylised and cartoon looks | Previews, motion graphics, stylised films (*Flow* was rendered in EEVEE) |
| **POV-Ray** | Persistence of Vision Raytracer | POV-Ray team, since 1991 | Ray tracing from a scene written as text | Processor | Exact shapes from maths, scenes as code | Teaching, maths art, generated scenes |
| **LuxCoreRender** | LuxCoreRender | LuxCoreRender project | Unbiased path tracing and bidirectional path tracing | Processor (GPU with a driver) | Caustics, light through glass and water, interiors | Product shots, architecture, the most accurate light |
| **appleseed** | appleseed | appleseed project | Physically based path tracing, OSL shaders | Processor | Production-style scenes and shading networks | Studying a VFX production renderer |
| **Mitsuba 3** | Mitsuba 3 | Realistic Graphics Lab, EPFL | Spectral and polarised path tracing; differentiable | Processor | Light by wavelength; works backwards from a picture to the scene | Research, scientific images, inverse rendering |
| **pbrt-v4** | Physically Based Rendering, version 4 | Pharr, Jakob and Humphreys | Spectral path tracing, explained line by line in a book | Processor | Every line of code explained in the book | Learning how renderers work |

</div>

## Which one, when?

| You want… | Take |
|---|---|
| A finished, realistic frame from Blender | **Cycles** |
| To see the light while you work, or a stylised look | **EEVEE** |
| One light rig for many shots, studio-style | **Gaffer** with Cycles ([Gaffer](gaffer.md)) |
| Caustics and glass that must be physically right | **LuxCoreRender** |
| To describe a scene in code | **POV-Ray** |
| To research or learn rendering | **Mitsuba 3**, **pbrt-v4** |

## Shaders: OSL

**OSL** (Open Shading Language) describes materials as small programs. It was developed at Sony Pictures Imageworks and is the shader language of film rendering: Cycles, appleseed and Gaffer read OSL, so one material works in all three. Animux includes the OSL compiler `oslc` ([Pipeline formats](pipeline-formats.md#osl-open-shading-language)).

How to start each renderer, sample scenes and render times: [Renderers](renderers.md).
