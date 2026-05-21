import type { ChapterStepProps } from "../../registry/types";
import "./Intro.css";

const DRIP_VALUES = ["+12", "+47", "+89", "+213", "+417", "+1.2k", "+...", "+..."];

export default function Intro({ step }: ChapterStepProps) {
  /* Step 0 — opening: name the room */
  if (step === 0) {
    return (
      <div className="in-scene scene-pad">
        <div className="in-step0">
          <h1 className="in-h0">
            <span className="in-em">Claude Code</span>
            <br />
            is on every laptop
            <br />
            in this room.
            <span className="in-caret" aria-hidden>_</span>
          </h1>
        </div>
      </div>
    );
  }

  /* Step 1 — the quiet leak */
  if (step === 1) {
    return (
      <div className="in-scene scene-pad">
        <div className="in-step1">
          <h2 className="in-h1">
            Your token bill
            <br />
            has a <span className="in-em">quiet leak.</span>
          </h2>
          <div className="in-drip" aria-hidden>
            {DRIP_VALUES.map((v, i) => (
              <span
                key={i}
                className="in-drop"
                style={{ animationDelay: `${i * 240}ms` }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — transition */
  return (
    <div className="in-scene scene-pad">
      <div className="in-step2">
        <h2 className="in-h2">
          Here's how
          <br />
          to <span className="in-em">cut it.</span>
        </h2>
        <span className="in-rule" />
        <div className="in-foot">Next — what's actually happening.</div>
      </div>
    </div>
  );
}
