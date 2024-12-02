import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_XAI_API_KEY,
  baseURL: import.meta.env.VITE_BASE_URL,
  dangerouslyAllowBrowser: true,
});

export async function getAIResponse(message: string) {
  const completion = await openai.chat.completions.create({
    model: "grok-beta",
    messages: [
      { role: "system", content: "What is the meaning of life, the universe, and everything?" },
      { role: "user", content: message },
    ],
  });

  return completion.choices[0].message.content;
}