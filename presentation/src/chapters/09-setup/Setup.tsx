import type { ChapterStepProps } from "../../registry/types";
import "./Setup.css";

export default function Setup({ step }: ChapterStepProps) {
  /* Step 0 — soft pointer */
  if (step === 0) {
    return (
      <div className="st-scene scene-pad">
        <div className="st-step0">
          <h2 className="st-h0">
            Both tools ship as <br />
            <span className="st-em">MCP servers.</span>
          </h2>
          <div className="st-badges">
            <div className="st-badge">
              <span className="st-badge-dot" />
              <span className="st-badge-name">GitNexus</span>
              <span className="st-badge-tag">MCP-ready</span>
            </div>
            <div className="st-badge st-badge-2">
              <span className="st-badge-dot" />
              <span className="st-badge-name">Graphify</span>
              <span className="st-badge-tag">MCP-ready</span>
            </div>
          </div>
          <div className="st-foot">
            A few commands per their docs — and they're wired into Claude.
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — MCP > CLI ledger + dev loop */
  return (
    <div className="st-scene scene-pad">
      <div className="st-step1">
        <div className="st-mono-label">Why MCP &gt; CLI</div>
        <div className="st-ledger">
          <div className="st-ledger-row">
            <span className="st-ledger-key">CLI invocation</span>
            <span className="st-ledger-old">~200</span>
            <span className="st-ledger-unit">tokens / call</span>
          </div>
          <div className="st-ledger-arrow">↓</div>
          <div className="st-ledger-row st-ledger-row-new">
            <span className="st-ledger-key">MCP native</span>
            <span className="st-ledger-new">0</span>
            <span className="st-ledger-unit">tokens / call</span>
          </div>
        </div>

        <div className="st-loop">
          <div className="st-loop-node st-loop-node-1">
            <div className="st-loop-label">your agent</div>
            <div className="st-loop-act">asks</div>
          </div>
          <div className="st-loop-arrow st-loop-arrow-1">→</div>
          <div className="st-loop-node st-loop-node-2">
            <div className="st-loop-label">the graph</div>
            <div className="st-loop-act">returns a slice</div>
          </div>
          <div className="st-loop-arrow st-loop-arrow-2">→</div>
          <div className="st-loop-node st-loop-node-3">
            <div className="st-loop-label">answer</div>
            <div className="st-loop-act">no file reads</div>
          </div>
        </div>
      </div>
    </div>
  );
}
