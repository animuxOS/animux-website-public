# Computer requirements

> Check your processor, memory, disk and graphics card before you start, and learn what each one affects.

## Quick check

| Part | Minimum | Good | What it affects |
|---|---|---|---|
| Processor (CPU) | 64-bit, 2 cores, **SSE4.2** | 4–16 cores, **AVX2** | Render speed, simulations, video export |
| Memory (RAM) | 4 GB | 16–32 GB | How big your scenes can be. The live session also keeps its files in RAM. |
| Disk | 40 GB free | 100 GB+ on an SSD | Installing, project files, renders |
| Graphics card (GPU) | any that shows a picture | AMD Radeon or NVIDIA GeForce from the last 6 years | Smooth 3D views in Blender, Krita canvas speed, Upscayl |
| Screen | 1280 × 720 | 1920 × 1080 or larger | Blender and video editors need room |
| Network | not needed | wired or Wi-Fi | Updates, render farm |

## Does my processor have SSE4.2 and AVX?

Animux itself runs on any 64-bit PC. Four programs need newer processor features:

| Program | Needs |
|---|---|
| Blender 5.2 | SSE4.2 |
| appleseed | SSE4.2 |
| Mitsuba 3 | SSE4.2 and AVX |
| LuxCoreRender | SSE4.2 and AVX |

Intel Core processors from 2011 onwards ("2nd generation" Core i3/i5/i7, model numbers 2xxx and higher) and AMD processors from 2011 onwards (Bulldozer, Ryzen and all later ones) have both.

**On Windows**, find your processor name: press **Windows key + Pause**, or open **Settings → System → About**. Search the web for the name plus "AVX".

**On Animux** (live or installed), open the [terminal](../desktop/terminal.md) and type:

```
grep -o -w -E 'sse4_2|avx|avx2' /proc/cpuinfo | sort -u
```

If you see `sse4_2` and `avx`, everything works.

!!! note "Virtual machines"
    A virtual machine shows the guest the host's processor features, except in some setups. **QEMU** uses a basic processor model unless you add `-cpu host`, and **VirtualBox** shows the guest the real processor. If Blender says "illegal instruction" in a VM, see [Troubleshooting](../help/troubleshooting.md#blender-or-a-renderer-does-not-start).

## Graphics cards

- **Intel and AMD** graphics work out of the box with the free drivers included in Animux.
- **NVIDIA** cards work with the free *nouveau* driver included in Animux. It is fine for the desktop but slow for 3D. The official NVIDIA driver is not on the ISO; on an installed system you can add it ([Adding software](../desktop/add-software.md#nvidia-driver)).
- **GPU rendering** (Cycles on the graphics card) needs the official NVIDIA driver (CUDA/OptiX) or AMD's ROCm (HIP). Without them, Cycles renders on the processor, which always works.

## Memory and the live session

In a live session, everything you create (and every program update) lives in memory until you switch off. With 4 GB of RAM you can work, but keep projects small, and save to a USB drive often. With 8 GB or more it is comfortable.

## Drawing tablets

Wacom, Huion, XP-Pen and other tablets are recognised as pen devices with pressure in Krita, GIMP, MyPaint and Blender. For tablet button setup you can install the `xserver-xorg-input-wacom` package on an installed system.
