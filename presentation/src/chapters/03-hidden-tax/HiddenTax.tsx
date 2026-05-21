import type { ChapterStepProps } from "../../registry/types";
import "./HiddenTax.css";

export default function HiddenTax({ step }: ChapterStepProps) {
  /* Step 0 — cold open: one question */
  if (step === 0) {
    return (
      <div className="ht-scene scene-pad">
        <div className="ht-step0">
          <div className="kicker ht-kicker">The Hidden Tax</div>
          <h1 className="ht-h0">
            One question to your agent.
            <span className="ht-caret" aria-hidden>_</span>
          </h1>
        </div>
      </div>
    );
  }

  /* Step 1 — the cost, in both units (token + time) */
  if (step === 1) {
    return (
      <div className="ht-scene scene-pad">
        <div className="ht-step2">
          <div className="ht-mini-row">
            <span>25 tool calls</span>
            <span className="ht-mini-sep">·</span>
            <span>12 file reads</span>
            <span className="ht-mini-sep">·</span>
            <span className="ht-mini-trail">60,000 tokens</span>
          </div>
          <div className="ht-token-meter">
            <span className="hero-num ht-token-num">≈ 2 hours</span>
            <span className="ht-token-unit">of agent flailing · per session</span>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — Not thinking. Looking. */
  return (
    <div className="ht-scene scene-pad">
      <div className="ht-step3">
        <div className="ht-corner-token">
          <span className="ht-corner-label">Session cost</span>
          <span className="ht-corner-num">≈ 2 hours</span>
        </div>
        <h2 className="ht-h3">
          Not <span className="ht-strike">thinking</span>.
          <br />
          <span className="ht-emph">Looking.</span>
        </h2>
      </div>
    </div>
  );
}
