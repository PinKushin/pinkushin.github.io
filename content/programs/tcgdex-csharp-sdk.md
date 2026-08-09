---
title: "TcgDex.CSharpSdk"
tagline: "A .NET SDK for the TCGdex Pokémon TCG API — strongly typed models, a fluent query builder, and first-class Native AOT support."
status: "Released"
weight: 10
repo: "https://github.com/PinKushin/TcgDex.CSharpSdk"
nuget: "https://www.nuget.org/packages/TcgDex.CSharpSdk"
platforms: [".NET 8", ".NET 10", "netstandard2.0", ".NET Framework 4.6.1+"]
tech: ["C#", ".NET", "NuGet", "Native AOT"]
install: "dotnet add package TcgDex.CSharpSdk"
description: "A .NET SDK for the TCGdex Pokémon TCG API with strongly typed models, a fluent query builder, and Native AOT support."
---

A client library for [TCGdex](https://tcgdex.dev), the free public Pokémon TCG
API. Strongly typed models, a fluent query builder covering the full REST filter
syntax, and first-class support for dependency injection, trimming, and Native
AOT.

No API key required — TCGdex is free, public, and read-only.

## Reach

Targets **.NET 8**, **.NET 10**, and **netstandard2.0**, so it runs on modern
.NET and on .NET Framework 4.6.1 and up. The API surface is identical on every
target, async included.

Unity is a supported target *by construction* rather than by test: the
netstandard2.0 assembly contains no runtime code generation, no
`Expression.Compile()`, and no reflection-based serialization, and a Native AOT
publish exercises the one reflective path under full trimming. Nobody has run it
inside a Unity project yet — the repo documents what's verified and what isn't.

## One difference worth knowing

Connection recycling — which keeps a long-lived client from pinning stale DNS —
uses `SocketsHttpHandler` on modern .NET and `ServicePoint.ConnectionLeaseTimeout`
on .NET Framework. Same guarantee, different mechanism. Response cancellation
mid-body is best-effort on netstandard2.0, because the cancellable `HttpContent`
read overloads don't exist there.
