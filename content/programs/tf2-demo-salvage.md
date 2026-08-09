---
title: "Tf2DemoSalvage"
tagline: "A standalone parser for Team Fortress 2 .dem files — built to read demos from any era of TF2's 18-year history, including ones Valve's own client updates have broken."
status: "Alpha"
icon: "demo-playback"
weight: 30
repo: "https://github.com/PinKushin/Tf2DemoSalvage"
platforms: ["Windows", "Linux"]
tech: ["C#", ".NET", "CLI"]
description: "A standalone parser and eventual viewer for Team Fortress 2 demo files, working across every era of the game."
---

An independent, clean-room parser for TF2 demo files. It ships no Valve-authored
game assets — maps are resolved from your own TF2 install or a source you
configure, not bundled. Not affiliated with Valve.

## Status — early, and honest about it

Phase 1 is in progress. The container and much of the network message layer
decode against real demos. Entity data — where player positions live — does not
yet.

Done and tested: the bit reader and varint decoding (unit tested, mutation
tested, fuzzed), the demo header, the command stream, and a text dump CLI —
`tf2demosalvage <demo.dem>` prints a readable dump.

Partial: net messages, and the entity schema. `dem_datatables` parses and
flattens, `svc_PacketEntities` headers decode, and 98% of property *value*
encodings are implemented. Entity iteration hasn't started, and the missing 2%
includes `m_vecOrigin` — which is, inconveniently, the interesting one.

Not started: the 2D viewer (Phase 2) and 3D viewer (Phase 3).

## Where decoding stops

`svc_SignonState` in the signon stream, and `svc_PacketEntities` in roughly 90%
of gameplay packets. The latter needs the property list flattened — entity deltas
index into a list built by merging nested tables, applying exclusions, then
sorting `SPROP_CHANGES_OFTEN` properties forward.
