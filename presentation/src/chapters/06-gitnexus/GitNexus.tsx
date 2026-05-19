import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./GitNexus.css";

interface NodeDef {
  id: string;
  x: number;
  y: number;
}
type EdgeDef = [string, string];

const NODES: NodeDef[] = [
  { id: "n1",  x: 120, y: 90 },
  { id: "n2",  x: 360, y: 70 },
  { id: "n3",  x: 600, y: 110 },
  { id: "n4",  x: 840, y: 80 },
  { id: "n5",  x: 100, y: 260 },
  { id: "n6",  x: 290, y: 250 },
  { id: "n7",  x: 520, y: 280 },
  { id: "n8",  x: 760, y: 240 },
  { id: "n9",  x: 970, y: 280 },
  { id: "n10", x: 190, y: 450 },
  { id: "n11", x: 430, y: 470 },
  { id: "n12", x: 670, y: 460 },
  { id: "n13", x: 900, y: 480 },
  { id: "n14", x: 380, y: 620 },
  { id: "n15", x: 720, y: 620 },
];

const EDGES: EdgeDef[] = [
  ["n1", "n5"],  ["n2", "n6"],   ["n3", "n7"],   ["n4", "n8"],
  ["n4", "n9"],  ["n5", "n6"],   ["n6", "n7"],   ["n7", "n8"],
  ["n5", "n10"], ["n6", "n10"],  ["n6", "n11"],  ["n7", "n11"],
  ["n7", "n12"], ["n8", "n12"],  ["n8", "n13"],  ["n9", "n13"],
  ["n10", "n14"],["n11", "n14"], ["n12", "n15"], ["n13", "n15"],
  ["n3", "n6"],  ["n2", "n7"],   ["n14", "n15"],
];

const BLAST_NODES = new Set(["n2", "n6", "n11", "n14"]);
const BLAST_EDGES = new Set(["n2-n6", "n6-n11", "n11-n14"]);

const findNode = (id: string) => NODES.find((n) => n.id === id)!;

function Graph({ stateClass }: { stateClass: string }) {
  return (
    <svg
      className={`gn-graph ${stateClass}`}
      viewBox="0 0 1100 720"
      role="img"
      aria-label="code graph"
    >
      <g className="gn-edges">
        {EDGES.map(([from, to], i) => {
          const f = findNode(from);
          const t = findNode(to);
          const key = `${from}-${to}`;
          const isBlast = BLAST_EDGES.has(key);
          return (
            <line
              key={key}
              x1={f.x}
              y1={f.y}
              x2={t.x}
              y2={t.y}
              className={`gn-edge${isBlast ? " gn-edge-blast" : ""}`}
              style={{ "--i": i } as CSSProperties}
            />
          );
        })}
      </g>
      <g className="gn-nodes">
        {NODES.map((n, i) => (
          <circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r="11"
            className={`gn-node${BLAST_NODES.has(n.id) ? " gn-node-blast" : ""}`}
            style={{ "--i": i } as CSSProperties}
          />
        ))}
      </g>
    </svg>
  );
}

export default function GitNexus({ step }: ChapterStepProps) {
  /* Step 0 — title */
  if (step === 0) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step0">
          <div className="gn-step0-label">Tool 01</div>
          <h2 className="gn-step0-h">GitNexus</h2>
          <div className="gn-step0-tag">
            <span>AST</span>
            <span className="gn-arrow">→</span>
            <span>graph</span>
            <span className="gn-arrow">→</span>
            <span className="gn-em">MCP</span>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — emergence: code → graph */
  if (step === 1) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step1">
          <div className="gn-graph-wrap gn-graph-wrap-1">
            <Graph stateClass="gn-graph-emerge" />
          </div>
          <div className="gn-step1-info">
            <div className="gn-mono-label">Indexed</div>
            <ul className="gn-bullet-list">
              <li>Symbols</li>
              <li>Call chains</li>
              <li>Imports</li>
              <li>Execution flows</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — first counter: 5 repos / 29s */
  if (step === 2) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step-grid">
          <div className="gn-graph-wrap">
            <Graph stateClass="gn-graph-full" />
          </div>
          <div className="gn-counters">
            <div className="gn-counter gn-counter-in">
              <div className="gn-counter-row">
                <span className="hero-num gn-counter-num">1</span>
                <span className="gn-counter-unit">repo</span>
              </div>
              <div className="gn-counter-row">
                <span className="hero-num gn-counter-num">1,626</span>
                <span className="gn-counter-unit">files</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — second counter: nodes / edges */
  if (step === 3) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step-grid">
          <div className="gn-graph-wrap">
            <Graph stateClass="gn-graph-full" />
          </div>
          <div className="gn-counters">
            <div className="gn-counter gn-counter-prev">
              <div className="gn-counter-mini">1 repo · 1,626 files</div>
            </div>
            <div className="gn-counter gn-counter-in">
              <div className="gn-counter-row">
                <span className="hero-num gn-counter-num">22,958</span>
                <span className="gn-counter-unit">nodes</span>
              </div>
              <div className="gn-counter-row">
                <span className="hero-num gn-counter-num">47,780</span>
                <span className="gn-counter-unit">edges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 4 — third counter: execution flows */
  if (step === 4) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step-grid">
          <div className="gn-graph-wrap">
            <Graph stateClass="gn-graph-full gn-graph-pulse" />
          </div>
          <div className="gn-counters">
            <div className="gn-counter gn-counter-prev">
              <div className="gn-counter-mini">1 repo · 1,626 files · 22,958 nodes · 47,780 edges</div>
            </div>
            <div className="gn-counter gn-counter-in gn-counter-hero">
              <span className="hero-num gn-counter-big">254</span>
              <span className="gn-counter-big-unit">execution flows · traced</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 5 — the question */
  if (step === 5) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step-grid">
          <div className="gn-graph-wrap">
            <Graph stateClass="gn-graph-full" />
          </div>
          <div className="gn-question-box">
            <div className="gn-mono-label">The new question</div>
            <div className="gn-question">
              "what changes <br/>
              if I <span className="gn-em">touch this?"</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 6 — blast radius */
  if (step === 6) {
    return (
      <div className="gn-scene scene-pad">
        <div className="gn-step-grid">
          <div className="gn-graph-wrap">
            <Graph stateClass="gn-graph-blast" />
          </div>
          <div className="gn-blast-info">
            <div className="gn-mono-label">Answer</div>
            <div className="gn-blast-h">3 hops.</div>
            <div className="gn-blast-sub">Not a grep. A lookup.</div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 7 — MCP delivery */
  return (
    <div className="gn-scene scene-pad">
      <div className="gn-step7">
        <div className="gn-graph-wrap gn-graph-wrap-shrink">
          <Graph stateClass="gn-graph-full" />
        </div>
        <div className="gn-mcp-line" />
        <div className="gn-mcp-box">
          <div className="gn-mcp-label">MCP server</div>
          <div className="gn-mcp-title">Native to Claude.</div>
          <div className="gn-mcp-sub">No shell. No round-trip.</div>
        </div>
      </div>
    </div>
  );
}
