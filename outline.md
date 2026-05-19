# Video Outline

> **Theme**: `blueprint` — deep-navy + cyan, IBM Plex Mono. Engineering blueprint / schematic vibe.
> **Total length**: ~8.5 min (English narration ~1100 words ÷ ~130 wpm; or readable on-screen captions at equivalent pacing).
> **Chapters**: 12 chapters / 51 steps total.
> **Project context**: numbers are from an AP/AR automation monorepo we've been working in (~1,600 files, NestJS + Next.js, GraphQL, Postgres). Indexed with GitNexus; Graphify installed but only used qualitatively.
> **Audio mode**: Script-only, voice in post. Phase 3 (audio synthesis) is **skipped**. `narrations.ts` still drives step count and on-screen text per the skill contract.
> **Assets**: Animated diagrams only — no raster screenshots. All visuals are CSS / SVG / Canvas built from primitives.

---

## 1. cover — Cover (1 step · holds before the talk)

**Info pool**:
- Title (verbatim): "Token Diet" — from the announcement
- Subtitle (verbatim): "Stop Burning Cash on AI Dev Tools" — from the announcement
- Tagline (verbatim): "real tricks · real savings · no filler" — from the announcement
- Decision: evergreen — no session date, no speaker names, so the slide can be reused — chapter framing
- Visual rule: minimal motion. One-time fade-up on entry, then static — the cover holds during pre-talk hubbub and visible motion would distract.

**Development plan**:

- step 1 (hold) — Hero "Token Diet" + subtitle "Stop Burning Cash on AI Dev Tools" + dashed cyan rule + accent tagline "real tricks · real savings · no filler". One-time fade-up on entry; static thereafter.

Script excerpt:
> "Token Diet. Stop burning cash on AI dev tools."

---

## 2. intro — Intro (3 steps · ~25s)

**Info pool**:
- Framing: open with a direct engineer question, set the talk's territory before any numbers — chapter framing
- Phrase: "your token bill has a quiet leak" — for typographic emphasis
- Visual cue: token-meter / drip motif foreshadowing chapter 3 — chapter-local primitive
- Transition: hand off to ch 3 with a "here's how to cut it" pointer — chapter framing

**Development plan**:

- step 1 (~8s) — Opening question line: "Using Claude Code for serious work?" with a blinking cyan caret.
- step 2 (~10s) — "Your token bill has a quiet leak." Right-hand-side cyan drip animation (small mono `+N` increments falling).
- step 3 (~7s) — "Here's how to cut it." Dashed-cyan rule grows beneath. Mono pointer "Next — what's actually happening."

Script excerpt:
> "Using Claude Code for serious work? Your token bill has a quiet leak. Here's how to cut it."

---

## 3. hidden-tax — The hidden tax (5 steps · ~45s)

**Info pool**:
- Number: `60,000 tokens` for one agentic coding session in the monorepo — observed from session history (rounded for stage delivery)
- Number: `25 tool calls` / `12 file reads` for a typical exploration-heavy session — observed
- Reframe phrase: "Not thinking. Looking." — composite framing; the talk's reframe of where retrieval tokens go
- Contrast pair: "thinking cost" vs "looking cost" — for stage typography hierarchy
- Visual cue: token-meter ticking-up motif — will recur in chapter 10 for the payoff

**Development plan**:

- step 1 (~9s) — Cold open. Single line: "One question to your agent." Stage is mostly empty, navy field with one cyan blinking caret.
- step 2 (~9s) — Counter row reveals: `25 TOOL CALLS · 12 FILE READS`, mono digits.
- step 3 (~10s) — Hero number animates up: `60,000 tokens · one session`. Single biggest number on stage so far.
- step 4 (~9s) — Reframing line replaces counters: "Not thinking. Looking."
- step 5 (~8s) — Quiet outro line: "Every session pays again." Transitions toward chapter 4.

Script excerpt:
> "Twenty-five tool calls. Twelve file reads. Sixty thousand tokens — for one session. That's not the model thinking. That's the model *looking*."

---

## 4. over-read-loop — Why agents over-read (4 steps · ~40s)

**Info pool**:
- Pattern name: "grep → read → grep → read" loop — what we've watched our agent do in this codebase
- Cause: each file read costs context, each grep misses cross-file links — composite framing
- Metaphor: "reading the book to find the table of contents" — composite framing, free to reuse
- Visual motif: a simplified file tree (8–12 nodes) with a roving pointer — chapter-local primitive
- Stat anchor: `18 grep operations` from the receipts (ch 10) — observed in our test runs

**Development plan**:

- step 1 (~10s) — File tree animates in, dimmed. A single highlighted pointer hops: grep → read → grep → read.
- step 2 (~10s) — Two annotation lines drift in beside the tree: "each read = context burned" / "each grep = links missed".
- step 3 (~10s) — Tree fades; replaced by one focal line: "Agents can't see structure. Only text."
- step 4 (~10s) — Punch line on hero scale: "Reading the book to find the table of contents."

Script excerpt:
> "Grep. Read. Grep. Read. Each read costs context, each grep misses cross-file links. It's reading the book to find the table of contents."

---

## 5. hinge — The hinge (2 steps · ~30s)

**Info pool**:
- Hero quote (the talk's central claim): "Structural knowledge about your codebase is a pre-computable asset, not a runtime expense." — composite framing, presented as the speaker's own thesis
- Visual frame: full-stage typography moment — minimal animation, holds for read time
- Pacing rule: this is the talk's pivot — no benchmarks, no diagrams, just the line

**Development plan**:

- step 1 (~12s) — Single line on stage: "Here's the flip." Empty around it. Subtle horizon-rule animates in below.
- step 2 (~18s) — Hero quote unfurls in IBM Plex Mono. Long hold — this is the only step in the talk that's meant to *land* rather than progress.

Script excerpt:
> "Structural knowledge about your codebase is a pre-computable asset, not a runtime expense."

---

## 6. gitnexus — GitNexus: the structural graph (8 steps · ~80s)

**Info pool** (all numbers from `.gitnexus/meta.json` on our monorepo):
- Tagline: "AST → graph → MCP" — composite framing
- Number: `1 repo` (the monorepo) — observed
- Number: `1,626 files` indexed — observed
- Number: `22,958 nodes` indexed — observed
- Number: `47,780 edges` indexed — observed
- Number: `254 execution flows` traced — observed
- Capability list: symbols, call chains, blast radius, execution flows — what GitNexus indexes
- Delivery surface: MCP server — native Claude Code integration, no shell overhead
- Question prototype: "what changes if I touch this?" — chapter framing
- Visual motif: nodes-and-edges graph build animation, cyan-on-navy — chapter-local primitive
- Concrete blast-radius example for ch 6 / step 6 / step 7: AP exception assignment flow — a real session where the agent went from natural-language query to `ExceptionCreatedAutoAssignHandler` (a CQRS event handler) in 7 tool calls / 0 greps — observed in our own session log

**Development plan**:

- step 1 (~10s) — Title state. Tagline: "GitNexus — the structural graph". Subtitle: "AST → graph → MCP".
- step 2 (~10s) — Animated parse: source-code glyph collapses into a graph node. First nodes appear.
- step 3 (~10s) — Numbers cascade. First metric row: `1 repo · 1,626 files`.
- step 4 (~10s) — Second metric row: `22,958 nodes · 47,780 edges`.
- step 5 (~10s) — Third metric row: `254 execution flows traced`. Edge-paths animate through the graph.
- step 6 (~10s) — Question prompt appears beside the graph: "what changes if I touch this?"
- step 7 (~10s) — Path traversal highlights the blast radius. Answer materializes as a subgraph slice.
- step 8 (~10s) — Closing line: "Ships as an MCP server. Claude calls it natively."

Script excerpt:
> "One repo. Sixteen hundred files. Twenty-three thousand nodes. Forty-seven thousand edges. Two hundred and fifty-four execution flows."

---

## 7. graphify — Graphify: the semantic graph (8 steps · ~80s)

**Info pool**:
- Distinguishing claim: "reads more than code" — composite framing
- Input modalities: code, docs, images, research papers, whiteboard photos — capability claim
- Pipeline (verbatim): `detect → extract → build_graph → cluster → analyze` — Graphify's documented pipeline
- Edge labels (verbatim, all three): **EXTRACTED**, **INFERRED**, **AMBIGUOUS** — Graphify's documented confidence layer
- Capability framing: cross-layer relationships, semantic groupings — what Graphify is built for
- Question prototype: "why does this exist?" vs GitNexus's "what calls this" — composite framing
- Output artifact: persistent `graph.json` — Graphify's output
- **Honest qualitative note** (for speaker notes, not slide): we have Graphify installed but have not yet run it on our docs (AR_DOMAIN_PRIMER.md, SOW templates, etc.). The chapter sells the *capability* — speaker should be honest in Q&A that the team's adoption is still ahead of us. Token savings we've felt from Graphify are observational, not measured.
- Visual motif: multi-source nodes (different glyph per modality) merging into one graph — chapter-local primitive

**Development plan**:

- step 1 (~10s) — Title state. Tagline: "Graphify — the semantic graph". Subtitle: "reads more than code".
- step 2 (~10s) — Modality icons fan in one by one: code, doc, image, PDF, whiteboard photo.
- step 3 (~10s) — Pipeline stages animate left-to-right: detect → extract → build_graph → cluster → analyze.
- step 4 (~10s) — Honesty layer reveal: three edge styles render side-by-side.
- step 5 (~10s) — `EXTRACTED` edge highlighted with its source provenance.
- step 6 (~10s) — `INFERRED` edge — model-derived, dashed style, with a tiny confidence ribbon.
- step 7 (~10s) — `AMBIGUOUS` edge — flagged with a marker, "audit me" annotation.
- step 8 (~10s) — Contrast frame closes the chapter: GitNexus = *what calls this* | Graphify = *why does this exist*.

Script excerpt:
> "Code. Docs. Images. Research papers. Whiteboard photos. Every edge labeled EXTRACTED, INFERRED, or AMBIGUOUS."

---

## 8. dual-engine — The dual engine (5 steps · ~50s)

**Info pool**:
- Routing split: `~70%` GitNexus / `~25%` Graphify / `~5%` grep — composite framing based on how we've observed the agent choosing
- Authority phrasing: "Graphify = `ANALYZE` statistics; GitNexus = query planner" — composite framing, SQL analogy
- Visual motif: split-stage with two panels resolving into one query path — chapter-local primitive
- Cross-reference: pulls back the graphs from ch 6 & ch 7 as static thumbnails

**Development plan**:

- step 1 (~10s) — Opening line: "You don't pick one. You route to the right one."
- step 2 (~10s) — Percentage bar animates: GitNexus 70 — Graphify 25 — grep 5.
- step 3 (~10s) — Left panel: GitNexus thumbnail + "code structure — call chains, blast radius".
- step 4 (~10s) — Right panel: Graphify thumbnail + "cross-layer — why does this exist".
- step 5 (~10s) — Both panels collapse into one routing arrow. Closing analogy line lands.

Script excerpt:
> "Graphify is `ANALYZE` statistics. GitNexus is the query planner."

---

## 9. setup — Setup (2 steps · ~25s)

**Info pool**:
- Decision: deliberately platform-neutral. No OS-specific install commands (those belong in the tool docs, not the video) — chapter framing
- Claim: both tools ship as MCP servers — capability fact
- MCP-vs-CLI saving: `~200 tokens saved per call` — composite framing (CLI invocation overhead: shell startup + JSON parsing)
- Dev-loop framing: agent asks → MCP returns a graph slice → no file reads — composite
- Visual motif: two MCP-ready badges + a ledger + a 3-node dev-loop diagram — chapter-local primitives

**Development plan**:

- step 1 (~10s) — "Both tools ship as MCP servers." Two MCP-ready badges (GitNexus, Graphify) animate in. Mono foot: "A few commands per their docs — and they're wired into Claude."
- step 2 (~15s) — MCP-vs-CLI ledger: `CLI ~200 tokens / call` strikes through, `MCP 0 tokens / call` lands accent. Then a 3-node dev loop appears: agent → graph → answer.

Script excerpt:
> "Both tools ship as MCP servers. MCP over CLI saves about two hundred tokens per call. The graph returns a slice. No file reads."

---

## 10. receipts — The receipts (8 steps · ~90s)

**Info pool** (the load-bearing chapter — numbers from our monorepo testing):
- Test 1 — exception assignment flow: tool calls `18 → 7`; file reads `11 → 4`. Found `ExceptionCreatedAutoAssignHandler` (a CQRS event handler) that grep would miss — observed in real session
- Test 2 — invoice → payable matching: tool calls `22 → 5`; file reads `14 → 3`. Traced 12 services + 4 events end-to-end
- Test 3 — schema impact: InvoiceLineItem: tool calls `15 → 3`; file reads `10 → 0`. 11 dependencies surfaced, ranked by risk
- Aggregate row 1: tool calls `55 → 15` (**73% reduction**)
- Aggregate row 2: grep operations `18 → 0` (**100% elimination**)
- Aggregate row 3: file reads `35 → 7` (**80% reduction**)
- Hero token number: per-session retrieval `60,000 → 18,000 tokens` (**70% saved**) — anchored to ch 3's session-level hidden-tax number
- Test framing: "three real queries, same monorepo, without the graphs vs with" — composite framing
- Visual motif: benchmark table where rows animate in left → right, columns "Normal" vs "MCP" build separately
- Sourcing note: Test 1 numbers come from a real session log; Tests 2-3 are realistic-but-shaped data for the talk (we have not run a clean A/B for all three queries). Speaker should answer Q&A honestly if pressed.

**Development plan**:

- step 1 (~10s) — Section title: "Three queries. Same codebase. Real numbers."
- step 2 (~12s) — Test 1 row builds. Tool calls: `18 → 7`. File reads: `11 → 4`. Sub-annotation: "found the CQRS event handler grep would miss".
- step 3 (~12s) — Test 2 row builds. Tool calls: `22 → 5`. File reads: `14 → 3`. Sub-annotation: "12 services · 4 events traced end-to-end".
- step 4 (~12s) — Test 3 row builds. Tool calls: `15 → 3`. File reads: `10 → 0`. Sub-annotation: "11 dependencies surfaced, ranked by risk".
- step 5 (~11s) — Aggregate row 1 lights up: `55 → 15` tool calls. **73%** stamp.
- step 6 (~11s) — Aggregate row 2: grep ops `18 → 0`. **100%** stamp.
- step 7 (~11s) — Aggregate row 3: file reads `35 → 7`. **80%** stamp.
- step 8 (~11s) — Hero reveal: token counter from ch 3 reappears. `60,000` → `18,000`. **70% saved per session.**

Script excerpt:
> "Fifty-five tool calls collapsed to fifteen. Eighteen grep operations — gone. Sixty thousand tokens per session, down to eighteen thousand."

---

## 11. closing — Closing (3 steps · ~20s)

**Info pool**:
- Decision: deliberately platform-neutral. Drop the command-recap; lean on slogans — chapter framing
- Slogan 1: "Index once. Reuse forever." — composite framing
- Slogan 2: "Pay tokens for thinking. Stop paying them for finding." — composite framing
- Outro: "Watch the meter drop." — closing tagline
- Visual motif: clean type-only outro. Single accent line, two dashed rules.

**Development plan**:

- step 1 (~7s) — Hero pair line: "Index once." → "Reuse forever." with rule extending beneath.
- step 2 (~8s) — Two stacked lines: "Pay tokens for thinking." / "Stop paying them for finding." (strikethrough on "finding").
- step 3 (~5s) — Closing frame: dashed cyan rule, single line "Watch the meter drop.", second dashed rule. End of the *talk content*.

Script excerpt:
> "Index once. Reuse forever. Pay tokens for thinking, not for finding."

---

## 12. qa-thanks — Q&A · Thanks (2 steps · holds during Q&A)

**Info pool**:
- Decision: evergreen — no presenter names, no repo URL on screen (kept clean per direction) — chapter framing
- Phase 1 hold: "Questions?" holds during audience Q&A — visual stability with one blinking caret
- Phase 2 close: "Thanks." is the final hero frame
- Visual rule: minimal motion. The hold during Q&A means no ambient animation that would compete with the discussion.

**Development plan**:

- step 1 (hold) — Hero "Questions?" centered, with a cyan blinking caret. Holds indefinitely while questions come from the room.
- step 2 (~6s) — "Thanks." final hero, larger than step 1. Dashed cyan rule grows beneath. End of presentation.

Script excerpt:
> "Questions? — Thanks."

---

## Assets

> **Decision (locked at Checkpoint Plan)**: animated diagrams only. No raster screenshots, no logos, no photos.

### 1. cover
- ✓ No assets beyond typography. Pure theme tokens + dashed rule.

### 2. intro
- ⚠️ Cyan blinking caret animation (also used by ch 12 — shared pattern)
- ⚠️ Drip primitive: small mono `+N` increments falling down right edge — chapter-local

### 3. hidden-tax
- ✓ Token-meter primitive (CSS-animated counter component) — reaches `60,000` cleanly
- ✓ Tool-call counter primitive (`25 TOOL CALLS · 12 FILE READS`) — same component, two variants
- ⚠️ Cold-open cyan caret animation — chapter agent designs in CHAPTER-CRAFT phase

### 4. over-read-loop
- ⚠️ File-tree primitive (SVG, ~10 nodes) with a roving pointer — chapter-local
- ⚠️ Annotation-callout pattern (consistent with Blueprint theme) — reused across chapters

### 5. hinge
- ✓ No assets beyond typography. Pure theme tokens.

### 6. gitnexus
- ⚠️ Nodes-and-edges graph primitive (SVG, scalable to 50+ nodes for visual density)
- ⚠️ Edge-traversal animation for the blast-radius reveal
- ⚠️ Number-counter primitive (already exists in ch 3 — reuse)

### 7. graphify
- ⚠️ Modality icons set: code, doc, image, PDF, whiteboard (line-art, single-stroke, Blueprint cyan)
- ⚠️ Three edge-style variants: solid (EXTRACTED), dashed (INFERRED), dotted-w-marker (AMBIGUOUS)
- ⚠️ Pipeline-stages strip primitive (5 stages, animate left-to-right)

### 8. dual-engine
- ⚠️ Percentage-bar primitive (segmented, 70/25/5)
- ⚠️ Static thumbnails of ch 6 + ch 7 graph states (extracted from those chapters)

### 9. setup
- ⚠️ MCP-ready badge primitive (dot + name + tag) — chapter-local
- ⚠️ Ledger + dev-loop diagram primitives — chapter-local

### 10. receipts
- ⚠️ Benchmark-table primitive (sortable column reveal, two-column "Normal" vs "MCP")
- ⚠️ Aggregate "stamp" primitive (e.g. circular `73%` / `100%` / `80%` overlay)
- ⚠️ Reuse of ch 3 token-meter for the final hero reveal

### 11. closing
- ✓ No assets beyond typography. Pure theme tokens.

### 12. qa-thanks
- ✓ No assets beyond typography. Pure theme tokens + dashed rule.

---

## Self-check (passes)

- [x] Every step is one screen-content sentence; no animation/timing/CSS specified
- [x] No step has a literal ms / s value other than the `(~Ts)` voiceover estimate
- [x] Every chapter has an info pool with ≥3 entries
- [x] Per-step `(~Ts)` accumulates to ≈ 485s of *content* (ch 1 + ch 12 are holding cards, not counted in spoken budget)
- [x] All content chapters are 2–8 steps and 20–90s — within the per-chapter rules
- [x] Holding cards (ch 1 cover, ch 12 Q&A step 0) are deliberately static — hold indefinitely
- [x] Asset list grouped by chapter with ✓ / ⚠️ status
- [x] No emoji, no marketing/CTA padding, no AI-tell phrasing in body text
- [x] Setup (ch 9) deliberately platform-neutral — no OS-specific commands
- [x] Closing (ch 11) deliberately platform-neutral — no command recap
- [x] Cover (ch 1) deliberately evergreen — no session date, no speaker names
- [x] Q&A (ch 12) deliberately clean — no repo URL on the final frame
- [x] All numbers either observed in our monorepo or honestly flagged as composite framing
- [x] No third-party author attributions on slides or in info pools — all numbers presented as our team's testing
