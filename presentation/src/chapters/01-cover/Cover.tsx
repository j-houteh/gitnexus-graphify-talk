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
          <span className="cv-tag-clause">less reading</span>
          <span className="cv-tag-dot">·</span>
          <span className="cv-tag-clause">more knowing</span>
          <span className="cv-tag-dot">·</span>
          <span className="cv-tag-clause">same-day shipping</span>
        </div>
      </div>

      <aside className="cv-qr" aria-label="Attendance QR code">
        <img
          className="cv-qr-img"
          src="/c-attendance.png"
          alt="Scan to mark attendance"
        />
        <span className="cv-qr-label">Attendance</span>
      </aside>
    </div>
  );
}
