import type { ChapterStepProps } from "../../registry/types";
import "./DayChanges.css";

/**
 * Chapter 10 — How the day changes.
 *
 * Three concrete scenarios that name where graphs land in real work:
 *   0 · onboarding — "what does this module do?" → graphify
 *   1 · refactor   — "what depends on this?"     → gitnexus
 *   2 · debugging  — "where does this come from?" → gitnexus
 *
 * Class prefix: .dc-
 */
export default function DayChanges({ step }: ChapterStepProps) {
  const scenarios = [
    {
      idx: "01",
      label: "Onboarding",
      situation: "You just opened a module you've never touched.",
      question: `"what does this module do?"`,
      tool: "GRAPHIFY",
      toolClass: "dc-tool-graphify",
      answer: "Cluster + summary. Half a day → ninety seconds.",
    },
    {
      idx: "02",
      label: "Refactor",
      situation: "You're about to change a function.",
      question: `"what depends on this?"`,
      tool: "GITNEXUS",
      toolClass: "dc-tool-gitnexus",
      answer: "Every caller, before the diff. No silent breaks.",
    },
    {
      idx: "03",
      label: "Debugging",
      situation: "A value is wrong and you can't see why.",
      question: `"where does this come from?"`,
      tool: "GITNEXUS",
      toolClass: "dc-tool-gitnexus",
      answer: "Walk the execution flow from input to output.",
    },
  ];

  const s = scenarios[Math.max(0, Math.min(scenarios.length - 1, step))]!;

  return (
    <div className="dc-scene scene-pad">
      <div className="dc-step">
        <div className="dc-head">
          <span className="dc-idx">{s.idx}</span>
          <span className="dc-label">{s.label}</span>
        </div>
        <div className="dc-situation">{s.situation}</div>
        <div className="dc-question">{s.question}</div>
        <div className="dc-answer-row">
          <span className={`dc-tool ${s.toolClass}`}>{s.tool}</span>
          <span className="dc-arrow">→</span>
          <span className="dc-answer">{s.answer}</span>
        </div>
      </div>
    </div>
  );
}
