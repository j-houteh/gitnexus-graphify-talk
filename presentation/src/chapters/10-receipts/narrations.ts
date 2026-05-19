import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  "Three real queries. Same codebase. Without the graphs versus with.",
  "Test 1 — find every caller of this function. Eighteen tool calls became seven. Eleven file reads became four. And it found a caller grep would have missed.",
  "Test 2 — trace this request end-to-end. Twenty-two calls became five. Fourteen reads became three. The full chain, request to response, in one query.",
  "Test 3 — what depends on this data model. Fifteen calls became three. Ten reads became zero. Eleven dependencies surfaced, ranked by risk.",
  "Aggregate. Fifty-five tool calls collapsed to fifteen. Seventy-three percent fewer.",
  "Eighteen grep operations — gone. One hundred percent.",
  "Thirty-five file reads down to seven. Eighty percent fewer.",
  "And the headline — sixty thousand tokens per session, down to eighteen thousand. Seventy percent saved.",
];
