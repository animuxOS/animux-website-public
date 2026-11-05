# Studio formats

> OpenUSD, Alembic, OpenEXR, OpenColorIO and OpenVDB, one card each: which studio made it, what problem it solves, and what it looks like in Animux.

A film passes through many programs: modelling, animation, effects, lighting, compositing. Each step must read what the step before wrote, without losing anything. The big studios solved this with their own file formats and then **gave them away as open source**. Today most of them are kept by the **Academy Software Foundation** (ASWF), part of the Linux Foundation. Animux installs them with their tools.

<div class="films">

<article class="film">
<p class="kicker">Pixar · open source since 2016</p>
<h2 class="film-title">OpenUSD</h2>
<p class="made">Universal Scene Description · <code>.usd .usda .usdc</code> · viewer: <code>usdview</code></p>
<p><b>The problem:</b> on one shot, modelling, layout, animation and lighting all want to work at the same time.</p>
<p><b>The answer:</b> a scene made of <b>layers</b>. Each department writes its own layer on top of the others, and a stronger layer wins. Nobody overwrites anybody's file.</p>
<p>Pixar built USD for its own films and released it in 2016. It is now read by Blender, Houdini, Maya, Unreal and NVIDIA Omniverse.</p>
<p class="source">Source: Pixar, "Open Source Announcement", openusd.org</p>
</article>

<article class="film">
<p class="kicker">Sony Pictures Imageworks and ILM · 2010</p>
<h2 class="film-title">Alembic</h2>
<p class="made">Baked animation cache · <code>.abc</code> · tools: <code>abcls</code>, <code>abctree</code></p>
<p><b>The problem:</b> a rig only works in the program it was built in.</p>
<p><b>The answer:</b> the finished movement is <b>baked</b>: every vertex position on every frame is stored. The cache plays the same in Blender, Gaffer, Houdini or Maya, with no rig needed.</p>
<p>Imageworks and Industrial Light &amp; Magic announced it together at SIGGRAPH 2010.</p>
<p class="source">Source: Alembic project, alembic.io</p>
</article>

<article class="film">
<p class="kicker">Industrial Light &amp; Magic · open source since 2003</p>
<h2 class="film-title">OpenEXR</h2>
<p class="made">High dynamic range images · <code>.exr</code> · viewer: <a class="chip" href="video-tools.md">DJV</a></p>
<p><b>The problem:</b> a PNG cuts off light: the sun and a lamp both become plain white.</p>
<p><b>The answer:</b> EXR keeps the <b>real brightness</b> of every pixel, so exposure can be changed later, and stores <b>passes</b> (light, shadow, reflections, depth) as separate layers in one file for compositing.</p>
<p class="source">Source: OpenEXR project, openexr.com</p>
</article>

<article class="film">
<p class="kicker">Sony Pictures Imageworks</p>
<h2 class="film-title">OpenColorIO</h2>
<p class="made">Colour management · <code>config.ocio</code> · ACES</p>
<p><b>The problem:</b> the same frame looks different in the 3D program, the compositor and the editor.</p>
<p><b>The answer:</b> one <b>colour configuration</b> shared by every program, so a red stays the same red from render to final grade. Blender, Krita, Gaffer and DaVinci Resolve all use it.</p>
<p class="source">Source: OpenColorIO project, opencolorio.org</p>
</article>

<article class="film">
<p class="kicker">DreamWorks Animation · 2012</p>
<h2 class="film-title">OpenVDB</h2>
<p class="made">Volumes · <code>.vdb</code> · smoke, fire, clouds</p>
<p><b>The problem:</b> smoke and clouds are mostly empty air, and storing every point of a box wastes memory.</p>
<p><b>The answer:</b> a sparse grid that stores only the cells where something is. Blender writes its smoke simulations as VDB, and renderers read them.</p>
<p class="source">Source: OpenVDB project, openvdb.org</p>
</article>

</div>

Commands and examples for each format: [Pipeline formats](pipeline-formats.md).
