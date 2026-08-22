---
title: "Pin-Config"
tagline: "A Team Fortress 2 config in plain .cfg files — two profiles, every cvar checked against a live client, and a tool that tells you which ones a game update killed."
status: "Stable"
icon: "tf2"
weight: 50
repo: "https://github.com/PinKushin/Pin-Config"
platforms: ["Windows", "Linux"]
tech: ["TF2 cfg", "Python"]
description: "A verified Team Fortress 2 config: two graphics profiles, hand-checked cvars, and a validator that catches what TF2 updates break."
---

No modules, no VPKs, no launcher. Copy `cfg/` into `tf/cfg/` and you have the
whole thing — files you can read, diff, and edit in a text editor.

## Two profiles, one switch

```
exec low      max frames, for playing
exec ultra    max quality, for reference capture
```

`autoexec.cfg` holds the always-on settings — net rates, binds, aliases,
viewmodel scripts, sensitivity — and ends by exec'ing one of the two profiles.
`ultra.cfg` exists because [Tf2DemoSalvage](/programs/tf2-demo-salvage/) needs
screenshots to compare its renderer against, so four of its settings are marked
**PARITY**: chosen to make a capture comparable rather than to look best.

Sensitivity is switchable in console — `sens8`, `sens10`, `sens12` — and the
inches-per-360 arithmetic is written out in the config beside the aliases. Another
distance or another mouse is a calculation, not a number someone has to remember.

## Verified against the game, not inherited from 2014

Every cvar in `cfg/` is checked against a dump of what the client actually has:

```
python tools/validate-cvars.py
```

It catches two failures that otherwise look identical to a working setting.
**Missing** cvars — the game prints `Unknown command` and moves on; seven from
the 2014 base were dead this way. **Cheat-flagged** cvars — `sv_cheats`-gated,
so they cannot be set on a normal server at all.

Refreshing the dump after a TF2 update is three console commands, and then the
git diff on `tools/cvarlist.log` *is* the answer to "what did this update
change".

## The trap that cost an evening

**TF2 caches a cfg file's contents.** Overwriting one under a running client does
nothing until you `exec` it again — and the first read after an overwrite can
still serve the old copy.

A crash was traced to `mat_reducefillrate 1`, the cvar was removed, and the game
crashed again — apparently disproving the fix. It hadn't: the client was still
running the pre-fix file. Two rounds of diagnosis went into a bug that was already
fixed. Restart the client when testing a config change, or type the cvar directly
into console, which is read immediately and is a cleaner experiment anyway.

## Credit

The `low.cfg` cvar selection descends from **Comanglia's config** (v1.4, 2014),
which was good at its job. Everything has been re-verified against a modern
client; none of the original commentary survives, but most of the choices do.

The comments in the configs are TF2's own help text, verbatim. A `~` marks one
written by hand, because Valve ships no description for that cvar.

---

The emblem on this page is a Team Fortress 2 *style* logo by PD Balthazar,
released into the public domain via Wikimedia Commons. It is fan-made and not
an official Valve asset. This project is not affiliated with Valve.
