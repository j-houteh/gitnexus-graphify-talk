# Speaker Notes — Day Diet

Two-presenter notes for the ~6–7 minute web-video presentation **"Day Diet."**

> The talk was originally announced as *"Token Diet — Stop Burning Cash on AI Dev Tools."* It evolved during development into the workflow-focused **Day Diet** (the "Diet" word preserved as a wordplay bridge — the audience that saw the announcement will still recognize it). Token savings now lives in Ch11 as supporting evidence, not the headline.

Complement to [script.md](script.md) (on-screen text) and
[outline.md](outline.md) (visual plan).

---

## Speaker split — by lane, not by chapter

Both presenters are on stage for every chapter. Lanes are by **content type**, not by chapter block:

| Lane | Who | What they own |
|---|---|---|
| **Technical** | **Speaker A** | On-screen steps, what the audience is seeing, why it matters mechanically, the numbers. Drives the click cadence. |
| **Examples** | **Speaker B** | Live anecdotes, "here's a real time I hit this," analogies, the *human* side of each beat. Color commentary, not narration. |
| **Q&A** | Either | Whoever has direct knowledge takes the question. Default: A handles tooling/mechanics, B handles workflow/team-adoption. |

**Rhythm per chapter:** A walks the steps → B drops one example (or two on the meatier chapters) → click forward.
**Cover (Ch1) and the Q&A holding card (Ch13)** can be driven by either — whoever is closer to the laptop.
**The hinge (Ch5)** and the **adoption-honesty beat (Ch12 step 2)** are the two moments where B leans in heavier — the human framing is the whole point of those slides.

## Format

| Section | What it covers |
|---|---|
| **Tone** | Pacing / energy guidance for this chapter |
| **Step notes** | Per-step talking points beyond what's on screen (Speaker A drives) |
| **Live examples** | Concrete things to share that aren't in the captions (Speaker B drops) |
| **Anticipated Q&A** | Likely audience questions + answer cues |
| **Handoff line** | Exact spoken bridge to the next chapter |

> Numbers in this document come from our own monorepo testing. Treat them
> as load-bearing — round when speaking aloud (60K, 22K, 47K) but the
> specific aggregates (73% / 100% / 80% / 70%) are what we have. Don't
> claim bigger than that.

---

---

# Chapter 1 — Cover

**Tone:** Quiet professionalism. Don't engage the slide. Greet people, set up your mic, drink water. *(No spoken script — the cover holds while the room fills in. Whoever's closest to the laptop clicks when ready.)*
**Budget:** Holds indefinitely. One click to begin.

### What's on the slide

- **Day Diet.** (hero — "Diet." in cyan accent)
- dashed cyan rule
- **day-one ready · lookup not grep · no theory** (tagline, accent color)

### Notes

- **Title wordplay**: the audience was originally invited to "Token Diet." The shared word *Diet* is the bridge — they'll recognize it. *Day* is the new modifier; signals the new framing without making it a different talk.
- If anyone asks "wait, didn't you announce Token Diet?" — *"Same talk, evolved. Token savings is still in there, just not the headline anymore. The headline is what changes in your day."*
- Evergreen — no date, no speaker names. Same slide works for re-runs.
- When ready to begin, whoever's at the laptop clicks once — advances to Ch2 (Intro), where A opens with the on-screen statement.

### Handoff

When ready: click → A opens Ch2 with the on-screen line: **"Claude Code is on every laptop in this room."**

---

# Chapter 2 — Intro

**Tone:** Warm, conversational. You're inviting the room in. Not a pitch yet — just a statement and a frame.
**Budget:** ~25s

### Step notes

**Step 0 — "Claude Code is on every laptop in this room."**
- This is a statement, not a question. Don't soften it. Look around the room as you say it.
- Anchors the talk: this isn't a sales pitch about whether AI coding agents matter — we already use them. The question is whether we use them *well*.
- One-beat pause for the cyan caret to land before clicking next.

**Step 1 — "Your token bill has a quiet leak."**
- The word "quiet" matters. The leak isn't dramatic — it's invisible. That's the framing.
- Most people optimize *prompts*. Almost nobody optimizes *retrieval*. That's the gap.
- The drip animation on the right is doing visual work — let viewers notice it.

**Step 2 — "Here's how to cut it."**
- We're going to show two tools and a routing pattern. The fix is mechanical, not prompt-magic.
- Set expectations: this is a fast talk. You're not going to install anything live.

### Live examples to share

- "Quick show of hands — who's used an AI coding agent this week? Keep your hand up if it ever made you wait while it grep'd around for a function." *(if interactive)*
- Pull from your own work: "I asked Claude to trace a function call chain in our codebase last week. Sixty thousand tokens. For one question."

### Anticipated Q&A

- *"Is this Claude-specific?"* — Mostly applies to any agentic IDE doing grep+read loops (Cursor, Cline, Aider, etc.). Same mechanism, same savings pattern.
- *"Is this about model cost or context-window pressure?"* — Both. Token spend on retrieval costs money AND consumes context budget the model needs for thinking.

### Handoff line

A continues into ch 3: **"Let me show you what the bleeding looks like."** → click

---

# Chapter 3 — The Hidden Tax

**Tone:** Factual, slightly dramatic. The numbers do the work — don't oversell them. Lead with time, not tokens.
**Budget:** ~25s · **3 steps** *(was 5 — collapsed the per-counter reveals into one combined cost slide, dropped the "every session pays again" coda)*

### Step notes

**Step 0 — "One question to your agent."**
- Set scope: this is what a typical exploration-heavy session looks like in our codebase.
- Frame: cost-per-session, not cost-per-day.

**Step 1 — "≈ 2 hours of agent flailing · per session"** (with 25 / 12 / 60K breadcrumb above)
- Lead with the *time*. Don't read the tokens — they're a breadcrumb for credibility, not the headline.
- "Two hours" lands because everyone in the room has felt it. Token counts are abstract; lost mornings aren't.
- Optional aside if the room is engaged: "The token bill is real too — sixty thousand per session. We measured. But the reason we're here is the *time* we're paying for, not the dollars."

**Step 2 — "Not thinking. Looking."**
- The reframe. These tokens (and these hours) are scanning, not reasoning.
- You're paying inference rates for what should be a database query.
- Conceptual seed for the hinge (ch 5).

### Live examples to share

- "If you've ever watched Claude open the same file three times in one conversation — that's what those two hours look like."
- "The expensive part of Claude isn't the math. It's the giant attention layer over the retrieved context."
- "We pulled these numbers from session logs in our own monorepo last week. Not a benchmark — actual work."

### Anticipated Q&A

- *"Is two hours typical or cherry-picked?"* — Round from our observed exploration-heavy sessions in a 1,600-file repo. Bigger repos go higher. Quick refactor sessions might be 30 min.
- *"Where do you get '~2 hours' from 60K tokens?"* — Wall-clock observation, not a token-to-time formula. Sessions with this much retrieval take roughly this long in our work.
- *"What's the dollar number?"* — At Claude Sonnet rates (~$3/M input tokens), 60K ≈ $0.18 per session. Modest per session; meaningful at team scale. Mention only if asked.

### Handoff line

A continues into ch 4: **"Why does this happen every time?"** → click

---

# Chapter 4 — Why Agents Over-Read

**Tone:** Explainer. Walking them through the mechanism. Let the file-tree animation carry the pacing.
**Budget:** ~40s

### Step notes

**Step 0 — "Grep. Read. Grep. Read."**
- Point to the pointer animation. That's the literal behavior.
- Each grep narrows the search space. Each read commits context budget.
- No memory between hops in most setups — the agent doesn't remember it just read this file.

**Step 1 — "READ → context burned. GREP → links missed."**
- "Context burned" = the model's working memory shrinks; conversation quality degrades.
- "Links missed" = grep is text-pattern matching. Decorators, dynamic dispatch, framework registrations don't show up — anything wired up by the framework rather than called by name.

**Step 2 — "So it reads more, just to be sure."**
- This is the spiral. The frantic pointer animation here is intentional.
- Agents are trained to be thorough — that compounds the problem.

**Step 3 — "Reading the book to find the table of contents."**
- The metaphor lands the absurdity. Hold the punch.
- A book has a TOC. Codebases should too.

### Live examples to share

- "Pretend you're Claude in any real codebase. You want to know what calls a function — say, `processOrder`. You grep — 30-plus hits. You read 5 to figure out which are real callers. You miss the one that's wired up through a decorator and never called by name. You grep again."
- "This is also why agents sometimes confidently confabulate call sites — they've grep'd, picked one, and run with it without checking."

### Anticipated Q&A

- *"Doesn't Claude have a built-in code search tool?"* — Yes, but it's still text-based. Same limitation as grep.
- *"What about embeddings / vector search?"* — Helps with semantic similarity, but doesn't give you call chains or execution flows. Different problem.
- *"Could I just give Claude a project map?"* — That's basically what we're about to introduce — but automated and current. Hand-written maps go stale fast.

### Handoff line

A continues into ch 5: **"So here's the question — can we do better?"** → click

---

# Chapter 5 — The Hinge

**Tone:** *Slow down.* This is the talk's pivot. Less energy, more weight. Eye contact (if live) or held silence (if recorded). **B leans in heavier here** — the database / query-planner analogy is exactly the kind of human framing that makes the line stick.
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

### Handoff line

A pauses after the hero quote, lets it land, then nods toward the toolset: **"So how do we pre-compute it?"** → click into Ch6.

Practice the pause. The silence after the quote is load-bearing — don't rush.

---

# Chapter 6 — GitNexus

**Tone:** Technical confidence. We're the tools-people now. Energy up.
**Budget:** ~80s

### Step notes

**Step 0 — "GitNexus / AST → graph → MCP"**
- Open with confidence — own the topic.
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

**Step 5 — "what changes if I touch this?" / "— the day-one question."**
- This is the question every refactor starts with.
- Without a graph: grep, guess, miss.
- With a graph: deterministic.
- The "day-one question" line under it is the *human* version of the same question. Anyone new to our codebase has it on their first PR. Anyone touching a corner they don't know has it. The graph answers it in seconds instead of half a day of "let me ask in Slack."
- Optional verbal beat: "If you remember your first month here, this is the question you wished you could ask without bothering five people."

**Step 6 — "3 hops. Not a grep. A lookup."**
- The blast-radius example — concrete moment from our codebase: in a real session, the agent asked a natural-language question about a feature's flow and went **straight to the right function** without grep'ing first. **Zero greps. Four reads. Seven tool calls total.** Grep would have missed it entirely because the function gets registered through a decorator, not called by name.
- Drop this story aloud during step 6 — it's the most credible single anecdote in the talk. Keep it generic; the *shape* (zero greps, function reached via framework registration) is what matters.

**Step 7 — "Ships as an MCP server. Claude calls it natively."**
- MCP = Model Context Protocol (Anthropic's standard).
- Claude calls GitNexus directly — no shell, no JSON parse overhead.
- Wire-up is a one-line MCP config.

### Live examples to share

- "For context: our codebase has 1,626 files. GitNexus indexed it once into ~23K nodes and ~48K edges. After that, any code question is a graph lookup, not a file scan."
- "If you've used VS Code's 'Find All References' — same idea, but exposed to your AI agent over MCP."
- **The 'zero greps' story** (above) — single most useful anecdote. Drop it on step 6 in your own words; keep it generic ("a real session", "a function registered via decorator").

### Anticipated Q&A

- *"What languages does it support?"* — JavaScript / TypeScript / Python / Go primarily. Check the docs for the current list.
- *"Does it work with monorepos?"* — Yes — that's how we use it. Handles cross-package call chains.
- *"What about dynamic dispatch / decorators?"* — This is where it actually shines vs grep — decorator-registered handlers (any framework hook — DI, events, routes, listeners) get picked up because they're AST-level constructs, not text patterns.
- *"How fresh is the graph?"* — Incremental re-index on file changes. Honest caveat: our index goes stale if you skip the post-checkout hook. Worth wiring it up via `.githooks/post-checkout`.
- *"Is the graph stored locally?"* — Yes. Runs as a local MCP server. Nothing leaves your machine.

### Handoff line

B continues into ch 7: **"But code isn't your whole context."**

---

# Chapter 7 — Graphify

**Tone:** Shift gear. We're past structural. Now we're semantic. Slightly more curious / exploratory energy.
**Budget:** ~80s

### Honest framing (important — read before the talk)

We have Graphify **installed** but haven't run it deeply against our team's docs yet. The chapter sells what it's built to do — and the *capability* is real and well-documented — but our token savings from Graphify are qualitative ("felt faster, felt more focused") not measured.

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

**Step 7 — "what calls this?" / "why does this exist?" (contrast card)**
- Side-by-side framing prepares ch 8.
- "What" vs "Why" — different question types, different graphs.
- The new asides on each card translate the contrast into felt human pain:
  - **GitNexus side — "for code you've just opened"**: name onboarding explicitly. Anyone joining the team, switching projects, or touching a new module lives in this question. The graph cuts that "where am I" feeling from hours to minutes.
  - **Graphify side — "for code you've inherited"**: name legacy code explicitly. The codebase contains decisions people made years ago — sometimes by people who've left. The "why does this exist" question is where complexity *feels* heaviest, and where graphify earns its keep.
- This is also the slide where the audience starts to see the four pain points we live with — token bleed, onboarding cost, complexity drag — all collapsing into the same answer.

### Live examples to share

- "Think about how much of your engineering context is *not* in the code. Architecture docs, design notes, Slack threads, whiteboard photos. Graphify reads all of it and links them."
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

**Tone:** Synthesis. Pulling the two together. Calm, confident. **B's analogy moment** — Postgres planner / `ANALYZE` is the killer human framing.
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

### Handoff line

After "your agent asks → the graph returns → no file reads," A clicks into Ch10 with: **"Here's what changes."**

---

# Chapter 10 — How the Day Changes

**Tone:** Concrete, grounded. Three small day-in-the-life stories. Not theory. **This is B's heaviest chapter** — A reads the scenario labels and "tool → answer" lines (technical), B drops the personal anecdote on each scenario (where examples live).
**Budget:** ~45s · **3 steps · the new heart of the talk**

> Ch10 replaced an earlier setup-style chapter. **This is now the chapter that actually motivates adoption** — the receipts (Ch11) prove it numerically, but this is where audience members recognize *their own week* on screen. The receipts only work after this lands.

### Step notes

**Step 0 — "Onboarding · You just opened a module you've never touched · 'what does this module do?' → GRAPHIFY → cluster + summary. Half a day → ninety seconds."**
- Reach for a real recent example: someone who joined recently, or a corner of the codebase one of you doesn't know.
- Frame: "before graphify, this was a half-day of reading and asking. With graphify, it's a single query."
- Don't oversell — say "you still verify the summary." The point is *first move*, not *only move*.

**Step 1 — "Refactor · You're about to change a function · 'what depends on this?' → GITNEXUS → every caller, before the diff. No silent breaks."**
- Most relatable scenario for senior engineers. Everyone has shipped a change that broke something unexpected.
- "Before the diff" is the load-bearing phrase — gitnexus catches the surprise before it ships, not after.
- Anchor: "the 'function registered via decorator' case from Ch6 — that's the one grep misses."

**Step 2 — "Debugging · A value is wrong and you can't see why · 'where does this come from?' → GITNEXUS → walk the execution flow from input to output."**
- Hardest pain point to talk about because everyone has been here. Quiet acknowledgement in tone.
- Execution-flow tracing is what GitNexus uniquely does. Grep can find string matches; only the graph walks the chain.

### Live examples to share

- "If you came here hoping these tools would write code for you — they don't. They tell you *what your code already does*, fast. That's the gap they fill."
- "Of the three scenarios on this slide, the one I personally hit most often is [pick one]. That's the one I'd encourage you to try the tools on first."

### Anticipated Q&A

- *"What about scenarios that aren't on this slide?"* — These are the most common. Anything else: try it, see if a graph answers it faster than grep + read. If yes, that's a workflow worth keeping.
- *"Can these replace pair programming for onboarding?"* — No. They make pair sessions shorter and sharper. People still understand context better than tools do.

### Handoff line

A pivots into Ch11: **"Want to see the numbers behind it?"** → click.

---

# Chapter 11 — The Receipts

**Tone:** Factual, fast. The numbers are *evidence*, not the headline — keep moving. **A drives all three steps** (technical / numbers lane). B stays quiet unless a hand goes up or a follow-up anecdote naturally lands after the hero.
**Budget:** ~25s · **3 steps** *(was 8 — collapsed per-test breakdown into one aggregate slide, hero now leads with time)*

> **Strategic note:** This chapter used to be the talk's climax. It isn't anymore — Ch10 (day-changes) does that job. Ch11 is now the *credibility anchor*: "yes, the time-savings we just claimed in Ch10 are real, here's the numbers." Don't dwell. Three slides, ~25 seconds, move on.

### Honest framing

The aggregate numbers (55 → 15 tool calls; 18 → 0 greps; 35 → 7 reads; ≈ 2hr → ≈ 30min) come from session logs we ran in our monorepo. The wall-clock time figures are observational, not stopwatched. If pressed in Q&A: "Tool call counts and read counts are logged. The 2hr / 30min are wall-clock estimates from how those sessions actually played out — not a benchmark we'd publish as exact." Honest beats flashy.

### Step notes

**Step 0 — "Three queries. Same codebase. Real numbers."**
- One beat to set frame: same codebase, same model, same task — only difference is the graphs.

**Step 1 — Aggregate: 55 → 15 tool calls (73%) · 18 → 0 greps (100%) · 35 → 7 reads (80%)**
- Read the three rows fast and even. Don't dwell on the individual percentages — let the audience absorb the shape.
- Honesty aside (drop if anyone in the room looks skeptical): "Test One — finding callers of a function — is from a real logged session. Test Two and Three are representative of similar queries we've watched. We didn't run a clean A/B for each; we're being honest about what we measured."

**Step 2 — The hero: ≈ 2 hr → ≈ 30 min (75% faster, 70% lighter on the bill)**
- "Two hours of agent flailing — became thirty minutes of grounded answers."
- *(pause — let it sit)*
- "Seventy-five percent of your time back. Seventy percent off the bill, as a side benefit."
- Lead with the time. The dollar number is the *and*, not the *because*.

### Live examples to share

- "Test One — finding callers — is from an actual session log. The others are shaped from similar queries we've observed. Honest framing."
- "Two hours to thirty minutes per session is the part that compounds — multiply across sessions per day per engineer."

### Anticipated Q&A

- *"Does this scale to bigger codebases?"* — Yes, with longer initial index time. The per-query savings scale *up* with codebase size — bigger repos have more file-read pain to eliminate.
- *"What if my codebase changes constantly?"* — Incremental re-index. Wire up a post-checkout git hook so the graph stays fresh.
- *"Is the 75% time saving consistent or cherry-picked?"* — Average across structural queries we've measured. Greenfield code-writing won't see this saving. Refactoring, debugging, exploration — yes.
- *"How did you get '2 hours' vs '30 minutes'?"* — Wall-clock observation, not stopwatched. Sessions with this much retrieval take roughly this long in our work.

### Handoff line

Either speaker, into Ch12: **"So — what changes for us, now that we know?"**

---

# Chapter 12 — Closing

**Tone:** Wrap. The adoption-honesty beat (step 2) is the *most honest moment of the talk* — slow down for it. **B leads the slogan call-and-response and the adoption-honesty add-on** (this is the chapter where the human framing has the most weight). A handles the strikethrough animation timing + final outro click.
**Budget:** ~25s · **4 steps** *(was 3 — promoted the adoption-honesty card from optional drop to a required on-screen beat)*

### Step notes

**Step 0 — "Index once. Reuse forever."**
- Read it straight.
- Echo of the Ch5 hinge ("pre-computable asset"). Closes the loop.

**Step 1 — "Pay tokens for thinking. / Stop paying them for finding."**
- B leads the call-and-response: *"Pay tokens for thinking."* (pause) *"Stop paying them for finding."*
- *(strikethrough animates on "finding")*

**Step 2 — "We have the graph. / We just don't ask it yet."** *(new — adoption honesty, now on-screen)*
- The slide does the work — *don't* paraphrase. Let it land.
- B leans in (this is the human-framing moment): "One real-talk before we wrap. Getting these tools installed is the easy half. Reaching for them every code question — that's the harder half."
- Then read the slide aloud: "We have the graph. We just don't ask it yet."
- This is the most honest moment of the talk. Audiences trust speakers who say the awkward thing instead of papering over it. Practice this line so it lands without sounding rehearsed.
- Optional anecdote (B): name *one* anti-pattern from your own week ("I caught myself grep'ing for `processOrder` yesterday before remembering gitnexus could just tell me. Habits take weeks.")

**Step 3 — "Watch the meter drop."**
- Whoever is closer to the mic. In unison if you can pull it off cleanly; otherwise single-speaker.
- Hold the closing frame. Let the dashed rules complete.

### Handoff line

Either speaker, into Ch13: **"Anything you want to dig into?"** → click → "Questions?" slide

---

# Chapter 13 — Q&A + Developer Guide

**Tone:** Open, generous. The talk is over; the audience is allowed to take it elsewhere. Either presenter drives the click cadence — whoever is closer to the laptop. Both take questions: A on tooling / mechanics, B on workflow / team-adoption.
**Budget:** Step 0 holds during Q&A. Step 1 is the final frame.

### Step notes

**Step 0 — "Questions?"**
- The slide does the work — big "Questions?" with a blinking cyan caret.
- *Don't* fill silence. Wait 5+ seconds before prompting. Audiences need time to formulate.
- If no questions come: prompt with one of the cross-chapter Q&A items below.
- Take turns: A on tooling / mechanics / how-it-works, B on workflow / team-adoption / "how do I actually use this." Whoever has direct experience with the question answers — don't force the lane.

**Step 1 — "Developer Guide" (Notion QR + URL)** *(not "Thanks." — final slide is now a follow-up resource)*
- Click here when you're done with Q&A or want the QR visible while questions continue.
- **What to say** when you click in: *"While we take questions — this QR opens our internal Developer Guide on Notion. Setup, schema, recipes, the things we couldn't fit in 8 minutes. Scan it now, read it later."*
- Don't read the URL aloud — say "scan or click later." Audience can photograph it from any seat.
- The slide replaces the previous "Thanks." outro on purpose. It's an *invitation to go further*, not a sign-off. People remember resources they were handed in the room more than people they were thanked by.
- If your team has a dedicated Slack / Discord channel for the tools, mention it here as well: "And `#ai-finds` is where we share what worked — drop in if you try something."
- Hold the frame until you walk off / cut the recording. Don't return to "Questions?" — the QR is the more useful final image.

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

**Lane convention reminder:** A drives technical / steps / numbers. B drops live examples + analogies + the human-framing beats (Ch5 hinge, Ch8 SQL analogy, Ch10 anecdotes, Ch12 adoption honesty).

- [ ] Both presenters have read this doc end-to-end and agree on the lane split (A = technical, B = examples)
- [ ] Hinge transition (Ch5 → Ch6) rehearsed — that pause is load-bearing
- [ ] Ch6 step 6: rehearsed how to drop the "zero greps" story — a real session where the agent found a function registered via decorator without grep'ing first (7 tool calls total, 0 greps, 4 reads). **B owns this anecdote.**
- [ ] Ch7 step 7: agreed which presenter mentions the two new "for code you've just opened" / "for code you've inherited" asides
- [ ] Ch10 (day-changes): **B has picked one personal anecdote per scenario** (onboarding / refactor / debugging) and rehearsed each as a single-line drop after A reads the tool → answer line
- [ ] Ch11 receipts: A has rehearsed reading the aggregate row + hero in one breath (no alternation needed — only 3 steps)
- [ ] Ch11: agreed on how to answer "are Test 2 & 3 logged sessions too?" — Test 1 is real session, 2-3 are representative
- [ ] Ch12 step 2 (NEW adoption-honesty beat): **B has rehearsed the spoken add-on** ("getting these tools installed is the easy half...") so it lands without sounding rehearsed. The slide text itself is read straight.
- [ ] Ch12 step 3 ("Watch the meter drop.") — agreed on unison vs single-speaker delivery
- [ ] Ch13 final slide: agreed who delivers the verbal lead-in for the Developer Guide QR ("scan it now, read it later")
- [ ] Cover slide showing in browser before audience arrives
- [ ] Backup plan if the dev server / browser fails mid-talk (have a screen recording ready as fallback)
- [ ] Q&A answers reviewed once — especially "are you actually using these every day?" (the most likely question — **B's question**)
