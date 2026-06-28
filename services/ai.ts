import axios from "axios";

export async function generateImage(prompt: string) {
  const seed = Date.now();

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?width=1024&height=1024&seed=${seed}`;

  return {
    imageUrl,
  };
}