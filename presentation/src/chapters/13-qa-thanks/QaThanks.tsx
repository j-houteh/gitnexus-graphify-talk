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

  /* Step 1 — Developer Guide reference (QR + URL) */
  if (step === 1) {
    return (
      <div className="qa-scene scene-pad">
        <div className="qa-step-guide">
          <div className="qa-guide-eyebrow">
            <span className="qa-guide-tick" aria-hidden>┌</span>
            <span>Go further</span>
          </div>
          <h2 className="qa-guide-h">
            Developer Guide<span className="qa-em">.</span>
          </h2>
          <p className="qa-guide-sub">
            Setup, schema, recipes — the full reference, on Notion.
          </p>

          <div className="qa-guide-card">
            <img
              className="qa-guide-qr"
              src="/dev-guide-qr.svg"
              alt="QR code linking to the GitNexus Graphify developer guide on Notion"
            />
            <div className="qa-guide-meta">
              <span className="qa-guide-label">Scan to open</span>
              <span className="qa-guide-url">
                notion.so/webbymy/<wbr />GitNexus-Graphify-<wbr />Developer-Guide
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — Thanks. (the final frame) */
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
