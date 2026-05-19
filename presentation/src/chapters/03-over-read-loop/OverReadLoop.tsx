import type { ChapterStepProps } from "../../registry/types";
import "./OverReadLoop.css";

const TREE_ROWS = [
  "src/",
  "├── api.ts",
  "├── auth.ts",
  "├── crypto.ts",
  "├── db.ts",
  "├── handlers.ts",
  "└── routes.ts",
];

type TreeVariant = "calm" | "frantic" | "ghost";

function FileTree({ variant }: { variant: TreeVariant }) {
  return (
    <div className={`ol-tree ol-tree-${variant}`}>
      {TREE_ROWS.map((label, i) => (
        <div key={i} className="ol-row">
          {label}
        </div>
      ))}
      {variant !== "ghost" && (
        <span className={`ol-pointer ol-pointer-${variant}`} aria-hidden />
      )}
      {variant === "frantic" && (
        <>
          <span className="ol-trail ol-trail-a" aria-hidden />
          <span className="ol-trail ol-trail-b" aria-hidden />
        </>
      )}
    </div>
  );
}

export default function OverReadLoop({ step }: ChapterStepProps) {
  /* Step 0 — the grep/read loop */
  if (step === 0) {
    return (
      <div className="ol-scene scene-pad">
        <div className="ol-step0">
          <FileTree variant="calm" />
          <div className="ol-step0-right">
            <h2 className="ol-h0">
              <span className="ol-word ol-word-1">Grep.</span>{" "}
              <span className="ol-word ol-word-2">Read.</span>
              <br />
              <span className="ol-word ol-word-3">Grep.</span>{" "}
              <span className="ol-word ol-word-4">Read.</span>
            </h2>
            <div className="ol-step0-foot">The pattern is always the same.</div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 1 — annotations */
  if (step === 1) {
    return (
      <div className="ol-scene scene-pad">
        <div className="ol-step1">
          <div className="ol-tree-dim">
            <FileTree variant="calm" />
          </div>
          <div className="ol-step1-right">
            <div className="ol-card ol-card-1">
              <span className="ol-card-key">READ</span>
              <span className="ol-card-arrow">→</span>
              <span className="ol-card-val">context burned.</span>
            </div>
            <div className="ol-card ol-card-2">
              <span className="ol-card-key">GREP</span>
              <span className="ol-card-arrow">→</span>
              <span className="ol-card-val">links missed.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 2 — frantic loop */
  if (step === 2) {
    return (
      <div className="ol-scene scene-pad">
        <div className="ol-step2">
          <FileTree variant="frantic" />
          <div className="ol-step2-right">
            <h2 className="ol-h2">
              So it <span className="ol-emph">reads more</span>—
              <br />
              just to be sure.
            </h2>
            <div className="ol-step2-foot">
              It still can't see what calls what.
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Step 3 — punch line */
  return (
    <div className="ol-scene scene-pad">
      <div className="ol-step3">
        <div className="ol-tree-ghost-wrap">
          <FileTree variant="ghost" />
        </div>
        <h2 className="ol-h3">
          Reading the book
          <br />
          to find <span className="ol-emph">the table of contents.</span>
        </h2>
      </div>
    </div>
  );
}
