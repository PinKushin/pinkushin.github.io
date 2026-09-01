# CLAUDE.md — pinkushin.github.io

Hugo site, no theme, no Node. See README.md for how to add a program or a
certificate; this file covers what the code does not say out loud.

## Build

```bash
hugo --minify --gc --printPathWarnings --printUnusedTemplates
```

That is CI's exact command (`.github/workflows/ghpages.yml`). Use it rather than
bare `hugo` — those two `--print` flags are the only warning surface this repo
has.

Preview: `.claude/launch.json` defines a `hugo` server config. Start it with the
preview tool, never `hugo server` through Bash.

## Constraints that are the point of the stack

The rebuild from Create React App to Hugo existed to escape npm churn. Giving
any of these back defeats the reason the stack was changed:

- **No theme, no Hugo Modules.** Third-party templates execute at build time and
  can call `resources.GetRemote` or read env vars.
- **`[security]` in `hugo.toml` is deny-by-default** — `exec.allow`, `osEnv`,
  `funcs.getenv`, `http.methods` and `http.urls` are all empty arrays, not
  Hugo's permissive defaults.
- **Icons are vendored** into `assets/icons/` as inline SVG. Never a CDN link.
- **CSP ships as a `<meta>` tag**, gated behind `not hugo.IsServer` — GitHub
  Pages cannot set response headers, and `script-src 'none'` blocks
  `hugo server`'s live-reload script.
- **`markup.goldmark.renderer.unsafe = false`** — raw HTML in content is dropped
  silently, not flagged.

Reach for a Hugo partial or an asset in `assets/` before any package.

## Content model

One markdown file per program in `content/programs/`, rendered by
`layouts/programs/page.html`. Nav, home grid and footer all read the section, so
adding a program touches nothing else.

**Status badges describe maturity, never release state**: `Stable`, `Beta`,
`Alpha`, `Pre-alpha`, `Planned`. Do not reintroduce "Released" — a deliberate
0.x version communicates that the public contracts are not frozen, and
"Released" contradicts what the version number is carefully saying.

**Contributions are not programs.** `content/contributions.md` is pulled into the
home page by `.Site.GetPage`, the same way `/hire` is, with no nav entry. A
contribution is a fact about the author rather than something he maintains, so
an entry links the other project's own home, then the PR — never a page here.

## Two counts go stale together

Adding a program means editing both:

- `content/programs/_index.md` — opens with the count in prose ("Six projects")
- `layouts/home.html` — `range first 6`

`.grid` is two fixed columns rather than `auto-fit`, because auto-fit gave three
across at desktop and left the fourth card alone beside a gap. So an **odd**
program count strands one. Check parity when changing that limit.

## Deploy

Actions-native Pages: the workflow uploads the artifact directly. Pages
`build_type` is `workflow` and there is no `gh-pages` branch.

Do not switch back to branch publishing. It makes GitHub run a second generated
workflow under `dynamic/pages/`, whose pinned `actions/upload-artifact` emits a
Node deprecation annotation that cannot be fixed from inside this repo.

A green tick is not a clean run. Check annotations, and hold them at zero:

```bash
gh api repos/PinKushin/pinkushin.github.io/check-runs/{job-id}/annotations --jq 'length'
```

Job ids come from `gh run view <run-id> --json jobs`.

## Gotchas

- **Menu entries use `pageRef`, not `url`.** `.IsMenuCurrent` cannot resolve a
  raw url, so the active-page state and `aria-current` silently never fire.
- **`partial "icon.html"` fails the build** on a name with no matching SVG in
  `assets/icons/`. Deliberate — a missing icon should not ship as a blank.
- **`docs/` is not published.** Hugo builds `content/`, `assets/`, `static/`,
  `layouts/` and `data/`, so `docs/DECISIONS.md` is inert. Decisions go there, in
  the same commit as the work they govern.
