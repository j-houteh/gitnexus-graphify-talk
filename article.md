# Source Material — GitNexus + Graphify Token Savings

Two-article extract serving as the authoritative source for `script.md` and
the per-chapter info pools in `outline.md`. **Numbers and quotes here are
load-bearing — do not paraphrase them in the script without checking back.**

---

## Source A — ai-chain.tw

URL: https://ai-chain.tw/en/blog/gitnexus-graphify-ai-coding-workflow-guide/

### Problem framing
- AI coding agents lack context when modifying code — they miss
  "dependency, call chain, process flow, and blast radius."
- Teams face a dual challenge: repos constantly change AND contextual
  materials are scattered across PDFs, design docs, videos, whiteboard
  photos.

### GitNexus positioning
- Turns a codebase into "a code intelligence backend that can be shared
  through CLI, MCP, HTTP bridge."
- Engineering-focused capabilities: context mapping, blast radius
  analysis, change detection, graph-assisted renaming.
- Output surface: MCP tools + impact analysis for live code modification.

### Graphify positioning
- Builds a **multimodal graph** from code, documents, images, videos,
  research materials.
- Pipeline: `detect → extract → build_graph → cluster → analyze →
  report → export`.
- Edges labeled **EXTRACTED**, **INFERRED**, or **AMBIGUOUS** for
  transparency about confidence.

### Setup commands
```
npx gitnexus analyze
npx gitnexus setup

uv tool install graphify && graphify install
graphify .
```

### Author's recommended combined workflow
- **Layer 1 (Background)**: Graphify organizes external knowledge into a
  persistent `graph.json`.
- **Layer 2 (Operations)**: GitNexus provides live code structure and
  impact analysis.
- **Question-routing heuristic**: ask Graphify the contextual *"why"*
  questions; ask GitNexus the operational *"what affects this"*
  questions.

---

## Source B — sidharthsatapathy.com

URL: https://www.sidharthsatapathy.com/blog/gitnexus-dual-graph-engine-token-savings/

### Core thesis (the hinge for the talk)
> "Structural knowledge about your codebase is a pre-computable asset,
> not a runtime expense."

### The gap each tool alone leaves
- Graphify alone identifies related services but cannot trace execution
  flows or exact call chains.
- The author's example: changes propagating **3 hops** through
  `agent_tools.py → agent_service.py → agent.py` — invisible to
  grep-based approaches.

### GitNexus indexing benchmarks
- **5 repos analyzed in 29 seconds total.**
- **11,237 nodes**, **23,356 edges**, **659 execution flows** across all
  repos.
- Runs as **MCP server** for native Claude Code integration — no shell
  overhead.

### Test 1 — encryption handling query
| Metric | Normal | GitNexus MCP |
|---|---|---|
| Tool calls | 14 | 2 |
| File reads | 11 | 0 |
| Dependencies found | 30 | 43 |

### Test 2 — blast radius (DocumentsService change)
| Metric | Normal | GitNexus MCP |
|---|---|---|
| Tool calls | ~15 | 2 |
| Execution flows traced | 0 | 9 (with risk ranking) |

### Test 3 — end-to-end document editor flow
| Metric | Normal | GitNexus MCP |
|---|---|---|
| Tool calls | 29 | 3 |
| File reads | 15 | 0 |

### Aggregate across all three queries
- Tool calls: **58 → 7** (**88% reduction**)
- Grep operations: **18 → 0** (**100% elimination**)
- File reads: **35 → 0** (**100% elimination**)

### Single-query token consumption
- Grep+read path: **~13,750 tokens** across 17 tool calls.
- MCP graph path: **~3,500 tokens** across 2 tool calls.
- **Savings: 74% on retrieval.** Whole-session overhead drops from
  56,439 tokens (final figure not stated in source).

### Division of labor (canonical phrasing)
- **GitNexus**: symbol lookups, call chains, blast radius, execution
  flows — structural precision.
- **Graphify**: cross-layer relationships, semantic groupings, memory /
  config graphs — inference-based.
- Neither alone handles both technical structure *and* non-code context.

### Routing heuristic
- GitNexus first for code questions (~70% of queries).
- Graphify for semantic / cross-domain (~25%).
- Grep as fallback (~5%).

### MCP vs CLI savings
- Native MCP tools save **~200 tokens per call** vs CLI invocation
  (eliminating shell overhead and JSON parse round-trip).

### Author's closing analogy
- "Graphify = `ANALYZE` statistics; GitNexus = query planner — one
  provides shape, the other traces actual execution paths."
- Headline takeaway: "Fewer calls, less data per call, and no file reads
  at all."
