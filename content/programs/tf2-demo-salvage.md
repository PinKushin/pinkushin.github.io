---
title: "Tf2DemoSalvage"
tagline: "Reads Team Fortress 2 .dem files from any era of the game's history — including demos the current client can no longer play — and plays them back in 3D."
status: "Beta"
icon: "tf2"
weight: 30
repo: "https://github.com/PinKushin/Tf2DemoSalvage"
release: "https://github.com/PinKushin/Tf2DemoSalvage/releases"
platforms: ["Windows"]
tech: ["C#", ".NET", "Direct3D 11", "CLI"]
license: "MIT"
description: "A standalone reader and 3D viewer for Team Fortress 2 demo files, working across every era of the game."
---

An independent, clean-room tool for TF2 demo files. It ships no Valve-authored
game assets — the viewer reads maps, models, materials and sounds from your own
TF2 install, and the zip contains none of them. Not affiliated with Valve.

## What it is

TF2 demos carry the entity schema they were recorded against, so a demo is
readable without the game that made it. The current client validates that schema
against its own and refuses old demos; this reads what the file provides and
doesn't. The download holds two programs:

- **`tf2demosalvage`** — a command-line tool. It decompiles a demo to readable
  text, to JSON Lines, or to an assembly form that **compiles back to a
  byte-identical demo**.
- **`tf2demoview`** — a 3D viewer. It plays a demo back with the game's own maps,
  models, materials and sounds, and takes key bindings from your own TF2 config.

## Beta, and what that means here

Decoding is well tested. The viewer is usable and is still visibly different
from the game in places. The release notes list those places, and the repository
tracks each one by number.

The ones you are most likely to hit: demos recorded for hours on an idle server
(the 1.3 GB and 2 GB ones found so far) work in the command-line tool but are
too large for the viewer's timeline. A typical modern match holds about 4 GB in
the viewer. There are no footsteps or landing sounds, because the game predicts
those on the client and never records them in the demo.

## What has been measured

- **Five network protocols — 11, 14, 15, 16 and 24 —** covering demos recorded on
  clients from 2007, 2008, 2009, 2011 and 2013, plus a 2020 match. Each decodes
  and round-trips in every test run. Protocols 17 to 23 have no known surviving
  demo, so they are untested.
- **A census of 459 distinct real-world demos** on 2026-09-30: the entity stage
  failed on none. At that point 214 passed every stage. Every failure class the
  census found has been fixed since, but **the census has not been re-run**, so
  the post-fix pass count is not yet known.
- **Text round-trips to the identical file**, held by the test suite for every
  era above.
- **Voice from every era:** Speex, Steam Voice, CELT and Opus.

## Requirements

Windows 10 or 11 (x64) with a Direct3D 11 GPU, and 8 GB of RAM at minimum — 16 GB
recommended. Each program carries its own copy of .NET, so there is nothing else
to install. The viewer needs your own TF2 install; without one it plays the demo
without the game's maps and models. The command-line tool needs only the demo.

---

The emblem on this page is a Team Fortress 2 *style* logo by PD Balthazar,
released into the public domain via Wikimedia Commons. It is fan-made and not
an official Valve asset. This project remains unaffiliated with Valve.
