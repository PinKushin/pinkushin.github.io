---
title: "Garm3n VIP-Quad"
tagline: "A fork of a competitive Team Fortress 2 HUD, brought back into line with the shipped game — with the reasoning for every change written down, including the changes that turned out to be wrong."
status: "Beta"
icon: "tf2"
weight: 60
repo: "https://github.com/PinKushin/Garm3n-VIP-Quad"
platforms: ["Windows", "Linux"]
tech: ["TF2 HUD", "Valve KeyValues", "PowerShell"]
description: "A maintained fork of Garm3n's VIP-Quad TF2 HUD, modernized against the current game and documented decision by decision."
---

Garm3n built HUDs for individual competitive players — `VIP-<handle>`, one per
player, deliberately stripped of the furniture a consumer HUD carries. VIP-Quad
was built for **Christian "quad" Sørensen**, a Danish Scout who won Insomnia43
and Insomnia44 back to back with the two dominant European rosters of that era.

Upstream stopped moving in 2023, and the main menu was last touched in 2018.
This fork picks it up.

## The fork target is the game, not the parent repo

This fork is even with upstream, so there is nothing to pull. "What needs
updating" means diffing the HUD against **the shipped game** — extracting
`resource/` and `scripts/` from the installed `tf2_misc_dir.vpk` and comparing.
The game is the moving target; the archive is not.

Done so far: the ClientScheme font gaps closed, the scoreboard's stats block
grown to fit a Damage/Support row, the main-menu tooltips layered so they draw
over the menu instead of under it, and a missing item-effect meter added that
had been spamming the console.

## Rot detection reports a delta, not a list of gaps

Run absolutely, the checker finds 275 differences against stock — and nearly all
of them are the original author stripping decoration on purpose in 2017. From a
single snapshot, "Valve added this" and "the author removed this" are
indistinguishable: both are a block in stock that is not here.

Change over time *is* distinguishable. So the checker records the known gap set
and reports only what is new since. A tool that cries 275 times is a tool nobody
reads.

Each remaining gap is then scored against other HUDs — and the useful comparison
turned out to be Garm3n's own VIP line rather than the big maintained consumer
HUDs. `HudTournament.res` scored 30 of 30 against rayshud, flawhud and budhud,
the strongest signal the tool ever produced, and it was fine: those HUDs style
the panel because a public release styles everything. Five of Garm3n's six VIP
HUDs don't. **A high score means "differs", not "broken."**

## Two reversals, kept on the record

The decisions log carries the mistakes at full length, because a decision made
for a good reason is indistinguishable from an arbitrary one once the
conversation is gone.

**Animation load order.** I diagnosed the manifest as broken — custom animations
listed before stock, therefore overwritten — "fixed" it, and thereby created the
defect I had described. TF2 keeps the *first* definition. Three actively
maintained HUDs load custom first and demonstrably have working pulses; the
revert was then confirmed in-game by building an ÜberCharge and watching the
meter flash.

**Declaring stock panels.** I argued that a panel the client builds but the
`.res` never names keeps its constructor geometry, so every unwanted panel must
be explicitly zeroed. It crashed the game. A *partial* declaration is more
dangerous than no declaration, because the engine trusts what the file says the
control contains.

Both were settled by evidence rather than argument, and the second one was found
by bisection.

## The instrument that actually resolves this

Repeatedly, the only thing that could answer a question was a person loading the
mode and looking at it. The scoreboard gaps, the tournament panel, the animation
revert — each was decided that way after coordinate reasoning had been
self-consistent and wrong. One case was cracked by setting a panel's fill colour
to bright red to find out which panel it even was.

## Attribution

The HUD is **Garm3n's** design — his name, his fonts, his visual identity.
Everything in the repository before this fork is **Hypnootize's** compatibility
work, who kept most of the old HUD archive loading through years of TF2 updates
and wrote the update guide this fork's checklist is mapped onto. Not affiliated
with Valve, and it ships no Valve-authored assets.

---

The emblem on this page is a Team Fortress 2 *style* logo by PD Balthazar,
released into the public domain via Wikimedia Commons. It is fan-made and not
an official Valve asset.
