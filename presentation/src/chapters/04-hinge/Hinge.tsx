import type { ChapterStepProps } from "../../registry/types";
import "./Hinge.css";

export default function Hinge({ step }: ChapterStepProps) {
  /* Step 0 — setup line */
  if (step === 0) {
    return (
      <div className="hn-scene scene-pad">
        <div className="hn-step0">
          <h2 className="hn-h0">Here's the flip.</h2>
          <span className="hn-rule" />
        </div>
      </div>
    );
  }

  /* Step 1 — hero quote */
  return (
    <div className="hn-scene scene-pad">
      <div className="hn-step1">
        <div className="hn-quote-mark">"</div>
        <blockquote className="hn-quote">
          <span className="hn-clause hn-clause-1">
            Structural knowledge about your codebase
          </span>{" "}
          <span className="hn-clause hn-clause-2">
            is a <span className="hn-em">pre-computable asset</span>,
          </span>{" "}
          <span className="hn-clause hn-clause-3">
            not a <span className="hn-strike">runtime expense</span>.
          </span>
        </blockquote>
      </div>
    </div>
  );
}
