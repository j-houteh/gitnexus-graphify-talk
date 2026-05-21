import type { ChapterStepProps } from "../../registry/types";
import "./Cover.css";

export default function Cover(_props: ChapterStepProps) {
  /* One step — holds indefinitely before the talk starts */
  return (
    <div className="cv-scene scene-pad">
      <div className="cv-step0">
        <h1 className="cv-h">
          Day <span className="cv-em">Diet.</span>
        </h1>
        <span className="cv-rule" />
        <div className="cv-tag">
          <span className="cv-tag-clause">day-one ready</span>
          <span className="cv-tag-dot">·</span>
          <span className="cv-tag-clause">lookup not grep</span>
          <span className="cv-tag-dot">·</span>
          <span className="cv-tag-clause">no theory</span>
        </div>
      </div>
    </div>
  );
}
