import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  "Three real queries. Same codebase. Normal Claude versus Claude with the graphs.",
  "Test 1 — encryption handling. Fourteen tool calls became two. Eleven file reads became zero. And it found more dependencies — forty-three versus thirty.",
  "Test 2 — blast radius. About fifteen calls became two. Zero execution flows traced became nine, ranked by risk.",
  "Test 3 — end-to-end document editor flow. Twenty-nine tool calls became three. Fifteen file reads became zero.",
  "Aggregate. Fifty-eight tool calls collapsed to seven. Eighty-eight percent fewer.",
  "Eighteen grep operations — gone. One hundred percent.",
  "Thirty-five file reads — gone. One hundred percent.",
  "And the headline number — retrieval tokens per query. Thirteen thousand seven hundred and fifty, down to three thousand five hundred. Seventy-four percent saved.",
];
