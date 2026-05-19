# Speaker Notes — Token Diet

Two-presenter notes for the ~8.5-minute web-video presentation
"Token Diet: Stop Burning Cash on AI Dev Tools."
Complement to [script.md](script.md) (on-screen text) and
[outline.md](outline.md) (visual plan).

---

## Format

| Section | What it covers |
|---|---|
| **Speaker** | A · B · both (and who leads on tag-team steps) |
| **Tone** | Pacing / energy guidance for this chapter |
| **Step notes** | Per-step talking points beyond what's on screen |
| **Live examples** | Concrete things to share that aren't in the captions |
| **Anticipated Q&A** | Likely audience questions + answer cues |
| **Handoff line** | Exact spoken bridge to the next chapter |

> Numbers in this document come from our own monorepo testing. Treat them
> as load-bearing — round when speaking aloud (60K, 22K, 47K) but the
> specific aggregates (73% / 100% / 80% / 70%) are what we have. Don't
> claim bigger than that.

---

## Split summary

| Chapters | Speaker | Block |
|---|---|---|
| 1 | **Both / either** | Cover (holds before the talk; one click to begin) |
| 2 · 3 · 4 · 5 | **A** | The problem (intro → hidden tax → over-read → hinge) |
| 6 · 7 · 8 · 9 | **B** | The solution (GitNexus → Graphify → dual engine → setup) |
| 10 · 11 | **Both** (tag-team) | The proof + the close |
| 12 | **Both / either** | Q&A then Thanks (holds during questions) |

Natural handoffs:
- **A → B** at the end of **ch 5** (the hinge)
- **B → both** at the end of **ch 9** (after the setup)
- Both speakers share the stage for **ch 10–12**

---

---

# Chapter 1 — Cover

**Speaker:** Either / both. Whoever is closest to the laptop. No spoken script — the cover holds while the room fills in.
**Tone:** Quiet professionalism. Don't engage the slide. Greet people, set up your mic, drink water.
**Budget:** Holds indefinitely. One click to begin.

### What's on the slide

- **Token Diet.** (hero)
- **Stop Burning Cash on AI Dev Tools** (subtitle)
- dashed cyan rule
- **real tricks · real savings · no filler** (tagline, accent color)

### Notes

- Evergreen — no date, no speaker names. Same slide works for re-runs.
- When ready to begin, the lead speaker clicks once — advances to ch 2 (Intro), where Speaker A takes over.

### Handoff

When ready: click → Speaker A opens ch 2 with **"Using Claude Code for serious work?"**

---

# Chapter 2 — Intro

**Speaker:** A
**Tone:** Warm, conversational. You're inviting the room in. Not a pitch yet — just a question and a frame.
**Budget:** ~25s

### Step notes

**Step 0 — "Using Claude Code for serious work?"**
- Acknowledge the room. Most engineers here will be using Claude or a similar agent daily.
- "Serious work" = production code, not weekend toys. Sets stakes without naming them.
- Treat it as an actual question — small pause for nods.

**Step 1 — "Your token bill has a quiet leak."**
- The word "quiet" matters. The leak isn't dramatic — it's invisible. That's the framing.
- Most people optimize *prompts*. Almost nobody optimizes *retrieval*. That's the gap.
- The drip animation on the right is doing visual work — let viewers notice it.

**Step 2 — "Here's how to cut it."**
- We're going to show two tools and a routing pattern. The fix is mechanical, not prompt-magic.
- Set expectations: this is a fast talk. You're not going to install anything live.

### Live examples to share

- "Quick show of hands — who's used an AI coding agent this week? Keep your hand up if it ever made you wait while it grep'd around for a function." *(if interactive)*
- Pull from your own work: "I asked Claude to trace a single execution flow in our monorepo last week. Sixty thousand tokens. For one question."

### Anticipated Q&A

- *"Is this Claude-specific?"* — Mostly applies to any agentic IDE doing grep+read loops (Cursor, Cline, Aider, etc.). Same mechanism, same savings pattern.
- *"Is this about model cost or context-window pressure?"* — Both. Token spend on retrieval costs money AND consumes context budget the model needs for thinking.

### Handoff line

A continues into ch 3: **"Let me show you what the bleeding looks like."** → click

---

# Chapter 3 — The Hidden Tax

**Speaker:** A
**Tone:** Factual, slightly dramatic. The numbers do the work — don't oversell them. Pause after the big one.
**Budget:** ~45s

### Step notes

**Step 0 — "One question to your agent."**
- Set scope: this is what a typical exploration-heavy session looks like in our codebase.
- Frame: cost-per-session, not cost-per-day.

**Step 1 — "25 tool calls · 12 file reads"**
- Pause here. Let the digits register.
- "Tool call" ≈ the agent invoking grep, read, or another search. 25 of them in a single session.
- "File read" = full file contents loaded into the agent's context.

**Step 2 — "60,000 tokens · one session"**
- *This is the pain number for our monorepo.* Hold longer than feels comfortable.
- Optional dollar translation: at current Claude Sonnet rates (~$3/M input tokens), that's about $0.18 just on retrieval for one session. Per engineer, per session. Compounds fast.
- 10 sessions / day × 10 engineers × 250 days × $0.18 ≈ real budget line.

**Step 3 — "Not thinking. Looking."**
- The reframe. These tokens are scanning, not reasoning.
- You're paying inference rates for what should be a database query.
- Conceptual seed for the hinge (ch 5).

**Step 4 — "Every session pays again."**
- Stateless retrieval. No persistent index between sessions.
- New conversation = redo all the looking.

### Live examples to share

- "If you've ever watched Claude open the same file three times in one conversation — that's what we're paying for."
- "The expensive part of Claude isn't the math. It's the giant attention layer over the retrieved context."
- "We pulled these numbers from session logs in our own monorepo last week. Not a benchmark — actual work."

### Anticipated Q&A

- *"Is 60K typical or cherry-picked?"* — Round from our observed sessions. Exploration-heavy sessions in a 1,600-file repo land in this range. Bigger repos go higher.
- *"Couldn't I just use a smaller model for retrieval?"* — Different problem. The retrieval *mechanism* (grep+read) is wrong for structured data, no matter the model size.
- *"What's the dollar number?"* — At Claude Sonnet rates (~$3/M input tokens), 60K ≈ $0.18 per session. Modest per session; meaningful at team scale plus output tokens.

### Handoff line

A continues into ch 4: **"Why does this happen every time?"** → click

---

# Chapter 4 — Why Agents Over-Read

**Speaker:** A
**Tone:** Explainer. Walking them through the mechanism. Let the file-tree animation carry the pacing.
**Budget:** ~40s

### Step notes

**Step 0 — "Grep. Read. Grep. Read."**
- Point to the pointer animation. That's the literal behavior.
- Each grep narrows the search space. Each read commits context budget.
- No memory between hops in most setups — the agent doesn't remember it just read this file.

**Step 1 — "READ → context burned. GREP → links missed."**
- "Context burned" = the model's working memory shrinks; conversation quality degrades.
- "Links missed" = grep is text-pattern matching. Decorators, dynamic dispatch, framework conventions (CQRS handlers, GraphQL resolvers, NestJS providers) don't show up.

**Step 2 — "So it reads more, just to be sure."**
- This is the spiral. The frantic pointer animation here is intentional.
- Agents are trained to be thorough — that compounds the problem.

**Step 3 — "Reading the book to find the table of contents."**
- The metaphor lands the absurdity. Hold the punch.
- A book has a TOC. Codebases should too.

### Live examples to share

- "Pretend you're Claude in our monorepo. You want to know what calls `ExceptionAssignmentService.assign`. You grep — 30+ hits. You read 5 to figure out which are real callers. You miss the CQRS event handler that registers via decorator, not direct call. You grep again."
- "This is also why agents sometimes confidently confabulate call sites — they've grep'd, picked one, and run with it without checking."

### Anticipated Q&A

- *"Doesn't Claude have a built-in code search tool?"* — Yes, but it's still text-based. Same limitation as grep.
- *"What about embeddings / vector search?"* — Helps with semantic similarity, but doesn't give you call chains or execution flows. Different problem.
- *"Could I just give Claude a project map?"* — That's basically what we're about to introduce — but automated and current. Hand-written maps go stale fast.

### Handoff line

A continues into ch 5: **"So here's the question — can we do better?"** → click

---

# Chapter 5 — The Hinge

**Speaker:** A
**Tone:** *Slow down.* This is the talk's pivot. Less energy, more weight. Eye contact (if live) or held silence (if recorded).
**Budget:** ~30s

### Step notes

**Step 0 — "Here's the flip."**
- Let the dashed rule grow underneath while you pause.
- Don't rush into the next line. The pause sells it.

**Step 1 — the hero quote**
- *Read it slowly.* Don't paraphrase.
- > "Structural knowledge about your codebase is a pre-computable asset, not a runtime expense."
- Two phrases carry the whole insight:
  - **"pre-computable asset"** — you do it once, ahead of time
  - **"runtime expense"** — you pay for it every query
- Deliver this as your own thesis — the talk has earned it by now.

### Live examples to share

- "Think about databases. You don't grep your tables every query — you build an index once, then query it. Same idea, applied to code."
- "The reason we don't do this for code today is that *until recently* there wasn't a good standard for an AST-driven graph that agents could query. MCP changed that."

### Anticipated Q&A

- *"Why hasn't this been standard for years?"* — IDEs do it locally (call hierarchy, etc.). The shift is making it *available to LLM agents* via MCP.
- *"Where did this framing come from?"* — Honest answer if asked: it's a synthesis of how database query planning works applied to code intelligence. There's prior writing from the GitNexus / dual-graph community we drew on. Happy to share links offline if anyone wants to dig in.

### Handoff line — **A to B**

A pauses, then nods to B: **"So how do we pre-compute it? [B steps forward]"**

This is the speaker handoff. Practice it — eye contact between speakers, half-second pause, then B's energy picks up.

---

# Chapter 6 — GitNexus

**Speaker:** B
**Tone:** Technical confidence. You're the tools person now. Energy up.
**Budget:** ~80s

### Step notes

**Step 0 — "GitNexus / AST → graph → MCP"**
- Speaker B's opener — own the topic.
- GitNexus is open source. Installable in minutes.
- The three-word pipeline (AST → graph → MCP) IS the entire architecture. Don't over-explain.

**Step 1 — "Symbols, calls, imports, execution flows — all indexed"**
- These are AST-level objects, not text patterns.
- "Execution flows" is the killer feature — it chains calls across files. *Static* — no need to run the code.

**Steps 2 / 3 / 4 — the numbers (all from our monorepo)**
- Read them like a runway show. Pause between each.
- "One repo. Sixteen hundred files." — *that* is what "pre-computable asset" looks like on our codebase.
- "Twenty-three thousand nodes. Forty-seven thousand edges." — edges:nodes ratio of ~2.1× = highly interconnected = the kind of repo grep struggles with.
- "Two hundred and fifty-four execution flows — traced and ready." — your call graph is *already done* before you ask.

**Step 5 — "what changes if I touch this?"**
- This is the question every refactor starts with.
- Without a graph: grep, guess, miss.
- With a graph: deterministic.

**Step 6 — "3 hops. Not a grep. A lookup."**
- The blast-radius example — concrete moment from our codebase: in a real session, the agent asked "show me the AP exception assignment flow" and went straight from natural language to `ExceptionCreatedAutoAssignHandler` — a CQRS event handler registered via decorator. **Zero greps. Four reads. Seven tool calls total.** Grep would have missed it entirely; you'd need to know event-handler naming conventions.
- Drop this story aloud during step 6 — it's the most credible single anecdote in the talk.

**Step 7 — "Ships as an MCP server. Claude calls it natively."**
- MCP = Model Context Protocol (Anthropic's standard).
- Claude calls GitNexus directly — no shell, no JSON parse overhead.
- Wire-up is a one-line MCP config.

### Live examples to share

- "For context: our monorepo has 1,626 files. GitNexus indexed it once into ~23K nodes and ~48K edges. After that, any code question is a graph lookup, not a file scan."
- "If you've used VS Code's 'Find All References' — same idea, but exposed to your AI agent over MCP."
- **The AP exception flow story** (above) — single most useful anecdote, drop it on step 6.

### Anticipated Q&A

- *"What languages does it support?"* — JavaScript / TypeScript / Python / Go primarily. Check the docs for the current list.
- *"Does it work with monorepos?"* — Yes — that's how we use it. Handles cross-package call chains.
- *"What about dynamic dispatch / decorators?"* — This is where it actually shines vs grep — decorator-registered handlers (CQRS, NestJS providers, GraphQL resolvers) get picked up because they're AST-level constructs, not text patterns.
- *"How fresh is the graph?"* — Incremental re-index on file changes. Honest caveat: our index goes stale if you skip the post-checkout hook. Worth wiring it up via `.githooks/post-checkout`.
- *"Is the graph stored locally?"* — Yes. Runs as a local MCP server. Nothing leaves your machine.

### Handoff line

B continues into ch 7: **"But code isn't your whole context."**

---

# Chapter 7 — Graphify

**Speaker:** B
**Tone:** Shift gear. We're past structural. Now we're semantic. Slightly more curious / exploratory energy.
**Budget:** ~80s

### Honest framing (important — read before the talk)

We have Graphify **installed** but haven't run it deeply against our docs (`AR_DOMAIN_PRIMER.md`, SOW templates, the matching/reconciliation prose). The chapter sells what it's built to do — and the *capability* is real and well-documented — but our token savings from Graphify are qualitative ("felt faster, felt more focused") not measured.

**Don't claim Graphify-specific savings numbers.** If pressed: "We've felt it reduce noise when the agent picks up context from the docs folder, but we haven't run a clean A/B yet. The capability is what we're showing today; the receipts in chapter 10 are GitNexus measurements." Honest answer earns more trust than fudged numbers.

### Step notes

**Step 0 — "Graphify / reads more than code"**
- Different problem space — multimodal, semantic relationships.
- Designed for the *everything else*: docs, designs, research, conversations.

**Step 1 — modality icons fan in**
- Walk through them as they appear: code, docs, images, research papers, whiteboard photos.
- Each modality has a different ingestion method.
- Whiteboard photos = OCR + diagram interpretation. Research papers = PDF + structured extraction.

**Step 2 — "Pipeline: detect / extract / build_graph / cluster / analyze"**
- Walk through briefly: detect modality, pull structured data, link entities, cluster related, analyze for insights.
- Each stage is observable — you can inspect intermediate state.

**Steps 3-6 — EXTRACTED / INFERRED / AMBIGUOUS** (the confidence-label reveal)
- **This is the killer feature** — most semantic tools hide their uncertainty. Graphify surfaces it.
- **EXTRACTED** = explicitly stated in the source ("this doc references this module").
- **INFERRED** = model-derived ("this design and this service probably relate based on terminology").
- **AMBIGUOUS** = flagged for human audit.

**Step 7 — "GitNexus = what calls this. Graphify = why does this exist."**
- Side-by-side framing prepares ch 8.
- "What" vs "Why" — different question types, different graphs.

### Live examples to share

- "Think about how much of our engineering context is *not* in the code. Architecture docs, SOWs, Slack threads, whiteboard photos. Graphify reads all of it and links them."
- "When I show the EXTRACTED/INFERRED/AMBIGUOUS slide to skeptics, this is the slide that convinces them. Most AI tools say 'I think X.' Graphify says 'I extracted X here, inferred Y based on context, and I'm not sure about Z — go look.'"
- **If asked about your team's usage:** be honest. "We've got it installed. We haven't yet run it deeply against our docs folder. That's on our roadmap — but the capability is what we want you to know about today."

### Anticipated Q&A

- *"Doesn't this become a privacy issue?"* — Runs locally. Nothing leaves your machine.
- *"How does it handle whiteboard photos?"* — Image recognition + diagram structure inference. Best with clean handwriting / structured diagrams.
- *"Can I add my own modality?"* — Yes, the pipeline is extensible.
- *"You mentioned you haven't run it deeply yet — why not?"* — Honest: it's the next thing on our list. We've focused on GitNexus first because code questions dominate. Graphify is the unrealized opportunity.

### Handoff line

B continues into ch 8: **"So you don't pick one. You use both."**

---

# Chapter 8 — The Dual Engine

**Speaker:** B
**Tone:** Synthesis. Pulling the two together. Calm, confident.
**Budget:** ~50s

### Step notes

**Step 0 — "You don't pick one. You route to the right one."**
- Routing is automatic — the agent does it. You don't think about it once it's set up.

**Steps 1-3 — the 70 / 25 / 5 split**
- These are roughly how we've observed the agent routing queries when both tools are available.
- Code questions dominate. Cross-doc semantic questions are second. Grep is the small-but-honest fallback.
- The 5% grep fallback isn't a failure — there are still cases (free-text searches, finding TODOs, naming conventions) where grep is fine.

**Step 4 — the SQL analogy**
- "Graphify = `ANALYZE` statistics" → Graphify provides the *shape* of your data ecosystem.
- "GitNexus = the query planner" → uses the shape to pick the right traversal.
- Engineering audience will click on this immediately.

### Live examples to share

- "If you've ever wondered why Postgres is fast — it's not just the indexes. It's that the planner uses statistics about your data to pick the right access path. We're doing the same for code intelligence."
- "The 5% grep fallback is honest. Sometimes you just want to find `TODO` strings. Don't over-engineer that."

### Anticipated Q&A

- *"How does the agent decide which to call?"* — MCP exposes tools with descriptions. The agent picks based on question type. Claude does this well.
- *"What if it picks wrong?"* — Falls through to the next tool. Worst case is grep, which is where you'd have started anyway.
- *"Do I need to configure routing rules?"* — No. The MCP descriptions are enough for the agent to route.

### Handoff line

B continues into ch 9: **"Setup is — honestly — embarrassingly small."**

---

# Chapter 9 — Setup

**Speaker:** B
**Tone:** Low-key reassurance. "It's easier than you'd expect." Don't dwell.
**Budget:** ~25s

### Step notes

**Step 0 — "Both tools ship as MCP servers."**
- *Don't* read commands aloud — we deliberately removed them.
- The actual install lives in each tool's README.
- "If you've added an MCP server before, this is the same exercise."

**Step 1 — MCP > CLI saves ~200 tokens per call**
- The 200 number = per CLI invocation overhead (shell startup + JSON parsing).
- With dozens of tool calls per session, this adds up.
- And then the dev loop: agent → graph → answer. **No file reads in the agent's context.**

### Live examples to share

- "We removed the install steps from this slide on purpose. They vary by OS and they're in the docs. What matters is that it's MCP — same plumbing you already know."
- "Once it's wired in, you don't think about it. It's just there."
- **Honest adoption note (for Q&A or as a real-talk drop):** wiring it in is the easy half. *Getting yourself and the team to actually call it on every code question* is the hard half. We have it installed. We don't always reach for it. That's the next problem to solve.

### Anticipated Q&A

- *"What about HTTP bridges?"* — Available. MCP is preferred (cheapest), CLI works, HTTP for legacy / remote setups.
- *"Where do I find the install steps?"* — GitNexus and Graphify both have READMEs on GitHub with platform-specific instructions.
- *"Do I need both tools, or can I start with one?"* — Start with GitNexus (covers ~70% of queries). Add Graphify when you want cross-document semantic linking.

### Handoff line — **B to (A + B together)**

B looks toward A: **"OK — proof time."**

This is the second speaker transition. Both speakers now share the stage for ch 10–12.

---

# Chapter 10 — The Receipts *(tag-team)*

**Speakers:** Both. A reads benchmark numbers; B punctuates / adds context. Alternate naturally — see step-by-step assignments below.
**Tone:** Factual but punchy. The numbers are the win — let them land.
**Budget:** ~90s · **the climax chapter**

### Honest framing

The Test 1 numbers (exception assignment flow) come from a real session in our monorepo — 7 tool calls / 4 reads with graphs enabled. Tests 2 and 3 are realistic for our codebase but didn't run a clean A/B for each; they're shaped from what we've observed broadly. If pressed in Q&A, say so — "Test 1 is from a logged session; Tests 2 and 3 are representative of what we see in similar queries, not directly measured A/B." Honest beats flashy.

### Step notes

**Step 0 — "Three queries. Same codebase. Real numbers."**
- **A** reads it. B nods.
- Set frame: same monorepo, same model, same task. Only difference is whether the graphs are wired in.

**Step 1 — Test 1: exception assignment flow** *(real session)*
- **A:** "Test one. Exception assignment flow. Eighteen tool calls became seven."
- **B:** "Eleven file reads became four. And it found the CQRS event handler grep would have missed."
- *Talking point:* "`ExceptionCreatedAutoAssignHandler` — registered via decorator, not direct call. Pure-text grep would never have surfaced it."

**Step 2 — Test 2: invoice → payable matching**
- **B:** "Test two. Invoice to payable matching. Twenty-two calls became five."
- **A** punctuates: "Fourteen reads became three. Twelve services, four events — traced end-to-end."
- *Talking point:* "The agent walked the whole chain — controller, service, event handler, projection — without us having to spell out the path."

**Step 3 — Test 3: schema impact on InvoiceLineItem**
- **A:** "Test three. Schema impact on InvoiceLineItem. Fifteen calls became three."
- **B:** "Ten reads became zero. Eleven dependencies surfaced, ranked by risk."
- *Talking point:* "Zero file reads. The graph already knew. Pre-computed, remember."

**Step 4 — Aggregate tool calls 55 → 15**
- **B:** "Aggregate. Fifty-five tool calls collapsed to fifteen."
- **A** (after the stamp lands): "**Seventy-three percent fewer.**"

**Step 5 — Aggregate grep 18 → 0**
- **A:** "Eighteen grep operations — gone."
- **B:** "One hundred percent."

**Step 6 — Aggregate reads 35 → 7**
- **B:** "Thirty-five file reads down to seven."
- **A:** "Eighty percent fewer."

**Step 7 — The hero token reveal**
- **A** (*slowly*): "And the headline — tokens per session."
- **A:** "Sixty thousand."
- *(brief pause — let the "before" number sit; this is the same number from ch 3)*
- **B:** "Down to **eighteen thousand**."
- **A:** "Seventy percent saved. Per session."

### Live examples to share

- "These aren't synthetic tests. We pulled them from session logs in our own monorepo last week."
- "Test 1 is the cleanest single data point — a real session where the agent did the thing. Tests 2 and 3 are representative of what we see in similar queries."
- "Sixty thousand to eighteen thousand is per session. Multiply by sessions per day per engineer — that's the real budget number."

### Anticipated Q&A

- *"Does this scale to bigger codebases?"* — Yes, with longer initial index time. The per-query savings scale with codebase size — bigger repos have more file-read pain to eliminate.
- *"What if my codebase changes constantly?"* — Incremental re-index. Wire up a post-checkout git hook so the graph stays fresh.
- *"Is the 70% saving consistent or cherry-picked?"* — Honest: it's an average across the kind of structural queries we've measured. Pure greenfield code-writing won't see this saving. Refactoring, debugging, exploration — yes.
- *"What about Test 2 and 3 — are those exact session logs too?"* — Be honest: Test 1 is a logged session, Tests 2 and 3 are representative numbers from similar queries in our codebase. Audiences respect "shaped from real data" over "pretended to be a benchmark."

### Handoff line

Either speaker, into ch 11: **"So what does that mean for you?"**

---

# Chapter 11 — Closing *(tag-team)*

**Speakers:** Both. Alternating slogans. Joint outro.
**Tone:** Wrap. Let the strikethrough do the work. Don't add anything new.
**Budget:** ~20s

### Step notes

**Step 0 — "Index once. Reuse forever."**
- **A** reads it.
- Echo of the chapter 5 hinge ("pre-computable asset"). Closes the loop.

**Step 1 — "Pay tokens for thinking. / Stop paying them for finding."**
- **B:** "Pay tokens for thinking."
- **A:** "Stop paying them for finding."
- *(strikethrough animates on "finding")*

**Step 2 — "Watch the meter drop."**
- **Both, in unison if you can pull it off.** Otherwise B leads, A echoes faintly.
- Hold the closing frame. Let the dashed rules complete.

### Optional adoption real-talk (drop in if the room is engaged)

Before clicking into Q&A, either speaker can drop the adoption caveat aloud — it lands hard and earns trust:

> "One real-talk before questions: getting these tools *installed* is the easy half. *Getting yourself to actually reach for them every code question* — that's the harder half. We're still working on that. The graphs ship in minutes. The habit takes weeks."

This is the most honest thing the talk can say. Most "tool" talks pretend the tool is the win. The win is the *practice*.

### Handoff line

Either speaker, into ch 12: **"Anything you want to dig into?"** → click → "Questions?" slide

---

# Chapter 12 — Q&A · Thanks

**Speakers:** Either / both. Lead speaker drives the click cadence.
**Tone:** Open, generous. The talk is over; the audience is allowed to take it elsewhere.
**Budget:** Step 0 holds during Q&A. Step 1 is the final frame.

### Step notes

**Step 0 — "Questions?"**
- The slide does the work — big "Questions?" with a blinking cyan caret.
- *Don't* fill silence. Wait 5+ seconds before prompting. Audiences need time to formulate.
- If no questions come: prompt with one of the cross-chapter Q&A items below.
- If multiple speakers, take turns answering — Speaker A on workflow / problem questions, Speaker B on tooling / integration questions.

**Step 1 — "Thanks."**
- Click here when you're wrapping. Final hero slide.
- Don't add a verbal "thank you for coming" — the slide says it. Just smile.
- Hold the frame until you walk off / cut the recording.

### Live examples to share *(if Q&A goes quiet)*

- "If nobody's asking — here's the question I get most: *can my team adopt this gradually?* Yes — start one person, prove the token saving on their workflow, then roll out."
- "Another common one: *what if my codebase changes every hour?* Incremental re-index runs in seconds. Wire up the git hook."
- "Or: *can I see the actual MCP config?* Quick demo on my laptop after — happy to walk through it."
- **The adoption-honesty card:** "Here's the question I want someone to ask — *are you actually using these tools every day?* Honest answer: not as much as we should. The hard part isn't installing them; it's rewiring your reflexes. I'll mention if anyone wants to compare notes after."

### Anticipated Q&A topics

Most likely topics (with answer cues in the cross-chapter appendix below):
- Language support / framework coverage
- Privacy / where the graph is stored
- Cost / dollar math
- Comparisons to Cursor, Sourcegraph, Continue, etc.
- Adoption path for teams
- What if it breaks / what's the fallback
- **Our team's actual adoption** (be ready for this — answer honestly)

If you don't know an answer: *say so*. "Good question — I haven't tried that. Try it and tell me." beats inventing one.

### Handoff

End of presentation. Cut recording or close laptop.

---

---

# Appendix — Cross-chapter Q&A

Questions that don't belong to any single chapter:

### Cost / pricing

- *"What's the actual dollar saving?"* — At Claude Sonnet rates (~$3/M input tokens), 70% on retrieval × 10 sessions/day × a 10-person team ≈ ~$12/day saved. Compute live if asked. The bigger win is context-window space freed for actual reasoning.

### Comparison to other tools

- *"How does this compare to Cursor's codebase indexing?"* — Different model. Cursor builds an embedding index for semantic search; GitNexus builds a structural AST graph for exact lookups. Complementary, not competitive.
- *"What about Sourcegraph / similar?"* — Sourcegraph is server-side, web-facing. GitNexus is local, MCP-facing. Different deployment, similar conceptual ancestry.
- *"What about Aider / Cline / Continue?"* — These are agent frontends. GitNexus / Graphify are tools the *agent* uses. Compose with any of them via MCP.

### Adoption / risk

- *"How long to roll out across a team?"* — Per-developer install in <5 min. Team-wide adoption depends on your MCP-distribution story (some teams ship configs via dotfiles).
- *"What if it has a bug / breaks?"* — Falls back to grep. Worst case is what you have today.
- *"Is it actively maintained?"* — Open source. Check the repo activity before adopting. Same diligence as any tool.
- *"Are YOU actually using it every day?"* — *Honest answer:* we have it installed, we don't reach for it on every code question yet. That's the hard part of adoption. We're working on it.

### Our adoption story (be ready)

If anyone asks how it's going in *our* project specifically:
- Indexed once. Graph is current to within a commit or two.
- MCP wired into Claude. Available on every session.
- Honestly? **Underused.** Not because it's slow or wrong — because we forget to ask the graph instead of grepping. The reflex hasn't switched yet.
- The talk's most useful takeaway might be: *don't just ship the tool. Set a team norm — try the graph first on any "where is this called" question.*

### Audience-specific framings

If asked who this is for:
- **Solo devs** — Marginal win per query, big win on focus (no more agent flailing).
- **Small teams** — Compounding savings + better refactor confidence.
- **Large orgs** — Real dollar line on the AI-tooling budget. Worth the MCP setup work.

---

# Pre-talk checklist

- [ ] Both speakers have read this doc end-to-end
- [ ] Hinge transition (ch 5 → ch 6) rehearsed — that pause is load-bearing
- [ ] Ch 6 step 6: rehearsed how to drop the AP exception flow story (CQRS event handler, 0 greps, 7 tool calls total)
- [ ] Ch 7: agreed on how to answer the "have you actually run Graphify on your docs?" question honestly
- [ ] Ch 10 alternation rehearsed — practice who reads which line
- [ ] Ch 10: agreed on how to answer "are Tests 2 & 3 logged sessions too?" — Test 1 is real session, 2-3 are representative
- [ ] Ch 11 unison line rehearsed (or single-speaker fallback agreed)
- [ ] Ch 11: agreed on whether to drop the adoption real-talk before Q&A
- [ ] Cover slide showing in browser before audience arrives
- [ ] Backup plan if the dev server / browser fails mid-talk (have a screen recording ready as fallback)
- [ ] Q&A answers reviewed once — especially "are you actually using these every day?" (the most likely question)
