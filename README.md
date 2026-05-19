# Cutting Claude's Token Bill — Talk

An ~8-minute web-video presentation on how GitNexus + Graphify (two MCP-server tools for code intelligence) cut Claude's retrieval token usage by ~74% per query.

Built as a click-driven 16:9 Vite + React + TypeScript "video-like" web presentation. Each click advances one narration beat; each beat owns the whole 1920×1080 stage.

**Live deployment:** *(set once Cloudflare Pages is connected)*

---

## Talk shape

10 chapters · 48 steps · ~8 minutes · `blueprint` theme (deep-navy + cyan, IBM Plex Mono).

| # | Chapter | Steps | What it is |
|---|---|---|---|
| 1 | intro | 3 | Frame the topic |
| 2 | hidden-tax | 5 | The 56,439-token cost of one query |
| 3 | over-read-loop | 4 | Why agents grep + read in spirals |
| 4 | hinge | 2 | *"Structural knowledge is a pre-computable asset, not a runtime expense."* |
| 5 | gitnexus | 8 | AST → graph → MCP. Numbers: 5 repos / 29s / 11,237 nodes |
| 6 | graphify | 8 | Multimodal semantic graph. EXTRACTED / INFERRED / AMBIGUOUS edges |
| 7 | dual-engine | 5 | 70 / 25 / 5 routing — GitNexus, Graphify, grep fallback |
| 8 | setup | 2 | Both ship as MCP servers; ~200 tokens/call saved over CLI |
| 9 | receipts | 8 | The benchmark reveal — 88% fewer tool calls, 74% saved per query |
| 10 | closing | 3 | "Index once. Reuse forever." |

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
