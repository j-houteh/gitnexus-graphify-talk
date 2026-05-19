import type { ChapterStepProps } from "../../registry/types";
import "./QaThanks.css";

export default function QaThanks({ step }: ChapterStepProps) {
  /* Step 0 — Questions? (holds during Q&A) */
  if (step === 0) {
    return (
      <div className="qa-scene scene-pad">
        <div className="qa-step0">
          <h1 className="qa-h">
            Questions<span className="qa-em">?</span>
            <span className="qa-caret" aria-hidden>_</span>
          </h1>
        </div>
      </div>
    );
  }

  /* Step 1 — Thanks. (the final frame) */
  return (
    <div className="qa-scene scene-pad">
      <div className="qa-step1">
        <h1 className="qa-h qa-h-thanks">
          Thanks<span className="qa-em">.</span>
        </h1>
        <span className="qa-rule" />
      </div>
    </div>
  );
}
