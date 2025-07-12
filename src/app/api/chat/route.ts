import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getContext } from "@/lib/rag";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content;
  const context = await getContext(lastMessage);
  const prompt = `You are a helpful AI assistant for Fetch.ai documentation. Use the following context to answer the query. Include citations as [source] where relevant.\n\nContext:\n${context}\n\nQuery:\n${lastMessage}`;
  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    prompt,
  });
  return result.toDataStreamResponse();
}
