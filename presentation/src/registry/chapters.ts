import type { ChapterDef } from "./types";
import Intro from "../chapters/01-intro/Intro";
import { narrations as introNarrations } from "../chapters/01-intro/narrations";
import HiddenTax from "../chapters/02-hidden-tax/HiddenTax";
import { narrations as hiddenTaxNarrations } from "../chapters/02-hidden-tax/narrations";
import OverReadLoop from "../chapters/03-over-read-loop/OverReadLoop";
import { narrations as overReadLoopNarrations } from "../chapters/03-over-read-loop/narrations";
import Hinge from "../chapters/04-hinge/Hinge";
import { narrations as hingeNarrations } from "../chapters/04-hinge/narrations";
import GitNexus from "../chapters/05-gitnexus/GitNexus";
import { narrations as gitNexusNarrations } from "../chapters/05-gitnexus/narrations";
import Graphify from "../chapters/06-graphify/Graphify";
import { narrations as graphifyNarrations } from "../chapters/06-graphify/narrations";
import DualEngine from "../chapters/07-dual-engine/DualEngine";
import { narrations as dualEngineNarrations } from "../chapters/07-dual-engine/narrations";
import Setup from "../chapters/08-setup/Setup";
import { narrations as setupNarrations } from "../chapters/08-setup/narrations";
import Receipts from "../chapters/09-receipts/Receipts";
import { narrations as receiptsNarrations } from "../chapters/09-receipts/narrations";
import Closing from "../chapters/10-closing/Closing";
import { narrations as closingNarrations } from "../chapters/10-closing/narrations";

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
];
