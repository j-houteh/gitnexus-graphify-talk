import type { ChapterStepProps } from "../../registry/types";
import "./Cover.css";

export default function Cover(_props: ChapterStepProps) {
  /* One step — holds indefinitely before the talk starts */
  return (
    <div className="cv-scene scene-pad">
      <div className="cv-step0">
        <h1 className="cv-h">
          Token <span className="cv-em">Diet.</span>
        </h1>
        <h2 className="cv-sub">Stop Burning Cash on AI Dev Tools</h2>
        <span className="cv-rule" />
        <div className="cv-tag">
          <span className="cv-tag-clause">real tricks</span>
          <span className="cv-tag-dot">·</span>
          <span className="cv-tag-clause">real savings</span>
          <span className="cv-tag-dot">·</span>
          <span className="cv-tag-clause">no filler</span>
        </div>
      </div>
    </div>
  );
}
