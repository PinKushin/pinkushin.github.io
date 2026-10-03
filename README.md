# pinkushin.github.io

Source for [pinkushin.github.io](https://pinkushin.github.io/) — a home for the
programs I build, plus the portfolio bits.

Built with [Hugo](https://gohugo.io/). No theme, no Node, no package manager —
the layouts are eleven small files in `layouts/` and the only third-party assets
are the icon SVGs, which are vendored into `assets/icons/`.

## Running it locally

Install Hugo once:

```bash
winget install Hugo.Hugo.extended
```

Then, from the repo root:

```bash
hugo server
```

That serves the site at <http://localhost:1313> with live reload. Build the
static output into `public/` with `hugo --minify`.

## Adding a program

Create one markdown file in `content/programs/`. Nothing else needs editing —
the nav, the home page cards, and the footer all read the section.

```markdown
---
title: "Program name"
tagline: "One sentence describing it."
status: "Alpha"           # Stable | Beta | Alpha | Pre-alpha | Planned
                          # Maturity, never release state. Not "Released".
weight: 50                # sort order, lower is first
repo: "https://github.com/PinKushin/..."
release: "https://github.com/PinKushin/.../releases"   # optional, "Download" button.
                          # Link /releases, not /releases/latest: latest ignores
                          # pre-releases and redirects to the list for a beta.
nuget: "https://www.nuget.org/packages/..."   # optional
docs: "https://..."                            # optional
site: "https://..."                            # optional
platforms: ["Windows", "Linux"]
tech: ["C#", ".NET"]
install: "dotnet add package ..."              # optional, renders as a code block
description: "Used for the meta description and social preview."
---

Body copy in markdown.
```

## Adding a certificate

Drop the image in `static/img/certs/` and add an entry to
`data/certificates.yaml`.

## Layout

| Path | What lives there |
|---|---|
| `content/` | Pages and program entries, as markdown |
| `layouts/` | Templates — `baseof.html` wraps everything |
| `layouts/partials/` | Nav, footer, program card, icon inliner |
| `assets/css/main.css` | The entire stylesheet, hand-written |
| `assets/icons/` | Vendored Lucide and Simple Icons SVGs |
| `data/certificates.yaml` | Certificate list |
| `static/` | Favicons, manifest, images — copied verbatim |

## Deployment

Pushing to `master` triggers `.github/workflows/ghpages.yml`, which builds with
a pinned Hugo version and uploads `public/` straight to the Pages service.

There is no `gh-pages` branch. Branch publishing makes GitHub run a second
workflow of its own afterwards, generated outside this repo, and the actions it
pins cannot be updated from here. See `docs/DECISIONS.md` entry 6.
