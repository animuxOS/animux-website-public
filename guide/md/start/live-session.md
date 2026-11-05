# The live session

> Animux running straight from the USB stick or ISO. The user name and password, what is kept, what is lost, and how to save work.

"Live" means Animux runs straight from the ISO or USB stick, without being installed. It is the full system with every program.

| | |
|---|---|
| User name | `user` (shown as **Animator**) |
| Password | `user` |
| Administrator (`sudo`) | allowed without a password |
| Computer name | `animux` |

You are logged in automatically. The password is only needed if a program asks for it, for example when the screen locks.

## What is kept and what is lost

!!! danger "Everything you save in the live session disappears when you switch off or restart."
    This includes files in the **Home** folder, settings, and programs you install. The system keeps them in **memory (RAM)**, which is also why big projects can fill the memory.

To keep your work:

1. Plug in a **USB stick or USB disk**. An icon appears on the desktop, and the drive is listed on the left in the [file manager](../desktop/files.md).
2. Save your project **directly onto that drive**, or copy it there before you switch off.
3. Before you pull the drive out, right-click its desktop icon and choose **Eject** (or **Unmount**), so that everything is really written.

Or [install Animux](install.md) so that everything stays.

## The disks of the computer

The computer's own disks appear in the file manager too. You can open files from them. **Be careful:** Animux can also change and delete files there. If Windows was not shut down completely (Fast Startup), its disk may be "read-only".

## Leaving the live session

**Animux menu → Log Out → Shut Down**. On a real computer, remove the USB stick when the screen goes black.
