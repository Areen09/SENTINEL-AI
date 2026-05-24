"use client";

import { useState } from "react";

export default function AIChat() {

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello Engineer. Sentinel AI monitoring systems online.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input) return;

    setMessages([
      ...messages,
      { role: "user", text: input },
      {
        role: "ai",
        text: "Root cause likely linked to Redis overload after deployment.",
      },
    ]);

    setInput("");
  };

  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold mb-4 text-white">
        AI Copilot
      </h2>

      <div className="space-y-3 h-64 overflow-y-auto mb-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`p-3 rounded-xl max-w-[80%] ${
              msg.role === "user"
                ? "bg-emerald-500 text-black ml-auto"
                : "bg-zinc-800 text-white"
            }`}
          >
            {msg.text}
          </div>

        ))}

      </div>

      <div className="flex gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Sentinel AI..."
          className="flex-1 bg-black/40 border border-zinc-700 rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-emerald-500 hover:bg-emerald-600 transition-all px-5 py-3 rounded-xl font-bold text-black"
        >
          Send
        </button>

      </div>

    </div>
  );
}