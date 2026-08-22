# Decisions

Numbered, newest at the bottom. Each entry records what was decided and *why*,
because the code shows only the outcome and a decision made for a good reason is
indistinguishable from an arbitrary one once the conversation is gone.

Where the reason was not stated, that is recorded as an honest gap rather than
filled in with a plausible-sounding rationale.

This file is not published. Hugo builds from `content/`, `assets/`, `static/`,
`layouts/` and `data/`; `docs/` is inert.

---

## 1. The two TF2 projects reuse the existing `tf2` icon

**The repository owner's direction:**

> "use the same tf2 icon"

Given mid-task, without a stated reason, so no reason is invented here. The
effect is that `tf2-demo-salvage`, `pin-config` and `garm3n-vip-quad` all carry
the same emblem, which reads as a family rather than three unrelated entries.

Consequence: the icon's attribution note — a public-domain TF2-*style* logo by
PD Balthazar via Wikimedia Commons, fan-made and not a Valve asset — was
already on the Tf2DemoSalvage page, and is now repeated on both new pages. An
attribution that appears on one of three pages using the same asset is an
attribution that is easy to lose.

## 2. Statuses: Pin-Config is **Stable**, Garm3n VIP-Quad is **Beta**

The badges describe maturity, never release state (see the memory entry the
site's content model is built on). Neither project has release semantics at all
— a config and a HUD are copied into a game directory, not versioned for
consumers — so the label had to be read as "how finished is this".

**Pin-Config → Stable.** It does its job, it is in daily use, and every cvar in
it has been checked against a live client. Nothing about it is expected to
change shape; a TF2 update produces a diff to review, not a redesign.

**Garm3n VIP-Quad → Beta.** It works in-game and has been verified by looking at
it, but its own `UPDATE-CHECKLIST.md` still lists items as unverified —
`winpanel`, the 3D player model, the status icons, the Linux font fallbacks.
"Published and usable, contracts not frozen" is the honest reading, and claiming
Stable would paper over a checklist the fork itself keeps open.

Both calls are judgment, not fact, and were flagged to the owner as such.

## 3. The home page shows all six programs, not the first four

`layouts/home.html` ranged over `first 4`. With six programs that silently hid
the two new ones behind the "All programs" link.

The count matters because `.grid` is deliberately two fixed columns rather than
`auto-fit` — see the comment in `main.css`, which records that `auto-fit` gave
three across and stranded the fourth card. Under two columns, evenness is a
question of parity: 4 and 6 both fill their rows, 5 and 7 would not.

So `first 6` rather than dropping the limit entirely. A future seventh program
will strand a card and the limit will need looking at again — which is the right
time to decide, rather than now.

## 4. Section blurb says "Six projects", and the labels list gained "stable"

`content/programs/_index.md` hardcoded "Four projects" and explained only beta,
alpha and pre-alpha. Pin-Config is the first page to use the **stable** badge,
which the CSS has always defined but nothing used, so the blurb now explains it.

Hardcoding the count is a small liability — it has now been wrong once — but
`{{ len .Pages }}` in prose reads worse than a number, and the blurb is edited
whenever a program is added anyway.

---

## Corrections recorded

### C1. REVERSAL (by the owner) — Garm3n VIP-Quad is **Stable**, not Beta

Entry 2 badged the HUD Beta on the strength of four items its
`UPDATE-CHECKLIST.md` still listed as unverified. Three of those four had
already been checked; the fourth is reasoned away, not outstanding.

**The owner:**

> "the hud is stable really, i should have the fork update that, the winpanels
> and 3d player model and status icons are all right, the only thing i havent
> tested is the linux fallbacks and they shouldnt be needed because the custom
> fonts needed are shipped with the hud"

So the badge is Stable, and the fork's checklist has been corrected in the same
pass — the stale document is what produced the wrong badge, and leaving it stale
would produce the wrong badge again.

**The reasoning worth keeping is about the Linux fallbacks**, because it is the
one item that stays untested and is *still* not a gap. This HUD ships its own
faces — `Novecentowide-DemiBold`, `Novecentowide-Medium`, `Paula`, `FORMASGE`,
`symbol` — inside `resource/`, so the fonts the design actually depends on
travel with it and need no system fallback on any platform. Stock's
`linux_fonts` entries exist to substitute for faces the client expects to find
installed; a HUD that carries its own does not need the substitution.

**What I got wrong, and it is a pattern worth naming:** I read an unverified
checklist row as evidence of an unverified *thing*. It is evidence about the
document. A row saying "not verified" and a row nobody updated after verifying
look identical, and only the person who ran the game can tell them apart.
Reading a stale doc as current state is the same error class as trusting a test
that has never been red.

### C2. The visual result was confirmed by the owner, not by me

Entry 3's changes and both new pages shipped with the appearance explicitly
unconfirmed — no screenshot was available in that session, so structure and text
were verified and looks were not. The owner then looked:

> "The site looks good to me."

Recorded because the gap was stated as a gap, and closing it is worth the same
line the caveat got.
