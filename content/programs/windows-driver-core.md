---
title: "WindowsDriverCore"
tagline: "The WinAppDriver API, reimplemented on raw IUIAutomation COM — so an existing Appium or Selenium suite can point at it unchanged and stop hitting the ceiling."
status: "Alpha"
icon: "steering-wheel"
weight: 40
repo: "https://github.com/PinKushin/WindowsDriverCore"
platforms: ["Windows 10 1607+", "Windows Server 2016+"]
tech: ["C#", ".NET", "ASP.NET Core", "UI Automation COM", "JSON Wire Protocol"]
license: "MIT"
description: "A reimplementation of the WinAppDriver API on raw IUIAutomation COM, built to FlaUI's standard of capability."
---

Point an existing Appium or Selenium suite at it unchanged and stop hitting the
ceiling.

**Incomplete, and specific about which parts.** A rewrite is in progress.
Sessions, element find, and every element *property* work. Click, keyboard
input, window management, Actions, XPath, and screenshots do not yet.

## Why it exists

Three facts define the gap:

- **FlaUI reaches UI Automation properly.** It's pattern-aware, and it draws an
  explicit distinction between invoking a UIA pattern and dispatching real mouse
  input.
- **But FlaUI is a .NET library.** It can't be driven from an Appium suite, from
  Python, or from any existing test that speaks WebDriver. Reaching for it means
  abandoning the protocol.
- **WinAppDriver has the API every existing suite already speaks** — and an
  implementation that is both weak and, since June 2025, archived. Nothing filed
  against it will ever be fixed.

So this isn't a FlaUI wrapper, and it isn't a faithful reimplementation of
WinAppDriver's limitations either. It serves WinAppDriver's protocol over a UIA
layer as capable as FlaUI's.

It depends on `Interop.UIAutomationClient` — FlaUI's own interop layer, the raw
COM surface, written by FlaUI's author — and deliberately *not* on `FlaUI.Core`.
A peer, not a wrapper.

The contract is **JSON Wire Protocol, not W3C WebDriver**. Where the two
disagree, JWP wins, because that's what WinAppDriver's own test suite asserts.
An earlier implementation was built from the W3C spec, and that single wrong
choice produced a large share of its failures.

## Measured

| | Result |
|---|---|
| A property read, before and after handle caching | **19.40 ms → 0.45 ms** (43.5×), 20 samples |
| WinAppDriver's score on its own compatibility suite, Windows 11 | **112 / 290** |
| An element find, this driver vs WinAppDriver | ~33 ms vs ~1070 ms — *unmatched conditions* |

That last row is a signal, not a benchmark: this driver ran in-process while
WinAppDriver ran over HTTP and re-resolved its element each iteration. Worth
chasing, not worth quoting.

The 112/290 matters more than it looks. WinAppDriver fails 178 of its own tests
on Windows 11, mostly because the applications they drive have changed — so
parity is a much smaller target than the suite size suggests.

## Design

```
Host        composition root, CLI, DI
Protocol    JWP surface — routes, envelopes, faults. No UIA.
Automation  element find and inspection. Typed in, typed out. No HTTP.
Platform    Win32, window discovery, process lifetime
```

`Automation` and `Platform` don't reference ASP.NET Core, and that's enforced by
project references rather than by convention — so **the automation layer is a
usable .NET library on its own**, with the HTTP server as an adapter over it.

Speed is a design goal rather than a later concern. Round trips dominate,
because this is cross-process COM, so the work is in making fewer of them: hold
the element the caller already named, fetch more per trip, own COM lifetime
explicitly instead of leaving it to finalizers.

## How the repository treats claims

A claim written in the repository isn't evidence. Wire behaviour comes from
recordings captured against the real WinAppDriver, not from reading the
specification. Five load-bearing claims turned out to be wrong, each inherited
from an earlier session and repeated without being checked.

The most expensive was a rule — *never hold an element between calls, it goes
stale* — which forced a tree walk on every command, and was refuted by a single
experiment. Doctrine is the easiest kind of claim to inherit, because it doesn't
look like a claim.

Two things the project explicitly does **not** claim: it doesn't fix
WinAppDriver issue #857 (those elements are absent from the UIA tree entirely —
Inspect.exe can't see them either, so no client can), and the capability claim
is the one with evidence behind it.

---

MIT licensed. Not affiliated with Microsoft. WinAppDriver is Microsoft's,
archived June 2025; FlaUI is Roemer's, and a peer project rather than a
dependency.
