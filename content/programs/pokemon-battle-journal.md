---
title: "Pokemon Battle Journal"
tagline: "A .NET MAUI app for logging and analyzing Pokémon TCG battle records on Windows and Android."
status: "In development"
weight: 20
repo: "https://github.com/PinKushin/PokemonBattleJournal"
site: "https://pinkushin.github.io/PokemonBattleJournal/"
platforms: ["Windows", "Android"]
tech: ["C#", ".NET MAUI", "LiveCharts2", "SQLite"]
description: "A .NET MAUI app for logging and analyzing Pokémon TCG battle records across Windows and Android."
---

Record matches, track win rates, and review your performance against specific
archetypes. Everything is stored locally — no account, no sign-up.

## What it does

- **Match logging** — BO1 and BO3 formats, with per-game results, tags, notes,
  start and end times, and the coin flip.
- **Archetype picker** — live meta deck list fetched from limitlesstcg.com on
  launch, with a searchable dropdown and deck images. Falls back to local
  defaults when offline.
- **Trainer stats and charts** — win rate, streaks, average match duration, and
  eight charts: matchup matrix, win rate over time, most played, archetype win
  rates, opponent performance, tag usage, match length, and the first-turn split.
- **BO3 tab switcher** — progressive Game 1 / 2 / 3 tabs. Game 3 appears only
  when the match result is split or both games tied, following official
  tournament rules.
- **Journal view** — history of every recorded match, with expandable per-game
  detail.
- **Import and export** — bring in battle logs exported from trainerhill.com, and
  write your matches back out as TrainerHill-format JSON or a full backup across
  every trainer.
- **Multi-trainer** — create and switch between trainer profiles.

## Building it

Requires the .NET 10 SDK and the MAUI workload. The repo covers the full
toolchain, including the Appium setup for the Windows and Android UI test suites.
