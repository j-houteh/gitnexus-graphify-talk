import type { Narration } from "../../registry/types";

export const narrations: Narration[] = [
  "Three real queries. Same monorepo. Without the graphs versus with.",
  "Test 1 — exception assignment flow. Eighteen tool calls became seven. Eleven file reads became four. And it found the CQRS event handler grep would have missed.",
  "Test 2 — invoice to payable matching. Twenty-two calls became five. Fourteen reads became three. Twelve services and four events, traced end-to-end.",
  "Test 3 — schema impact on InvoiceLineItem. Fifteen calls became three. Ten reads became zero. Eleven dependencies surfaced, ranked by risk.",
  "Aggregate. Fifty-five tool calls collapsed to fifteen. Seventy-three percent fewer.",
  "Eighteen grep operations — gone. One hundred percent.",
  "Thirty-five file reads down to seven. Eighty percent fewer.",
  "And the headline — sixty thousand tokens per session, down to eighteen thousand. Seventy percent saved.",
];
