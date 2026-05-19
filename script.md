# Script — Cutting Claude's Token Bill with GitNexus + Graphify

Beat sheet for an ~8-minute, English-language, engineer-audience web
presentation. Each `---` is one step boundary. Designed to be either
voiced in post or read silently on-screen as captions.

---

## Chapter 1 — Intro

Using Claude Code for serious work?

---

Your token bill has a quiet leak.

---

Here's how to cut it.

---

## Chapter 2 — The hidden tax

One question to your agent.

---

Twenty-nine tool calls. Fifteen file reads.

---

Fifty-six thousand tokens — for one answer.

---

That's not the model thinking. That's the model *looking*.

---

And every session, it pays the bill again.

---

## Chapter 3 — Why agents over-read

The pattern is always the same. Grep. Read. Grep. Read.

---

Each read costs context. Each grep misses cross-file links.

---

So the agent reads more, just to be sure.

---

It's reading the book to find the table of contents.

---

## Chapter 4 — The hinge

Here's the flip.

---

> *"Structural knowledge about your codebase is a pre-computable asset, not a runtime expense."*

---

## Chapter 5 — GitNexus: the structural graph

GitNexus parses your code into a graph. Once. Up front.

---

Symbols, calls, imports, execution flows — all indexed.

---

Five repos. Twenty-nine seconds.

---

Eleven thousand nodes. Twenty-three thousand edges.

---

Six hundred and fifty-nine execution flows — traced and ready.

---

Now the question "what changes if I touch this?" is a graph lookup.

---

Not a grep. A lookup.

---

And it ships as an MCP server, so Claude calls it natively. No shell. No round-trip.

---

## Chapter 6 — Graphify: the semantic graph

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

## Chapter 7 — The dual engine

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

## Chapter 8 — Setup

Both tools ship as MCP servers. A few commands per their docs — and they're wired into Claude.

---

MCP over CLI saves about two hundred tokens per call. Your agent asks. The graph returns a slice. No file reads.

---

## Chapter 9 — The receipts

Three real queries. Same codebase. Normal Claude versus Claude with the graphs.

---

Test 1 — encryption handling. Fourteen tool calls became two. Eleven file reads became zero. And it found *more* dependencies. Forty-three versus thirty.

---

Test 2 — blast radius on DocumentsService. About fifteen calls became two. Zero execution flows traced — became nine. With risk ranking.

---

Test 3 — end-to-end document editor flow. Twenty-nine tool calls became three. Fifteen file reads became zero.

---

Aggregate: fifty-eight tool calls collapsed to seven. Eighty-eight percent fewer.

---

Eighteen grep operations — gone. One hundred percent.

---

Thirty-five file reads — gone. One hundred percent.

---

And the headline number — retrieval tokens for one query. Thirteen thousand seven hundred and fifty — down to three thousand five hundred. Seventy-four percent saved.

---

## Chapter 10 — Closing

Index once. Reuse forever.

---

Pay tokens for thinking. Stop paying them for finding.

---

Watch the meter drop.
