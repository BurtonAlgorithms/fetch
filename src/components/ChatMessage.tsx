import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ReactMarkdown from "react-markdown";
import { User, Bot } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant" | "system" | "data";
  content: string;
};

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";
  return (
    <div
      className={`flex items-start gap-3 mb-4 ${isUser ? "justify-end" : ""}`}
    >
      {!isUser && (
        <Avatar className="w-8 h-8">
          <AvatarFallback>
            <Bot className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={`max-w-[75%] p-3 rounded-lg break-words overflow-wrap-anywhere ${
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        }`}
      >
        <ReactMarkdown
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                {children}
              </a>
            ),
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
      {isUser && (
        <Avatar className="w-8 h-8">
          <AvatarFallback>
            <User className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
