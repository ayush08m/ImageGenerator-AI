import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

const BASE_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function improvePrompt(prompt: string) {
  const response = await axios.post(
    `${BASE_URL}?key=${API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: `
You are an expert AI prompt engineer.

Improve the following image prompt.

Rules:
- Return only the improved prompt.
- Do not explain anything.
- Keep it under 80 words.
- Make it cinematic.
- Add lighting.
- Add camera details.
- Add quality details.

Prompt:
${prompt}
              `,
            },
          ],
        },
      ],
    }
  );

  return (
    response.data.candidates?.[0]?.content?.parts?.[0]?.text ??
    prompt
  );
}