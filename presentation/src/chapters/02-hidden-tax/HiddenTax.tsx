import type { ChapterStepProps } from "../../registry/types";
import "./HiddenTax.css";

export default function HiddenTax({ step }: ChapterStepProps) {
  /* Step 0 — cold open: one question */
  if (step === 0) {
    return (
      <div className="ht-scene scene-pad">
        <div className="ht-step0">
          <div className="kicker ht-kicker">Chapter 01 · The Hidden Tax</div>
          <h1 className="ht-h0">
            One question to your agent.
            <span className="ht-caret" aria-hidden>_</span>
          </h1>
        </div>
      </div>
    );
  }

  /* Step 1 — counter row: tool calls + file reads */
  if (step === 1) {
    return (
      <div className="ht-scene scene-pad">
        <div className="ht-step1">
          <div className="kicker ht-kicker">For one query</div>
          <div className="ht-counter-row">
            <div className="ht-counter ht-rise">
              <div className="hero-num ht-counter-num">29</div>
              <div className="ht-counter-label">Tool calls</div>
            </div>
            <div className="ht-counter ht-rise ht-rise-2">
              <div className="hero-num ht-counter-num">15</div>
              <div className="ht-counter-label">File reads</div>
            </div>
          </div>
          <div className="ht-caption-mono ht-fade-late">…to answer it.</div>
        </div>
      </div>
    );
  }

  /* Step 2 — hero token number */
  if (step === 2) {
    return (
      <div className="ht-scene scene-pad">
        <div className="ht-step2">
          <div className="ht-mini-row">
            <span className="ht-mini">29 tool calls</span>
            <span className="ht-mini-sep">·</span>
            <span className="ht-mini">15 file reads</span>
            <span className="ht-mini-sep">→</span>
            <span className="ht-mini ht-mini-trail">one answer</span>
          </div>
          <div className="ht-token-meter">
            <span className="hero-num ht-token-num">56,439</span>
            <span className="ht-token-unit">tokens · one session</span>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — Not thinking. Looking. */
  if (step === 3) {
    return (
      <div className="ht-scene scene-pad">
        <div className="ht-step3">
          <div className="ht-corner-token">
            <span className="ht-corner-label">Session cost</span>
            <span className="ht-corner-num">56,439</span>
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

  /* Step 4 — Every session pays again */
  return (
    <div className="ht-scene scene-pad">
      <div className="ht-step4">
        <h2 className="ht-h4">Every session pays again.</h2>
        <div className="ht-rule-wrap">
          <span className="ht-rule" />
        </div>
        <div className="ht-foot">Next — why agents over-read</div>
      </div>
    </div>
  );
}
