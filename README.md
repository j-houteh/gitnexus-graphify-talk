# Day Diet — Talk

A short click-driven web presentation on day-to-day work with GitNexus + Graphify (two MCP-server tools for code intelligence). Three real scenarios — onboarding, refactor, debugging — and what changes when the agent gets eyes into the code graph. ≈ 2 hours of agent flailing becomes ≈ 30 minutes of grounded answers. Token savings is the side effect; the workflow change is the point.

> **History**: this deck was originally announced as *"Token Diet — Stop Burning Cash on AI Dev Tools"* — a cost-savings framing. It evolved during development into the workflow-focused **Day Diet** (the "Diet" word preserved as a wordplay bridge for the announced audience). See [outline.md](outline.md) for the divergence note.

Built as a click-driven 16:9 Vite + React + TypeScript "video-like" web presentation. Each click advances one narration beat; each beat owns the whole 1920×1080 stage.

**Live deployment:** *(set once Cloudflare Pages is connected)*

---

## Talk shape

13 chapters · 48 steps · ~6–7 minutes · `blueprint` theme (deep-navy + cyan, IBM Plex Mono).

| # | Chapter | Steps | What it is |
|---|---|---|---|
| 1 | cover | 1 | Pre-talk hold card |
| 2 | intro | 3 | *"Claude Code is on every laptop in this room."* |
| 3 | hidden-tax | 3 | One question = ~2 hours of agent flailing (60K tokens, as breadcrumb) |
| 4 | over-read-loop | 4 | Why agents grep + read in spirals |
| 5 | hinge | 2 | *"Structural knowledge is a pre-computable asset, not a runtime expense."* |
| 6 | gitnexus | 8 | AST → graph → MCP. Real monorepo numbers + the "day-one question" aside |
| 7 | graphify | 8 | Multimodal semantic graph. EXTRACTED / INFERRED / AMBIGUOUS + "code you've inherited" aside |
| 8 | dual-engine | 5 | 70 / 25 / 5 routing — GitNexus, Graphify, grep fallback |
| 9 | setup | 2 | Both ship as MCP servers; ~200 tokens/call saved over CLI |
| 10 | day-changes | 3 | **How the day changes** — three scenarios: onboarding · refactor · debugging |
| 11 | receipts | 3 | The credibility anchor — ≈ 2hr → ≈ 30min · 75% faster · 70% lighter on the bill |
| 12 | closing | 4 | Slogans + on-screen adoption-honesty: *"We have the graph. We just don't ask it yet."* |
| 13 | qa-thanks | 2 | Questions hold + Developer Guide QR (Notion follow-up resource) |

---

## Run locally

```bash
cd presentation
npm install
npm run dev      # http://localhost:5174
```

**Navigation:**
- Click anywhere on the stage to advance one step
- `←` / `→` arrow keys also work
- Hover the bottom edge to reveal the progress bar
- `?auto=1` URL flag → autoplay mode (press SPACE to start)
- `?audio=1` URL flag → audio plays per step but manual advance (no audio shipped yet)

---

## Build for production

```bash
cd presentation
npm run build    # outputs presentation/dist/
```

For Cloudflare Pages: point the build at `presentation/` as the root directory, `npm run build` as the build command, `dist` as the output directory.

---

## Project layout

```
.
├── article.md          # source extract from the two reference posts (load-bearing numbers)
├── script.md           # on-screen / voiceover text (1 beat per `---` separator)
├── outline.md          # production plan — per-step screen content + info pools
├── speaker-notes.md    # what to say live (talking points, examples, Q&A, handoffs)
└── presentation/       # the Vite + React + TS app
    └── src/chapters/   # one folder per chapter (Component.tsx + Component.css + narrations.ts)
```

`narrations.ts` in each chapter folder is the single source of truth for step count and (if audio is synthesized) per-step audio.

---

## Sources

The benchmark numbers and the central insight come from two posts:

- [GitNexus + Graphify AI coding workflow guide](https://ai-chain.tw/en/blog/gitnexus-graphify-ai-coding-workflow-guide/) — positioning, pipeline, setup commands
- [GitNexus dual graph engine — token savings](https://www.sidharthsatapathy.com/blog/gitnexus-dual-graph-engine-token-savings/) — *all* benchmark numbers, the "pre-computable asset" framing

`article.md` in this repo carries the verbatim extracts in case the originals move.

---

## Skill credit

Built using the [`web-video-presentation`](https://github.com/ConardLi/garden-skills/tree/main/skills/web-video-presentation) agent skill — a methodology + Vite scaffold for click-driven 16:9 web presentations.
