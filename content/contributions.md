---
title: "Contributions"
description: "Work by John Moore that went into someone else's project rather than his own."
---

**[Hiberbee Theme](https://marketplace.visualstudio.com/items?itemName=SergiyEgoshyn.HiberbeeTheme)**
— Sergiy Egoshyn's theme extension for Visual Studio 2022 and 2026, a little
over 25,000 installs as of August 2026.

[Pull request #5](https://github.com/sergiye/hiberbeeTheme/pull/5), opened and
merged the same morning in February 2025, took three vulnerable transitive
packages out of its build. The Visual Studio SDK, the VSSDK build tools and the
VSIX colour compiler all moved forward, and `System.Text.RegularExpressions`
got a direct reference it hadn't had before — a transitive dependency can't be
pinned where it sits, so lifting one means promoting it to a package the
project names itself.

Four changed lines. Eighteen months on, two of them are still there word for
word: the colour-compiler version and that pin. The maintainer has since moved
the SDK further along.

[Source on GitHub](https://github.com/sergiye/hiberbeeTheme)
