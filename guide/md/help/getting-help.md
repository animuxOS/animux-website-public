# Getting help

> Where to ask questions about Animux and its programs, and what information to include so others can help you quickly.

## For questions about a program

Each program has a large community, usually the fastest help:

| Program | Help |
|---|---|
| Blender | <https://blender.stackexchange.com/>, <https://blenderartists.org/>, the manual under *Help → Manual* |
| Krita | <https://krita-artists.org/> |
| Synfig | <https://forums.synfig.org/> |
| Pencil2D | <https://discuss.pencil2d.org/> |
| Kdenlive | <https://discuss.kde.org/tag/kdenlive> |
| MakeHuman / MPFB | <http://www.makehumancommunity.org/forum/> |
| Flamenco | <https://flamenco.blender.org/> (chat and docs) |
| Gaffer | <https://groups.google.com/g/gaffer-dev> |
| Debian (the base system) | <https://wiki.debian.org/>, <https://forums.debian.net/> |

Questions about Debian 12 ("bookworm") apply to Animux too, as it is based on it.

## For problems with Animux itself

Collect this information first:

1. The **Animux release**: run `cat /etc/os-release | grep PRETTY` and name the ISO file (for example `animux-genesis64-deb_28.iso`).
2. Live, VM or installed? Which VM program?
3. Your computer: `inxi -Fxz` prints the hardware without personal data.
4. The **self-test** folder: run **Animux Tools → Animux Self-Test** and attach `~/animux-selftest/<date>/summary.txt` and the `.log` of the failing test.
5. For start-up problems: `journalctl -b -p err > ~/errors.txt` and attach `errors.txt`.
6. What you did, what you expected, what happened instead. A screenshot helps (**Print** key).

## Learning

- Blender Studio training: <https://studio.blender.org/training/>
- Krita manual and tutorials: <https://docs.krita.org/>
- *The Illusion of Life* (Thomas and Johnston) and *The Animator's Survival Kit* (Richard Williams), the classic books on animation.
- This guide's [tutorials](../tutorials/first-3d-render.md).
