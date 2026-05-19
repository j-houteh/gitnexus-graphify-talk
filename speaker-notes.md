# Speaker Notes — Cutting Claude's Token Bill

Two-presenter notes for the 8-minute web-video presentation.
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

> Numbers in this document are load-bearing. Don't paraphrase the
> benchmark figures (56,439 / 88% / 13,750 → 3,500). Everything else
> can be in your own words.

---

## Split summary

| Chapters | Speaker | Block |
|---|---|---|
| 1 · 2 · 3 · 4 | **A** | The problem |
| 5 · 6 · 7 · 8 | **B** | The solution |
| 9 · 10 | **Both** (tag-team) | The proof + the close |

Natural handoffs: A → B at the end of **ch 4** (the hinge), then both
share the stage from **ch 9** onward.

---

---

# Chapter 1 — Intro

**Speaker:** A
**Tone:** Warm, conversational. You're inviting the room in. Not a pitch yet — just a question and a frame.
**Budget:** ~25s

### Step notes

**Step 0 — "Using Claude Code for serious work?"**
- Acknowledge the room. Most engineers in the room will be using Claude or a similar agent daily.
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
- Pull a personal anecdote: "I asked Claude to find one specific function in our codebase last Tuesday. Cost me 56K tokens. That's a small book worth of context — to find one function."

### Anticipated Q&A

- *"Is this Claude-specific?"* — Mostly applies to any agentic IDE doing grep+read loops (Cursor, Cline, Aider, etc.). Same mechanism, same savings pattern.
- *"Is this about model cost or context-window pressure?"* — Both. Token spend on retrieval costs $ AND consumes context budget that the model needs for thinking.

### Handoff line

A continues into ch 2: **"Let me show you what the bleeding looks like."** → click

---

# Chapter 2 — The Hidden Tax

**Speaker:** A
**Tone:** Factual, slightly dramatic. The numbers do the work — don't oversell them. Pause after the big one.
**Budget:** ~45s

### Step notes

**Step 0 — "One question to your agent."**
- Set scope: this is ONE user-facing query, not a full session.
- Frame: cost-per-question, not cost-per-day.

**Step 1 — "29 tool calls · 15 file reads"**
- Pause here. Let the digits register.
- "Tool call" ≈ the agent invoking grep, read, or another search. 29 of them.
- "File read" = full file contents loaded into the agent's context.

**Step 2 — "56,439 tokens · one session"**
- *This is THE pain number.* Hold longer than feels comfortable.
- Translation cue: at current Claude rates, this is roughly $X per query. *(check current pricing before talk)*
- 100 such queries / day per dev × 10 devs × 250 days = a real budget line.

**Step 3 — "Not thinking. Looking."**
- The reframe. These tokens are scanning, not reasoning.
- You're paying inference rates for what should be a database query.
- Conceptual seed for the hinge (ch 4).

**Step 4 — "Every session pays again."**
- Stateless retrieval. No persistent index between sessions.
- New conversation = redo all the looking.

### Live examples to share

- "If you've ever watched Claude open the same file three times in one conversation — that's what we're paying for."
- "The expensive part of GPT-4 / Claude isn't the math. It's the giant attention layer over your retrieved context."

### Anticipated Q&A

- *"Is 56K typical or cherry-picked?"* — Sidharth's benchmark on a real codebase. Not the worst case. Larger repos go higher.
- *"Couldn't I just use a smaller model for retrieval?"* — Different problem. The retrieval *mechanism* (grep+read) is wrong for structured data, no matter the model size.
- *"What's the dollar number?"* — At ~$3/M input tokens (Sonnet rate), 56K = $0.17 per query. Not huge per query; meaningful at team scale + compounded with output tokens.

### Handoff line

A continues into ch 3: **"Why does this happen every time?"** → click

---

# Chapter 3 — Why Agents Over-Read

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
- "Links missed" = grep is text-pattern matching. Decorators, dynamic dispatch, framework conventions don't show up.

**Step 2 — "So it reads more, just to be sure."**
- This is the spiral. The frantic pointer animation here is intentional.
- Agents are trained to be thorough — that compounds the problem.
- It's not bad design; it's the *only* design when you don't have structural information.

**Step 3 — "Reading the book to find the table of contents."**
- The metaphor lands the absurdity. Hold the punch.
- A book has a TOC. Codebases should too.

### Live examples to share

- "Pretend you're Claude. You want to know what calls function `processOrder`. You grep — get 50 hits. You read 5 to find the real callers. You miss the one that imports it as `*` and calls it dynamically. You grep again. Etc."
- "This is also why agents sometimes confidently confabulate call sites — they've grep'd, picked one, and run with it without checking."

### Anticipated Q&A

- *"Doesn't Claude have a built-in code search tool?"* — Yes, but it's still text-based. Same limitation as grep.
- *"What about embeddings / vector search?"* — Helps with semantic similarity, but doesn't give you call chains or execution flows. Different problem.
- *"Could I just give Claude a project map?"* — That's basically what we're about to introduce — but automated and current. Hand-written maps go stale fast.

### Handoff line

A continues into ch 4: **"So here's the question — can we do better?"** → click

---

# Chapter 4 — The Hinge

**Speaker:** A
**Tone:** *Slow down.* This is the talk's pivot. Less energy, more weight. Eye contact (if live) or held silence (if recorded).
**Budget:** ~30s

### Step notes

**Step 0 — "Here's the flip."**
- Let the dashed rule grow underneath while you pause.
- Don't rush into the next line. The pause sells it.

**Step 1 — the hero quote**
- *Read it slowly. Verbatim.* Don't paraphrase.
- > "Structural knowledge about your codebase is a pre-computable asset, not a runtime expense."
- Two phrases carry the whole insight:
  - **"pre-computable asset"** — you do it once, ahead of time
  - **"runtime expense"** — you pay for it every query
- Credit Sidharth Satapathy (the post linked in `article.md` source B).

### Live examples to share

- "Think about databases. You don't grep your tables every query — you build an index once, then query it. Same idea, applied to code."
- "The reason we don't do this for code today is that *until recently* there wasn't a good standard for an AST-driven graph that agents could query. MCP changed that."

### Anticipated Q&A

- *"Who said this?"* — Sidharth Satapathy. The full post is in our references. Worth citing on screen if asked. *(or link from a slide)*
- *"Why hasn't this been standard for years?"* — IDEs do it locally (call hierarchy in your IDE, etc.). The shift is making it *available to LLM agents* via MCP.

### Handoff line — **A to B**

A pauses, then nods to B: **"So how do we pre-compute it? [B steps forward]"**

This is the speaker handoff. Practice it — eye contact between speakers, half-second pause, then B's energy picks up.

---

# Chapter 5 — GitNexus

**Speaker:** B
**Tone:** Technical confidence. You're the tools person now. Energy up.
**Budget:** ~80s

### Step notes

**Step 0 — "GitNexus / AST → graph → MCP"**
- Speaker B's opener — own the topic.
- GitNexus is open source. Installable in a minute.
- The three-word pipeline (AST → graph → MCP) IS the entire architecture. Don't over-explain.

**Step 1 — "Symbols, calls, imports, execution flows — all indexed"**
- These are AST-level objects, not text patterns.
- "Execution flows" is the killer feature — it chains calls across files. *Static* — no need to run the code.

**Steps 2 / 3 / 4 — the numbers**
- Read them like a runway show. Pause between each.
- "Five repos. Twenty-nine seconds." — *that* is what "pre-computable asset" looks like.
- "Eleven thousand nodes. Twenty-three thousand edges." — note edges > nodes (2:1) = highly interconnected = the kind of repo grep struggles with.
- "Six hundred and fifty-nine execution flows — traced and ready." — your call graph is *already done* before you ask.

**Step 5 — "what changes if I touch this?"**
- This is the question every refactor starts with.
- Without a graph: grep, guess, miss.
- With a graph: deterministic.

**Step 6 — "3 hops. Not a grep. A lookup."**
- The blast radius example: agent_tools.py → 3 hops to user-visible code.
- Without GitNexus, grep would miss this chain entirely.

**Step 7 — "Ships as an MCP server. Claude calls it natively."**
- MCP = Model Context Protocol (Anthropic's standard).
- Claude calls GitNexus directly — no shell, no JSON parse overhead.
- Wire-up is a one-line MCP config.

### Live examples to share

- "For context: a typical commercial Next.js app might have 3-5K nodes. So this is 5 of those, indexed in half a minute."
- "I ran it on our own repo last week. Took 14 seconds. Hasn't been wrong on a call-chain query yet."
- "If you've ever used VS Code's 'Find All References' — same idea, but exposed to your AI agent over MCP."

### Anticipated Q&A

- *"What languages does it support?"* — JavaScript / TypeScript / Python / Go primarily. Check the docs for the current list.
- *"Does it work with monorepos?"* — Yes. Their benchmark indexed 5 repos at once.
- *"What about dynamic dispatch / reflection?"* — Better than grep, but not perfect. Traces what it can resolve statically; gracefully degrades on dynamic.
- *"How fresh is the graph?"* — Incremental re-index on file changes. Fast.
- *"Is the graph stored locally?"* — Yes. Runs as a local MCP server. Nothing leaves your machine.

### Handoff line

B continues into ch 6: **"But code isn't your whole context."**

---

# Chapter 6 — Graphify

**Speaker:** B
**Tone:** Shift gear. We're past structural. Now we're semantic. Slightly more curious / exploratory energy.
**Budget:** ~80s

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
- Side-by-side framing prepares ch 7.
- "What" vs "Why" — different question types, different graphs.

### Live examples to share

- "Think about how much of your engineering context is *not* in the code. ADRs, Slack threads, Notion pages, whiteboard photos. Graphify reads all of it and links them."
- "When I show this slide to skeptics, the EXTRACTED/INFERRED/AMBIGUOUS slide is what convinces them. Most AI tools say 'I think X.' Graphify says 'I extracted X, inferred Y based on context, and I'm not sure about Z — go look.'"

### Anticipated Q&A

- *"Doesn't this become a privacy issue?"* — Runs locally. Nothing leaves your machine.
- *"What's the false-positive rate on INFERRED edges?"* — Varies by input. The point isn't perfection; it's *transparency*. You see what the model thought and can audit it.
- *"How does it handle whiteboard photos?"* — Image recognition + diagram structure inference. Best with clean handwriting / structured diagrams.
- *"Can I add my own modality?"* — Yes, the pipeline is extensible. Check the docs.

### Handoff line

B continues into ch 7: **"So you don't pick one. You use both."**

---

# Chapter 7 — The Dual Engine

**Speaker:** B
**Tone:** Synthesis. Pulling the two together. Calm, confident.
**Budget:** ~50s

### Step notes

**Step 0 — "You don't pick one. You route to the right one."**
- Routing is automatic — the agent does it. You don't think about it once it's set up.

**Steps 1-3 — the 70 / 25 / 5 split**
- These are Sidharth's measured workload distribution on real queries.
- Your numbers may shift, but the order is stable: structural questions dominate.
- The 5% grep fallback is honest — there are still cases (free-text searches, finding TODOs, etc.) where grep is fine.

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

B continues into ch 8: **"Setup is — honestly — embarrassingly small."**

---

# Chapter 8 — Setup

**Speaker:** B
**Tone:** Low-key reassurance. "It's easier than you'd expect." Don't dwell.
**Budget:** ~25s

### Step notes

**Step 0 — "Both tools ship as MCP servers."**
- *Don't* read commands aloud — we deliberately removed them.
- The actual install lives in each tool's README. Link slide at the end if you want.
- "If you've added an MCP server before, this is the same exercise."

**Step 1 — MCP > CLI ledger + dev-loop diagram**
- "MCP over CLI saves about two hundred tokens per call."
- The 200 number = per CLI invocation overhead (shell startup + JSON parsing).
- With dozens of tool calls per query, this adds up.
- Then the dev loop: agent → graph → answer. **No file reads in the agent's context.**

### Live examples to share

- "We removed the install steps from this slide on purpose. They vary by OS and they're in the docs. What matters is that it's MCP — same plumbing you already know."
- "Once it's wired in, you don't think about it. It's just there."

### Anticipated Q&A

- *"What about HTTP bridges?"* — Available. MCP is preferred (cheapest), CLI works, HTTP for legacy / remote setups.
- *"Where do I find the install steps?"* — GitNexus and Graphify both have READMEs on GitHub with platform-specific instructions.
- *"Do I need both tools, or can I start with one?"* — Start with GitNexus (covers ~70% of queries). Add Graphify when you want cross-document semantic linking.

### Handoff line — **B to (A + B together)**

B looks toward A: **"OK — proof time."**

This is the second speaker transition. Both speakers now share the stage for ch 9-10.

---

# Chapter 9 — The Receipts *(tag-team)*

**Speakers:** Both. A reads benchmark numbers; B punctuates / adds context. Alternate naturally — see step-by-step assignments below.
**Tone:** Factual but punchy. The numbers are the win — let them land.
**Budget:** ~90s · **the climax chapter**

### Step notes

**Step 0 — "Three queries. Same codebase. Real numbers."**
- **A** reads it. B nods.
- Set frame: same codebase, same model, same task. Only difference is whether the graphs are wired in.

**Step 1 — Test 1: encryption handling**
- **A:** "Test one. Encryption handling. Fourteen tool calls became two."
- **B:** "Eleven file reads became zero. And it found *more* dependencies."
- **Both:** "Forty-three versus thirty."
- *Talking point:* "More accurate AND fewer reads. Usually you trade off. Here you don't."

**Step 2 — Test 2: blast radius**
- **B:** "Test two. Blast radius on DocumentsService. Fifteen calls became two."
- **A:** "Zero execution flows traced — became nine. With risk ranking."
- *Talking point:* "Risk ranking = GitNexus orders the affected flows by hop count and file criticality."

**Step 3 — Test 3: end-to-end editor flow**
- **A:** "Test three. End-to-end document editor flow. Twenty-nine tool calls became three."
- **B:** "Fifteen file reads became zero."

**Step 4 — Aggregate tool calls 58 → 7**
- **B:** "Aggregate. Fifty-eight tool calls collapsed to seven."
- **A** (after the stamp lands): "**Eighty-eight percent fewer.**"

**Step 5 — Aggregate grep 18 → 0**
- **A:** "Eighteen grep operations — gone."
- **B:** "One hundred percent."

**Step 6 — Aggregate reads 35 → 0**
- **B:** "Thirty-five file reads — gone."
- **A:** "One hundred percent."

**Step 7 — The hero token reveal**
- **A** (*slowly*): "And the headline number — retrieval tokens for one query."
- **A:** "Thirteen thousand seven hundred and fifty."
- *(brief pause — let the "before" number sit)*
- **B:** "Down to **three thousand five hundred**."
- **A:** "Seventy-four percent saved. Per query."

### Live examples to share

- "Tests aren't synthetic. Sidharth ran real queries on his own production codebase. Source is in our references."
- "The 'found more dependencies' line on test 1 is the part I keep coming back to. Cheaper *and* better is rare."
- "Multiply '74% per query' by however many queries your team makes per day. That's the real win."

### Anticipated Q&A

- *"Does this scale to bigger codebases?"* — Yes, with longer initial index time. The per-query savings scale with codebase size — bigger repos have more file-read pain to eliminate.
- *"What if my codebase changes constantly?"* — Incremental re-index. Fast.
- *"Per query × queries per session = the session savings?"* — Exactly. The original 56K session number drops proportionally. That's why we opened with it.
- *"Is this peer-reviewed / independently verified?"* — Sidharth's benchmarks. We're sharing his methodology so you can replicate.

### Handoff line

Either speaker, into ch 10: **"So what does that mean for you?"**

---

# Chapter 10 — Closing *(tag-team)*

**Speakers:** Both. Alternating slogans. Joint outro.
**Tone:** Wrap. Let the strikethrough do the work. Don't add anything new.
**Budget:** ~20s

### Step notes

**Step 0 — "Index once. Reuse forever."**
- **A** reads it.
- Echo of the chapter 4 hinge ("pre-computable asset"). Closes the loop.

**Step 1 — "Pay tokens for thinking. / Stop paying them for finding."**
- **B:** "Pay tokens for thinking."
- **A:** "Stop paying them for finding."
- *(strikethrough animates on "finding")*

**Step 2 — "Watch the meter drop."**
- **Both, in unison if you can pull it off.** Otherwise B leads, A echoes faintly.
- Hold the closing frame. Let the dashed rules complete.

### After the talk

- Don't put up a CTA slide. The room knows where to find the tools.
- If there's Q&A, the most likely topics are: language support, codebase size, install steps. Notes above cover all three.

### Handoff line

End of talk. Open for Q&A or close.

---

---

# Appendix — Cross-chapter Q&A

Questions that don't belong to any single chapter:

### Cost / pricing

- *"What's the actual dollar saving?"* — At Claude Sonnet rates (~$3/M input tokens), 74% on retrieval × 100 queries/day × a 10-person team ≈ $XX/day saved. Compute live if asked. The bigger win is context-window space freed for actual reasoning.

### Comparison to other tools

- *"How does this compare to Cursor's codebase indexing?"* — Different model. Cursor builds an embedding index for semantic search; GitNexus builds a structural AST graph for exact lookups. Complementary, not competitive.
- *"What about Sourcegraph / similar?"* — Sourcegraph is server-side, web-facing. GitNexus is local, MCP-facing. Different deployment, similar conceptual ancestry.
- *"What about Aider / Cline / Continue?"* — These are agent frontends. GitNexus / Graphify are tools the *agent* uses. Compose with any of them via MCP.

### Adoption / risk

- *"How long to roll out across a team?"* — Per-developer install in <5 min. Team-wide adoption depends on your MCP-distribution story (some teams ship configs via dotfiles, etc.).
- *"What if it has a bug / breaks?"* — Falls back to grep. Worst case is what you have today.
- *"Is it actively maintained?"* — Open source. Check the repo activity before adopting. Same diligence as any tool.

### Audience-specific framings

If asked who this is for:
- **Solo devs** — Marginal win per query, big win on focus (no more agent flailing).
- **Small teams** — Compounding savings + better refactor confidence.
- **Large orgs** — Real dollar line on the AI-tooling budget. Worth the MCP setup work.

---

# Pre-talk checklist

- [ ] Both speakers have read this doc end-to-end
- [ ] Hinge transition (ch 4 → ch 5) rehearsed — that pause is load-bearing
- [ ] Ch 9 alternation rehearsed — practice who reads which line
- [ ] Ch 10 unison line rehearsed (or single-speaker fallback agreed)
- [ ] Current Claude pricing checked for the dollar-translation answer in ch 2 Q&A
- [ ] Backup plan if the dev server / browser fails mid-talk (have a screen recording ready as fallback)
- [ ] Q&A answers reviewed once — especially the language-support, codebase-size, and install-steps questions (most asked)
