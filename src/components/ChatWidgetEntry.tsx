import React from "react";
import { createRoot } from "react-dom/client";
import { ChatWidget } from "@/components/ChatWidget";

export default function initChatWidget(containerId: string) {
  const container = document.getElementById(containerId);
  if (container) {
    createRoot(container).render(
      <React.StrictMode>
        <ChatWidget />
      </React.StrictMode>
    );
  } else {
    console.error(`Container with id ${containerId} not found`);
  }
}
