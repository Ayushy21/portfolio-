import { ogSize, renderOgCard } from "@/lib/og";

export const alt = "Ayush Yadav — AI / LLM Engineer. I build AI systems that are evaluated, tested and shipped.";
export const size = ogSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgCard();
}
