import type { ChapterStepProps } from "../../registry/types";
import "./Closing.css";

export default function Closing({ step }: ChapterStepProps) {
  /* Step 0 — index once, reuse forever */
  if (step === 0) {
    return (
      <div className="cl-scene scene-pad">
        <div className="cl-step0">
          <h2 className="cl-h0">
            <span className="cl-clause cl-clause-1">Index once.</span>
            <br />
            <span className="cl-clause cl-clause-2 cl-em">Reuse forever.</span>
          </h2>
          <span className="cl-rule" />
        </div>
      </div>
    );
  }

  /* Step 1 — pay tokens for thinking */
  if (step === 1) {
    return (
      <div className="cl-scene scene-pad">
        <div className="cl-step1">
          <h2 className="cl-h1">
            <span className="cl-clause cl-clause-1">
              Pay tokens
              <br />
              for <span className="cl-em">thinking.</span>
            </span>
          </h2>
          <h2 className="cl-h1 cl-h1-2">
            <span className="cl-clause cl-clause-2">
              Stop paying them
              <br />
              for <span className="cl-strike">finding.</span>
            </span>
          </h2>
        </div>
      </div>
    );
  }

  /* Step 2 — adoption honesty: we have the graph, we just don't ask it yet */
  if (step === 2) {
    return (
      <div className="cl-scene scene-pad">
        <div className="cl-step-honest">
          <h2 className="cl-h-honest cl-h-honest-1">
            <span className="cl-clause cl-clause-1 cl-mute">
              We have the graph.
            </span>
          </h2>
          <span className="cl-rule-honest" />
          <h2 className="cl-h-honest cl-h-honest-2">
            <span className="cl-clause cl-clause-2">
              We just <span className="cl-em">don't ask it</span> yet.
            </span>
          </h2>
        </div>
      </div>
    );
  }

  /* Step 3 — closing frame */
  return (
    <div className="cl-scene scene-pad">
      <div className="cl-step2">
        <span className="cl-end-rule" />
        <div className="cl-end-line">Watch the meter drop.</div>
        <span className="cl-end-rule cl-end-rule-2" />
      </div>
    </div>
  );
}
