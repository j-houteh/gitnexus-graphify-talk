import type { ChapterStepProps } from "../../registry/types";
import "./Receipts.css";

interface Aggregate {
  label: string;
  before: string;
  after: string;
  pct: string;
}
const AGGREGATES: Aggregate[] = [
  { label: "tool calls",      before: "55", after: "15", pct: "73%" },
  { label: "grep operations", before: "18", after: "0",  pct: "100%" },
  { label: "file reads",      before: "35", after: "7",  pct: "80%" },
];

function AggregateRow({ agg, state }: { agg: Aggregate; state: "active" | "prev" }) {
  return (
    <div className={`rc-agg rc-agg-${state}`}>
      <div className="rc-agg-label">{agg.label}</div>
      <div className="rc-agg-flow">
        <span className="rc-agg-before">{agg.before}</span>
        <span className="rc-agg-arrow">→</span>
        <span className="rc-agg-after">{agg.after}</span>
      </div>
      <div className="rc-agg-stamp">{agg.pct}</div>
    </div>
  );
}

export default function Receipts({ step }: ChapterStepProps) {
  /* Step 0 — title */
  if (step === 0) {
    return (
      <div className="rc-scene scene-pad">
        <div className="rc-step0">
          <div className="rc-step0-label">The receipts</div>
          <h2 className="rc-step0-h">
            Three queries.
            <br />
            Same codebase.
            <br />
            <span className="rc-em">Real numbers.</span>
          </h2>
        </div>
      </div>
    );
  }

  /* Step 1 — aggregates: all three at once */
  if (step === 1) {
    return (
      <div className="rc-scene scene-pad">
        <div className="rc-aggregate">
          <div className="rc-table-head">
            <span className="rc-th rc-th-id">Aggregate · all three queries</span>
          </div>
          {AGGREGATES.map((a) => (
            <AggregateRow key={a.label} agg={a} state="active" />
          ))}
        </div>
      </div>
    );
  }

  /* Step 2 — hero: tokens AND time saved */
  return (
    <div className="rc-scene scene-pad">
      <div className="rc-step7">
        <div className="rc-mini-row">
          <span className="rc-mini">tool calls: 55 → 15</span>
          <span className="rc-mini-sep">·</span>
          <span className="rc-mini">greps: 18 → 0</span>
          <span className="rc-mini-sep">·</span>
          <span className="rc-mini">reads: 35 → 7</span>
        </div>
        <div className="rc-token-row">
          <div className="rc-token-side rc-token-before">
            <div className="rc-token-cap">≈ time · per session</div>
            <div className="hero-num rc-token-num">2 hr</div>
            <div className="rc-token-tag">grep + read path</div>
          </div>
          <div className="rc-token-arrow">→</div>
          <div className="rc-token-side rc-token-after">
            <div className="rc-token-cap">≈ time · per session</div>
            <div className="hero-num rc-token-num rc-token-num-accent">30 min</div>
            <div className="rc-token-tag">MCP graph path</div>
          </div>
        </div>
        <div className="rc-token-stamp">75% faster — and 70% lighter on the bill.</div>
      </div>
    </div>
  );
}
