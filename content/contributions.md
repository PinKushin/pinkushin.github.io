---
title: "Contributions"
description: "Work by John Moore that went into someone else's project rather than his own."
---

**[Hiberbee Theme](https://marketplace.visualstudio.com/items?itemName=SergiyEgoshyn.HiberbeeTheme)**
— Sergiy Egoshyn's theme extension for Visual Studio 2022 and 2026, a little
over 25,000 installs as of August 2026.

[Pull request #5](https://github.com/sergiye/hiberbeeTheme/pull/5) took three
vulnerable packages out of its build — MessagePack, `System.Drawing.Common` and
`System.Text.RegularExpressions`, none of them named by the project, all reached
transitively through the Visual Studio SDK.

My first attempt over-corrected: I pinned two of them directly, and the
maintainer asked why. Answering that properly is what found the real shape of
it. Moving the SDK, the build tools and the VSIX colour compiler forward already
carried MessagePack with them, so only `System.Text.RegularExpressions` still
needed a direct reference — a transitive dependency can't be pinned where it
sits, so lifting one means promoting it to a package the project names itself.
The extra pin came back out, and it merged the same morning it was opened.

Eighteen months on, two of those four lines are still there word for word: the
colour-compiler version and that pin. The maintainer has since moved the SDK
further along.

Written by hand, with no AI involved, and it was the first pull request I ever
sent anyone.

[Source on GitHub](https://github.com/sergiye/hiberbeeTheme)
