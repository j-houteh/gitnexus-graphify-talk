import type { ChapterStepProps } from "../../registry/types";
import "./Receipts.css";

interface Metric {
  label: string;
  before: string;
  after: string;
}
interface Test {
  id: string;
  label: string;
  metrics: Metric[];
  bonus?: string;
}

const TESTS: Test[] = [
  {
    id: "01",
    label: "find every caller of this function",
    metrics: [
      { label: "tool calls", before: "18", after: "7" },
      { label: "file reads", before: "11", after: "4" },
    ],
    bonus: "found a caller grep would have missed",
  },
  {
    id: "02",
    label: "trace this request end-to-end",
    metrics: [
      { label: "tool calls", before: "22", after: "5" },
      { label: "file reads", before: "14", after: "3" },
    ],
    bonus: "full chain · request to response · in one query",
  },
  {
    id: "03",
    label: "what depends on this data model",
    metrics: [
      { label: "tool calls", before: "15", after: "3" },
      { label: "file reads", before: "10", after: "0" },
    ],
    bonus: "11 dependencies surfaced · ranked by risk",
  },
];

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

function MetricCell({ m }: { m: Metric }) {
  return (
    <div className="rc-metric">
      <div className="rc-metric-label">{m.label}</div>
      <div className="rc-metric-pair">
        <span className="rc-metric-before">{m.before}</span>
        <span className="rc-metric-arrow">→</span>
        <span className="rc-metric-after">{m.after}</span>
      </div>
    </div>
  );
}

function TestRow({ test, state }: { test: Test; state: "active" | "prev" | "hidden" }) {
  if (state === "hidden") return null;
  return (
    <div className={`rc-test rc-test-${state}`}>
      <div className="rc-test-id">{test.id}</div>
      <div className="rc-test-body">
        <div className="rc-test-label">{test.label}</div>
        <div className="rc-test-metrics">
          {test.metrics.map((m, i) => (
            <MetricCell key={i} m={m} />
          ))}
        </div>
        {test.bonus && <div className="rc-test-bonus">{test.bonus}</div>}
      </div>
    </div>
  );
}

function AggregateRow({ agg, state }: { agg: Aggregate; state: "active" | "prev" | "hidden" }) {
  if (state === "hidden") return null;
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

  /* Steps 1-3 — test rows building */
  if (step >= 1 && step <= 3) {
    const activeIdx = step - 1;
    return (
      <div className="rc-scene scene-pad">
        <div className="rc-table">
          <div className="rc-table-head">
            <span className="rc-th rc-th-id">TEST</span>
            <span className="rc-th rc-th-body">METRICS · NORMAL → MCP</span>
          </div>
          {TESTS.map((t, i) => (
            <TestRow
              key={t.id}
              test={t}
              state={i === activeIdx ? "active" : i < activeIdx ? "prev" : "hidden"}
            />
          ))}
        </div>
      </div>
    );
  }

  /* Steps 4-6 — aggregate rows */
  if (step >= 4 && step <= 6) {
    const activeIdx = step - 4;
    return (
      <div className="rc-scene scene-pad">
        <div className="rc-aggregate">
          <div className="rc-table-head">
            <span className="rc-th rc-th-id">AGGREGATE · ALL THREE QUERIES</span>
          </div>
          {AGGREGATES.map((a, i) => (
            <AggregateRow
              key={a.label}
              agg={a}
              state={i === activeIdx ? "active" : i < activeIdx ? "prev" : "hidden"}
            />
          ))}
        </div>
      </div>
    );
  }

  /* Step 7 — hero token reveal */
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
            <div className="rc-token-cap">tokens · per session</div>
            <div className="hero-num rc-token-num">60,000</div>
            <div className="rc-token-tag">grep + read path</div>
          </div>
          <div className="rc-token-arrow">→</div>
          <div className="rc-token-side rc-token-after">
            <div className="rc-token-cap">tokens · per session</div>
            <div className="hero-num rc-token-num rc-token-num-accent">18,000</div>
            <div className="rc-token-tag">MCP graph path</div>
          </div>
        </div>
        <div className="rc-token-stamp">70% saved · per session</div>
      </div>
    </div>
  );
}
