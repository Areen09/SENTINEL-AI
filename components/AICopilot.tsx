"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AICopilot() {

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Sentinel AI monitoring infrastructure.",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input) return;

    const responses = [
      "Potential outage probability increasing.",
      "Redis instability detected.",
      "API latency anomaly identified.",
      "AI remediation initiated.",
    ];

    const aiReply = responses[
      Math.floor(Math.random() * responses.length)
    ];

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "ai", text: aiReply },
    ]);

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">

      <div className="flex-1 space-y-3 overflow-auto mb-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`p-3 rounded-xl text-sm ${
              msg.role === "ai"
                ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                : "bg-zinc-800 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>

        ))}

      </div>

      <div className="flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Sentinel AI..."
          className="flex-1 bg-black/40 border border-zinc-700 rounded-xl px-4 py-3 text-sm outline-none"
        />

        <button
          onClick={handleSend}
          className="bg-cyan-500 hover:bg-cyan-400 transition-all px-4 rounded-xl"
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}