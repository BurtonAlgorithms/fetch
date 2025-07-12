import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getContext } from "@/lib/rag";
import { buildContextFromMessages } from "@/lib/contextBuilder";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content;
  
  // Build smart context from recent messages for better retrieval
  const queryContext = buildContextFromMessages(messages);
  const context = await getContext(queryContext);
  const prompt = `
You are a precise AI assistant specialized in Fetch.ai (now ASI Alliance) documentation. Your sole source of truth is the provided context from official docs—do not use external knowledge or make up information. Answer the user's query concisely and helpfully, grounding every claim in the context. If the context doesn't contain relevant information, respond with: "I couldn't find an answer in the Fetch.ai docs. Try rephrasing your query or check the official site."

For citations:
- Include inline citations as ()[Source: URL] directly after the relevant sentence or fact.
- Only cite if it directly supports your answer; avoid over-citing.

Markdown formatting guidelines for clean, professional documentation:

**Text Formatting:**
- Use **bold** for important concepts, key terms, and emphasis
- Use *italics* for parameters, variables, or field names
- Use ### headings to organize different sections clearly
- Use numbered lists (1. 2. 3.) for step-by-step processes
- Use bullet points (- or *) for feature lists or options

**Code and Technical Elements:**
- Use \`backticks\` for copyable elements: commands, URLs, code snippets, installation instructions
  - Examples: \`npm install -g mint\`, \`localhost:3000\`, \`git clone\`, \`https://example.com\`
- Use \`backticks\` for file names and UI elements (these will be styled but not copyable)
  - Examples: \`index.mdx\`, \`Settings\`, \`.env\`, \`package.json\`
- Use code blocks with language specification for multi-line code:
  \`\`\`python
  # Multi-line code example
  \`\`\`

**Organization:**
- Start responses with clear section headers when appropriate
- Use > blockquotes for important notes, warnings, or tips
- Use | tables | when | displaying | structured | data |
- Keep content well-spaced and organized like professional documentation
- Group related information under clear headings

**Style Goals:**
- Use consistent formatting throughout the response
- Prioritize readability and scanability
- Include proper spacing between sections

Context (retrieved chunks from docs):
${context}

User Query:
${lastMessage}

Think step-by-step:
1. Analyze the query.
2. Identify matching info from context.
3. Formulate a clear response using appropriate markdown formatting.`;

  const result = streamText({
    model: openai("gpt-4o-2024-08-06"),
    prompt,
  });
  return result.toDataStreamResponse();
}
