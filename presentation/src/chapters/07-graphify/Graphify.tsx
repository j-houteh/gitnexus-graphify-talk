import type { ChapterStepProps } from "../../registry/types";
import "./Graphify.css";

type Highlight = "extracted" | "inferred" | "ambiguous" | undefined;

function ModalityIcon({ kind }: { kind: "code" | "doc" | "image" | "pdf" | "board" }) {
  switch (kind) {
    case "code":
      return (
        <svg viewBox="0 0 80 80" className="gf-mod-svg">
          <rect x="6" y="14" width="68" height="52" rx="2" className="gf-mod-frame" />
          <text x="40" y="50" textAnchor="middle" className="gf-mod-text">&lt;/&gt;</text>
        </svg>
      );
    case "doc":
      return (
        <svg viewBox="0 0 80 80" className="gf-mod-svg">
          <rect x="14" y="8" width="52" height="64" rx="2" className="gf-mod-frame" />
          <line x1="22" y1="22" x2="58" y2="22" className="gf-mod-line" />
          <line x1="22" y1="32" x2="58" y2="32" className="gf-mod-line" />
          <line x1="22" y1="42" x2="58" y2="42" className="gf-mod-line" />
          <line x1="22" y1="52" x2="46" y2="52" className="gf-mod-line" />
        </svg>
      );
    case "image":
      return (
        <svg viewBox="0 0 80 80" className="gf-mod-svg">
          <rect x="6" y="14" width="68" height="52" rx="2" className="gf-mod-frame" />
          <circle cx="22" cy="28" r="4" className="gf-mod-fill" />
          <polyline points="14,56 30,38 46,52 60,32 70,56" className="gf-mod-line" fill="none" />
        </svg>
      );
    case "pdf":
      return (
        <svg viewBox="0 0 80 80" className="gf-mod-svg">
          <rect x="14" y="8" width="52" height="64" rx="2" className="gf-mod-frame" />
          <text x="40" y="50" textAnchor="middle" className="gf-mod-text gf-mod-text-sm">PDF</text>
        </svg>
      );
    case "board":
      return (
        <svg viewBox="0 0 80 80" className="gf-mod-svg">
          <rect x="6" y="18" width="68" height="44" rx="2" className="gf-mod-frame" />
          <path d="M 16 50 Q 28 32, 40 44 T 64 38" className="gf-mod-line" fill="none" />
        </svg>
      );
  }
}

function EdgeSpec({
  kind,
  label,
  desc,
}: {
  kind: "extracted" | "inferred" | "ambiguous";
  label: string;
  desc: string;
}) {
  return (
    <div className={`gf-spec gf-spec-${kind}`}>
      <svg viewBox="0 0 260 80" className="gf-spec-svg">
        <circle cx="22" cy="40" r="12" className="gf-spec-node" />
        <line x1="34" y1="40" x2="226" y2="40" className={`gf-spec-line gf-line-${kind}`} />
        {kind === "ambiguous" && (
          <g className="gf-spec-marker">
            <circle cx="130" cy="40" r="14" className="gf-spec-marker-ring" />
            <text x="130" y="46" textAnchor="middle" className="gf-spec-marker-text">!</text>
          </g>
        )}
        <circle cx="238" cy="40" r="12" className="gf-spec-node" />
      </svg>
      <div className="gf-spec-label">{label}</div>
      <div className="gf-spec-desc">{desc}</div>
    </div>
  );
}

function EdgeSpecimens({ highlight }: { highlight: Highlight }) {
  return (
    <div className={`gf-specimens ${highlight ? `gf-h-${highlight}` : ""}`}>
      <EdgeSpec kind="extracted"  label="EXTRACTED"  desc="read it from the source" />
      <EdgeSpec kind="inferred"   label="INFERRED"   desc="model-derived, cross-document" />
      <EdgeSpec kind="ambiguous"  label="AMBIGUOUS"  desc="flagged so you can audit it" />
    </div>
  );
}

export default function Graphify({ step }: ChapterStepProps) {
  /* Step 0 — title */
  if (step === 0) {
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step0">
          <div className="gf-step0-label">Tool 02</div>
          <h2 className="gf-step0-h">Graphify</h2>
          <div className="gf-step0-tag">reads more than code.</div>
        </div>
      </div>
    );
  }

  /* Step 1 — modality fan-in */
  if (step === 1) {
    const mods: { kind: "code" | "doc" | "image" | "pdf" | "board"; label: string }[] = [
      { kind: "code",  label: "code" },
      { kind: "doc",   label: "docs" },
      { kind: "image", label: "images" },
      { kind: "pdf",   label: "research" },
      { kind: "board", label: "whiteboards" },
    ];
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step1">
          <div className="gf-mono-label">Inputs</div>
          <div className="gf-mod-row">
            {mods.map((m, i) => (
              <div key={m.kind} className="gf-mod" style={{ animationDelay: `${i * 180}ms` }}>
                <ModalityIcon kind={m.kind} />
                <div className="gf-mod-label">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="gf-mod-foot">→ one graph.</div>
        </div>
      </div>
    );
  }

  /* Step 2 — pipeline */
  if (step === 2) {
    const stages = ["detect", "extract", "build_graph", "cluster", "analyze"];
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step2">
          <div className="gf-mono-label">Pipeline</div>
          <div className="gf-pipeline">
            {stages.map((s, i) => (
              <div key={s} className="gf-pipe-cell" style={{ animationDelay: `${i * 280}ms` }}>
                <div className="gf-pipe-i">{String(i + 1).padStart(2, "0")}</div>
                <div className="gf-pipe-name">{s}</div>
              </div>
            ))}
          </div>
          <div className="gf-pipe-flow" />
        </div>
      </div>
    );
  }

  /* Step 3 — three specimens at equal weight */
  if (step === 3) {
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step345">
          <div className="gf-step345-h">
            Every edge gets a <span className="gf-em">confidence label</span>.
          </div>
          <EdgeSpecimens highlight={undefined} />
        </div>
      </div>
    );
  }

  /* Step 4 — EXTRACTED highlighted */
  if (step === 4) {
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step345">
          <div className="gf-step345-h gf-step345-h-sm">
            <span className="gf-pill gf-pill-extracted">EXTRACTED</span>
            <span className="gf-h-text">read it from the source.</span>
          </div>
          <EdgeSpecimens highlight="extracted" />
        </div>
      </div>
    );
  }

  /* Step 5 — INFERRED highlighted */
  if (step === 5) {
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step345">
          <div className="gf-step345-h gf-step345-h-sm">
            <span className="gf-pill gf-pill-inferred">INFERRED</span>
            <span className="gf-h-text">model-derived, cross-document.</span>
          </div>
          <EdgeSpecimens highlight="inferred" />
        </div>
      </div>
    );
  }

  /* Step 6 — AMBIGUOUS highlighted */
  if (step === 6) {
    return (
      <div className="gf-scene scene-pad">
        <div className="gf-step345">
          <div className="gf-step345-h gf-step345-h-sm">
            <span className="gf-pill gf-pill-ambiguous">AMBIGUOUS</span>
            <span className="gf-h-text">flagged so you can audit it.</span>
          </div>
          <EdgeSpecimens highlight="ambiguous" />
        </div>
      </div>
    );
  }

  /* Step 7 — contrast frame */
  return (
    <div className="gf-scene scene-pad">
      <div className="gf-step7">
        <div className="gf-split gf-split-left">
          <div className="gf-split-label">GitNexus</div>
          <div className="gf-split-q">
            "what <span className="gf-em">calls</span> this?"
          </div>
          <div className="gf-split-sub">structural · code</div>
        </div>
        <div className="gf-split-divider">|</div>
        <div className="gf-split gf-split-right">
          <div className="gf-split-label">Graphify</div>
          <div className="gf-split-q">
            "why does this <span className="gf-em">exist</span>?"
          </div>
          <div className="gf-split-sub">semantic · cross-domain</div>
        </div>
      </div>
    </div>
  );
}
