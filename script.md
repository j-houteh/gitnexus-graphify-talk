# Script — Token Diet: Stop Burning Cash on AI Dev Tools

Beat sheet for an ~8.5-minute, English-language, engineer-audience web
presentation on cutting Claude / Copilot / Cursor token usage with
GitNexus + Graphify. Each `---` is one step boundary. Designed to be
either voiced in post or read silently on-screen as captions.

---

## Chapter 1 — Cover

Token Diet. Stop burning cash on AI dev tools. *(holds before the talk)*

---

## Chapter 2 — Intro

Using Claude Code for serious work?

---

Your token bill has a quiet leak.

---

Here's how to cut it.

---

## Chapter 3 — The hidden tax

One question to your agent.

---

Twenty-five tool calls. Twelve file reads.

---

Sixty thousand tokens — for one session.

---

That's not the model thinking. That's the model *looking*.

---

And every session, it pays the bill again.

---

## Chapter 4 — Why agents over-read

The pattern is always the same. Grep. Read. Grep. Read.

---

Each read costs context. Each grep misses cross-file links.

---

So the agent reads more, just to be sure.

---

It's reading the book to find the table of contents.

---

## Chapter 5 — The hinge

Here's the flip.

---

> *"Structural knowledge about your codebase is a pre-computable asset, not a runtime expense."*

---

## Chapter 6 — GitNexus: the structural graph

GitNexus parses your code into a graph. Once. Up front.

---

Symbols, calls, imports, execution flows — all indexed.

---

One repo. Sixteen hundred files.

---

Twenty-three thousand nodes. Forty-seven thousand edges.

---

Two hundred and fifty-four execution flows — traced and ready.

---

Now the question "what changes if I touch this?" is a graph lookup.

---

Not a grep. A lookup.

---

And it ships as an MCP server, so Claude calls it natively. No shell. No round-trip.

---

## Chapter 7 — Graphify: the semantic graph

Graphify reads more than code.

---

Code. Docs. Images. Research papers. Whiteboard photos.

---

Pipeline: detect, extract, build_graph, cluster, analyze.

---

It infers relationships your AST parser will never see. But it's honest about confidence.

---

EXTRACTED — read it from the source.

---

INFERRED — model-derived, cross-document.

---

AMBIGUOUS — flagged so you can audit it.

---

GitNexus answers "what calls this." Graphify answers "why does this exist."

---

## Chapter 8 — The dual engine

You don't pick one. You route to the right one.

---

Code questions — call chains, blast radius — go to GitNexus. About seventy percent.

---

Cross-layer, semantic, "why" questions go to Graphify. About twenty-five.

---

Grep stays as the five-percent fallback.

---

The analogy: Graphify is `ANALYZE` statistics. GitNexus is the query planner.

---

## Chapter 9 — Setup

Both tools ship as MCP servers. A few commands per their docs — and they're wired into Claude.

---

MCP over CLI saves about two hundred tokens per call. Your agent asks. The graph returns a slice. No file reads.

---

## Chapter 10 — The receipts

Three real queries. Same monorepo. Without the graphs versus with.

---

Test 1 — exception assignment flow. Eighteen tool calls became seven. Eleven file reads became four. And it found the CQRS event handler grep would have missed.

---

Test 2 — invoice to payable matching. Twenty-two calls became five. Fourteen reads became three. Twelve services and four events, traced end-to-end.

---

Test 3 — schema impact on InvoiceLineItem. Fifteen calls became three. Ten reads became zero. Eleven dependencies surfaced, ranked by risk.

---

Aggregate. Fifty-five tool calls collapsed to fifteen. Seventy-three percent fewer.

---

Eighteen grep operations — gone. One hundred percent.

---

Thirty-five file reads down to seven. Eighty percent fewer.

---

And the headline — sixty thousand tokens per session, down to eighteen thousand. Seventy percent saved.

---

## Chapter 11 — Closing

Index once. Reuse forever.

---

Pay tokens for thinking. Stop paying them for finding.

---

Watch the meter drop.

---

## Chapter 12 — Q&A / Thanks

Questions?

---

Thanks.
