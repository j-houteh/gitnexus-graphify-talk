import type { ChapterDef } from "./types";
import Cover from "../chapters/01-cover/Cover";
import { narrations as coverNarrations } from "../chapters/01-cover/narrations";
import Intro from "../chapters/02-intro/Intro";
import { narrations as introNarrations } from "../chapters/02-intro/narrations";
import HiddenTax from "../chapters/03-hidden-tax/HiddenTax";
import { narrations as hiddenTaxNarrations } from "../chapters/03-hidden-tax/narrations";
import OverReadLoop from "../chapters/04-over-read-loop/OverReadLoop";
import { narrations as overReadLoopNarrations } from "../chapters/04-over-read-loop/narrations";
import Hinge from "../chapters/05-hinge/Hinge";
import { narrations as hingeNarrations } from "../chapters/05-hinge/narrations";
import GitNexus from "../chapters/06-gitnexus/GitNexus";
import { narrations as gitNexusNarrations } from "../chapters/06-gitnexus/narrations";
import Graphify from "../chapters/07-graphify/Graphify";
import { narrations as graphifyNarrations } from "../chapters/07-graphify/narrations";
import DualEngine from "../chapters/08-dual-engine/DualEngine";
import { narrations as dualEngineNarrations } from "../chapters/08-dual-engine/narrations";
import Setup from "../chapters/09-setup/Setup";
import { narrations as setupNarrations } from "../chapters/09-setup/narrations";
import Receipts from "../chapters/10-receipts/Receipts";
import { narrations as receiptsNarrations } from "../chapters/10-receipts/narrations";
import Closing from "../chapters/11-closing/Closing";
import { narrations as closingNarrations } from "../chapters/11-closing/narrations";
import QaThanks from "../chapters/12-qa-thanks/QaThanks";
import { narrations as qaThanksNarrations } from "../chapters/12-qa-thanks/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  { id: "cover",          title: "Cover",                 narrations: coverNarrations,        Component: Cover },
  { id: "intro",          title: "Intro",                 narrations: introNarrations,        Component: Intro },
  { id: "hidden-tax",     title: "The Hidden Tax",        narrations: hiddenTaxNarrations,    Component: HiddenTax },
  { id: "over-read-loop", title: "Why Agents Over-Read",  narrations: overReadLoopNarrations, Component: OverReadLoop },
  { id: "hinge",          title: "The Hinge",             narrations: hingeNarrations,        Component: Hinge },
  { id: "gitnexus",       title: "GitNexus",              narrations: gitNexusNarrations,     Component: GitNexus },
  { id: "graphify",       title: "Graphify",              narrations: graphifyNarrations,     Component: Graphify },
  { id: "dual-engine",    title: "The Dual Engine",       narrations: dualEngineNarrations,   Component: DualEngine },
  { id: "setup",          title: "Setup",                 narrations: setupNarrations,        Component: Setup },
  { id: "receipts",       title: "The Receipts",          narrations: receiptsNarrations,     Component: Receipts },
  { id: "closing",        title: "Closing",               narrations: closingNarrations,      Component: Closing },
  { id: "qa-thanks",      title: "Q&A · Thanks",          narrations: qaThanksNarrations,     Component: QaThanks },
];
