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

---

## 5. Contributions are a home-page block, not a nav entry

The hiberbeeTheme work is a merged PR in someone else's repository. It has no
repo of the owner's to link — the fork was deleted once the change was upstream,
which is the correct thing to do with a fork that has served its purpose and the
reason there is nothing on this site to point at but the pull request itself.

That rules out a program card: every one of those links a repo the owner owns
and carries a maturity badge, and neither applies to a PR.

Three placements were put to the owner — a home-page block, a `/contributions/`
page with a fourth nav entry, or a block on the programs page. **He chose the
home-page block.** The reason it was recommended: the site was deliberately
repositioned so the programs are the pronounced thing, and one small upstream
PR should not sit beside Programs in the nav competing for attention.

**The owner's own reason is better than that one and is the one to keep:**

> "the contributes are moreso about me then about my projects themselves, so a
> seperate page for them individually, doesnt make sense unless we are linking
> to the actual projects website, which i wouldnt be against doing."

A contribution is a fact about the person, not an artefact he maintains. That
is why a page *per contribution* is wrong in a way that has nothing to do with
nav clutter: there is no thing of his for such a page to be about. It also
settles what a contribution entry should link — **the project's own home**,
since the reader who wants the project should land on the project rather than on
a page here describing it secondhand.

So the Hiberbee entry leads with the Visual Studio Marketplace listing (25,804
installs on 2026-08-22, quoted on the page as "a little over 25,000" and dated,
because that number moves), then the pull request, then the source. Three links,
none of them to this site.

Structurally it follows the `/hire` pattern exactly — content lives in
`content/contributions.md` and `layouts/home.html` pulls it in with
`.Site.GetPage`. So a second contribution is an edit to one markdown file, and
promoting the lot to a real page later is a nav entry plus deleting six lines of
template.

### What the page does not say, and why

The owner's account is that the maintainer has since adopted the same
dependency-scanning practice, so there is nothing left for him to catch:

> "my extra analyzers started being used by the OG creator so I have nothing to
> fix anymore"

That is not on the page. It is a claim about **another person's** working
practice, and the repository shows no evidence either way — no
`Directory.Build.props`, no `NuGet.config`, nothing that would make it checkable
from outside. Publishing it would put an unverifiable assertion about a named
third party on the owner's site, and the page is stronger without it because
everything else on it can be clicked and confirmed.

### The gap between the PR description and the merged diff is the story

The PR body says MessagePack and `System.Text.RegularExpressions` were both
promoted to direct references. The merged diff promotes only the latter. I first
recorded that as an unexplained discrepancy and had the page quietly describe
the diff. The review thread explains it, and the explanation is the most
site-worthy thing in the whole contribution.

The maintainer's first response was "why was MessagePack added? and same for
RegularExpression". Working through the answer, the owner found and stated his
own error — that moving the SDK, build tools and colour compiler forward already
carries MessagePack, so only the regex pin was actually needed — and proposed
the narrower change himself before being told to. The maintainer then asked for
the extra reference to come out and for the remaining one to be normalised to
single-line style, and merged.

So the page now leads with the over-pin and the pushback rather than presenting
a clean four-line fix. Being asked "why" and answering it precisely enough to
find your own mistake is a better thing to show than a PR that merged without
comment.

**Not on the page, though it is in the thread:** it was the owner's first pull
request to anyone, and he asked the maintainer whether to close and re-open it
rather than pushing a follow-up commit. The first-PR fact *is* on the page,
because he offered it; the specific question is not, because nothing is gained
by narrating a beginner's uncertainty about git mechanics eighteen months later.

### "Written by hand, with no AI involved"

The owner's words:

> "this contribution was made without AI too, i did the update by hand and had
> pushback from sigey because i pinned too much"

Recorded as his, and put on the page as a plain statement of fact rather than a
boast or a disclaimer. Worth keeping because in 2026 it is a claim that will
only get harder to make and easier to doubt, and because the rest of this site
is built with AI assistance — so stating it on the one item where it is true is
the honest arrangement, and staying silent everywhere would let the reader
assume it about everything.

Verified against upstream on 2026-08-22: `VsixColorCompiler 17.11.35325.10` and
`System.Text.RegularExpressions 4.3.1` are still in `HiberbeeTheme.csproj`
unchanged, while the SDK and build tools have been moved on by the maintainer.
That is what the "two of them are still there word for word" line rests on, and
it is worth re-checking before anyone repeats it.

## 6. Pages publishes from the workflow, not from a `gh-pages` branch

Recorded a commit late — the reasoning was written into the commit body but not
here, and this file is the thing that survives.

**The trigger was a single annotation**, on a run whose tick was green:
`actions/upload-artifact@v4` forced onto Node 24, Node 20 deprecated. It was
unfixable from inside this repo. Branch publishing makes GitHub run a second
workflow of its own after ours — generated under `dynamic/pages/`, not stored
here — and that action is pinned inside it. There was no `uses:` line to bump.

So the fix was structural rather than a version bump: upload the Pages artifact
ourselves, and the generated pipeline never runs. Two consequences worth having
anyway — the deploy stops being two builds of the same commit, and `contents`
drops from `write` to `read`, because nothing pushes a branch any more.

**`actions/configure-pages` is deliberately absent**, though GitHub's own Hugo
starter workflow includes it. Its purpose is to hand the generator a base URL,
and `hugo.toml` sets `baseURL` explicitly, so it has nothing to supply here. A
pinned external that does nothing is still a pinned external that goes stale —
the same reasoning that keeps this site off themes and off npm.

**The `gh-pages` branch was kept.** It served the live site until the first
workflow deploy succeeded, and it is the way back if the switch had failed.
Now vestigial, and deleting it is the owner's call rather than a tidy-up to
perform unasked.

### The versions are the lesson

Written from memory, this workflow would have said `upload-pages-artifact@v3`
and `deploy-pages@v4`. Looked up, they are **v5** and **v5**, with
`configure-pages` on **v6** and `checkout` on **v7**. Staleness written from
memory is precisely what produced the annotation being fixed here, and it
reports as a green tick with a warning nobody reads.

Verified 2026-08-22: both jobs zero annotations, no `pages-build-deployment`
run for the deployed commit, and all six live URLs 200.

## 7. The Create React App leftovers are gone

Four deletions, all chosen by the owner, none of which touch the live site.

**The 16 open Dependabot PRs (#2–#21)** were npm bumps against the old CRA
stack — webpack, babel, react-router, lodash. `master` has had no
`package.json` since the Hugo rebuild, so not one of them could apply to
anything. Closed with a comment saying so, branches deleted.

**They were frozen, not accumulating.** The newest was opened 2026-02-12 and
the rebuild landed 2026-08-09, so Dependabot had already stopped on its own
when the manifest left the default branch — the dependency graph is built from
the default branch, and an empty graph produces no updates. Worth stating
plainly because "I turned off the thing flooding your repo" would be a better
story and a false one.

**Dependabot security updates disabled anyway**, as belt-and-braces:
`automated-security-fixes` now `enabled=false`. **Vulnerability alerts are
deliberately left on** (the endpoint still returns 204). Alerts are
information; updates are pull requests. If this repo ever gains a manifest
again, re-enable the updates — nothing here will remind you.

**`gh-pages` deleted.** Entry 6 kept it as the rollback path; that path is
spent now that Actions-native publishing has deployed successfully several
times. Deleting it doubles as the strongest available proof the switch is
real: the branch the site used to be served from no longer exists, and the
site still returns 200 on every URL. A rollback would now mean reverting the
workflow, which rebuilds the branch anyway.

**`pages-build-deployment` is off the Actions list.** The workflow itself
cannot be deleted — GitHub generates it under `dynamic/pages/` and it is not a
file in this repo — but it disappears from the list once it has no runs, so
its two remaining runs were deleted. It will come back if Pages is ever
switched to branch publishing, which is correct: it is a symptom of that
setting, not an artefact of its own.

`master` is now the only branch in the repository.

## 8. Analytics: GoatCounter, script vendored rather than loaded from theirs

The owner wanted visitor telemetry, explicitly **not** a visible counter —
"i dont want it to be seen in the ui like it use to be, that would be tacky now,
but tracking how many people come to your page is good telemetry."

That reframing is what made it feasible. A visible counter fed by a remote
endpoint breaks the page when the endpoint is down; an invisible beacon that
fails costs a data point and nothing else.

### Hosted, not self-hosted — and the owner's stated reason was the weaker one

He chose GoatCounter's hosted service over running it on the Oracle boxes:

> "id prabably do 3 over 2 because i dont want to slow down the mut runs and the
> fuzz box is single core so already kinda slow."

The conclusion is right; the stated reason is not the load-bearing one.
GoatCounter idles around 50 MB and near-zero CPU, so it would not measurably
slow a mutation run on a 3-OCPU box — though contention on the single-core fuzz
box is a fairer worry. What actually carries the decision: a public HTTP service
puts attack surface on measurement infrastructure, the `flock` model there
assumes nothing long-lived is listening, and self-hosting means owning uptime
for a service whose whole value is being ignorable. Recorded so the decision
survives on the sturdier reason.

### The script is vendored; only the beacon is third-party

`assets/js/count.js` is copied from `gc.zgo.at/count.js`, unmodified, ISC
licensed, 9.2 KB. Serving it from this origin keeps `script-src 'self'`, so no
third-party code executes on the site — only the beacon leaves it. The same
reasoning that keeps the icons vendored.

It is fingerprinted but deliberately **not** minified, unlike the CSS. Byte
identity with upstream is what makes the update check one step:

```bash
curl -sSL https://gc.zgo.at/count.js | diff - assets/js/count.js
```

Vendoring costs automatic updates. That diff is the repayment, and it is the
thing to run when GoatCounter changes.

### CSP needs `img-src` as well as `connect-src`, and the docs do not say so

Upstream's CSP page names `connect-src` only. Reading the vendored file shows
`count.js` sends via `navigator.sendBeacon` and then falls back to an `<img>`,
under its own comment: the beacon "mostly fails due to being blocked by CSP".

Granting `connect-src` alone would block the beacon on any browser without
`sendBeacon`, send it down the image path, and block that too — hits lost
silently, with nothing in the console to explain it. Both directives name
`https://pinkushin.goatcounter.com`.

Found by reading the file before shipping it, which is the argument for reading
vendored code rather than trusting its documentation.

### No cookie, deliberately

The owner's first instinct was a cookie. GoatCounter is cookieless by design —
it holds site + IP + User-Agent in memory for up to 8 hours as a random string,
and stores neither the IP, the full User-Agent, nor any tracker ID. A cookie
would gain nothing and would drag in a consent banner, since analytics cookies
need consent under ePrivacy where cookieless counting generally does not.
`localStorage` is touched only for GoatCounter's own `skipgc` opt-out flag.

Sent per pageview: path, referrer, title, screen width, query string, bot score.

### Gated behind `not hugo.IsServer`, same as the CSP

`hugo server` page loads would otherwise arrive in the real statistics as
genuine traffic. The consequence: **the script cannot be tested locally.** The
only real verification is the live site's network requests after a deploy.

### Disclosed in the footer

One line, linking GoatCounter, stating no cookies and no IP addresses stored.
Every claim in it is checkable in this repo, which is the standard a disclosure
has to meet to be worth printing.

### Confirmed live, 2026-09-07 — and how to recognise an agent's hit

Verified from the deployed site under the real CSP:

```
scriptRan       "object"    count.js executed; SRI passed and script-src allows it
filterResult    false       not suppressed
beaconAccepted  true        navigator.sendBeacon queued the request
```

`beaconAccepted` is the decisive one: `sendBeacon` returns **false** when CSP
blocks the destination, so `true` proves `connect-src` is right. The owner then
confirmed both hits in the dashboard, which closes the loop this entry said
could only be closed live.

**The beacon is invisible in the Network tab, and that is not a fault.**
`sendBeacon` fires as a background ping — it appears under Ping/Other rather
than XHR/Fetch, and the browser-pane recorder missed it entirely. "No request in
the Network tab" therefore reads exactly like "it is broken". Test with
`navigator.sendBeacon(goatcounter.url())` and read the return value instead.

**Reading the dashboard: "other" device + Chrome with no screen size is an
automated hit**, not a visitor. The agent's beacon sent `s=0`, because the
browser pane was not compositing frames, so `window.screen.width` read 0 —
the same root cause as screenshots failing in that session. GoatCounter buckets
device class from screen width and 0 matches nothing, so it lands in "other".
Real visitors report a width; the owner's own Firefox visit came through as
"pc monitor".

Also worth knowing: count.js scores `navigator.webdriver` as bot 153, but the
pane did **not** trip it — hits came through `b=0`, counting as real traffic.
Bot detection here is weaker than it looks, so do not read a clean bot score as
proof a hit was human.

### Self-hits are counted, deliberately

No `skipgc` opt-out is set. The owner: "i dont care if my visits inflate it too
muc, being able to add a view to the site is a testing thing." Being able to
generate a hit on demand is what makes the pipeline testable at all, given it
cannot run under `hugo server`.

The cost, for whenever the numbers start mattering: GoatCounter cannot
retroactively separate his visits from real ones. Enabling `skipgc` later stops
future self-hits and does nothing about the ones already recorded.
