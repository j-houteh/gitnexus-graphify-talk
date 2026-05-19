import type { ChapterStepProps } from "../../registry/types";
import "./DualEngine.css";

function RoutingBar({ active }: { active: 0 | 1 | 2 | 3 }) {
  return (
    <div className={`de-bar de-bar-active-${active}`}>
      <div className="de-bar-seg de-seg-gn">
        <span className="de-seg-num">70</span>
        <span className="de-seg-unit">%</span>
      </div>
      <div className="de-bar-seg de-seg-gf">
        <span className="de-seg-num">25</span>
        <span className="de-seg-unit">%</span>
      </div>
      <div className="de-bar-seg de-seg-grep">
        <span className="de-seg-num">5</span>
        <span className="de-seg-unit">%</span>
      </div>
    </div>
  );
}

export default function DualEngine({ step }: ChapterStepProps) {
  /* Step 0 — opening */
  if (step === 0) {
    return (
      <div className="de-scene scene-pad">
        <div className="de-step0">
          <h2 className="de-h0">
            You don't pick one.
            <br />
            You <span className="de-em">route</span> to the right one.
          </h2>
        </div>
      </div>
    );
  }

  /* Step 1 — GitNexus segment */
  if (step === 1) {
    return (
      <div className="de-scene scene-pad">
        <div className="de-stepRouting">
          <div className="de-routing-label">The routing</div>
          <RoutingBar active={1} />
          <div className="de-routing-cards">
            <div className="de-card de-card-gn de-card-active">
              <div className="de-card-tag">GitNexus</div>
              <div className="de-card-h">code structure</div>
              <div className="de-card-sub">call chains · blast radius · execution flows</div>
            </div>
            <div className="de-card de-card-gf">
              <div className="de-card-tag">Graphify</div>
              <div className="de-card-h">—</div>
            </div>
            <div className="de-card de-card-grep">
              <div className="de-card-tag">grep</div>
              <div className="de-card-h">—</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — Graphify segment */
  if (step === 2) {
    return (
      <div className="de-scene scene-pad">
        <div className="de-stepRouting">
          <div className="de-routing-label">The routing</div>
          <RoutingBar active={2} />
          <div className="de-routing-cards">
            <div className="de-card de-card-gn">
              <div className="de-card-tag">GitNexus</div>
              <div className="de-card-h">code structure</div>
              <div className="de-card-sub">call chains · blast radius</div>
            </div>
            <div className="de-card de-card-gf de-card-active">
              <div className="de-card-tag">Graphify</div>
              <div className="de-card-h">cross-layer</div>
              <div className="de-card-sub">semantic · "why does this exist"</div>
            </div>
            <div className="de-card de-card-grep">
              <div className="de-card-tag">grep</div>
              <div className="de-card-h">—</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — grep fallback */
  if (step === 3) {
    return (
      <div className="de-scene scene-pad">
        <div className="de-stepRouting">
          <div className="de-routing-label">The routing</div>
          <RoutingBar active={3} />
          <div className="de-routing-cards">
            <div className="de-card de-card-gn">
              <div className="de-card-tag">GitNexus</div>
              <div className="de-card-h">code structure</div>
              <div className="de-card-sub">call chains · blast radius</div>
            </div>
            <div className="de-card de-card-gf">
              <div className="de-card-tag">Graphify</div>
              <div className="de-card-h">cross-layer</div>
              <div className="de-card-sub">semantic · why</div>
            </div>
            <div className="de-card de-card-grep de-card-active">
              <div className="de-card-tag">grep</div>
              <div className="de-card-h">fallback</div>
              <div className="de-card-sub">last resort · 5%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 4 — analogy */
  return (
    <div className="de-scene scene-pad">
      <div className="de-step4">
        <div className="de-an-row de-an-row-1">
          <div className="de-an-label">Graphify</div>
          <div className="de-an-eq">=</div>
          <div className="de-an-val">
            <code>ANALYZE</code> statistics
          </div>
        </div>
        <div className="de-an-row de-an-row-2">
          <div className="de-an-label">GitNexus</div>
          <div className="de-an-eq">=</div>
          <div className="de-an-val">
            the <span className="de-em">query planner</span>
          </div>
        </div>
        <div className="de-an-foot">one provides shape · the other traces paths</div>
      </div>
    </div>
  );
}
