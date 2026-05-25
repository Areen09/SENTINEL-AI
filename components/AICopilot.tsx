"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function AICopilot() {

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([

    {
      role: "assistant",
      content:
        "Sentinel AI operational intelligence online. Infrastructure telemetry synchronized.",
    },

  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  function generateReply(message: string) {

    const msg = message.toLowerCase();

    // NORMAL CHAT

    if (
      msg.includes("hi") ||
      msg.includes("hello") ||
      msg.includes("hey")
    ) {

      return "Greetings, operator. Sentinel AI systems are fully operational.";

    }

    if (msg.includes("how are you")) {

      return "All infrastructure nodes are stable. Operational efficiency currently at 96%.";

    }

    if (msg.includes("what can you do")) {

      return "I monitor telemetry, analyze incidents, predict instability, and assist with autonomous operational intelligence.";

    }

    // INFRASTRUCTURE RESPONSES

    if (
      msg.includes("analyze") ||
      msg.includes("infrastructure")
    ) {

      return "Infrastructure stability operating at 92%. Minor telemetry spikes detected across distributed nodes. Autonomous remediation active.";

    }

    if (
      msg.includes("telemetry")
    ) {

      return "Telemetry streams indicate stable distributed system behavior with no critical degradation observed.";

    }

    if (
      msg.includes("incident")
    ) {

      return "3 medium-severity anomalies detected. AI remediation workflows successfully stabilized affected operational nodes.";

    }

    if (
      msg.includes("threat")
    ) {

      return "Threat severity remains moderate. Unauthorized access attempts were isolated and neutralized automatically.";

    }

    if (
      msg.includes("prediction")
    ) {

      return "Predictive engine forecasts minor infrastructure instability within non-critical telemetry clusters.";

    }

    if (
      msg.includes("logs")
    ) {

      return "Operational logs synchronized successfully. Real-time event tracking active across all infrastructure layers.";

    }

    // DEFAULT

    return "Sentinel AI processed your request successfully. Infrastructure systems remain operational.";

  }

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage = {

      role: "user",

      content: input,

    };

    setMessages((prev: any) => [

      ...prev,

      userMessage,

    ]);

    setLoading(true);

    setTimeout(() => {

      const reply = generateReply(input);

      setMessages((prev: any) => [

        ...prev,

        {

          role: "assistant",

          content: reply,

        },

      ]);

      setLoading(false);

    }, 1200);

    setInput("");

  }

  return (

    <div className="flex flex-col h-full">

      {/* CHAT AREA */}

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">

        {messages.map((msg: any, index) => (

          <div
            key={index}
            className={`rounded-2xl border p-4 transition-all ${
              msg.role === "assistant"
                ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-100"
                : "bg-zinc-900 border-zinc-700 text-zinc-100"
            }`}
          >

            <p className="text-xs uppercase tracking-[0.2em] mb-3 opacity-60 font-semibold">

              {msg.role === "assistant"
                ? "Sentinel AI"
                : "Operator"}

            </p>

            <p className="text-sm leading-relaxed">

              {msg.content}

            </p>

          </div>

        ))}

        {/* LOADING */}

        {loading && (

          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">

            <p className="text-xs uppercase tracking-[0.2em] mb-3 opacity-60 font-semibold text-cyan-300">

              Sentinel AI

            </p>

            <div className="flex items-center gap-2 text-cyan-400 text-sm">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-100" />

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-200" />

              <span className="ml-2">

                Analyzing telemetry...

              </span>

            </div>

          </div>

        )}

        <div ref={chatEndRef} />

      </div>

      {/* INPUT */}

      <div className="mt-4 flex gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {

            if (e.key === "Enter") {

              sendMessage();

            }

          }}
          placeholder="Ask Sentinel AI..."
          className="flex-1 bg-black border border-cyan-500/20 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 text-sm text-white placeholder:text-zinc-500 transition-all"
        />

        <button
          onClick={sendMessage}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-6 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:scale-105"
        >

          Send

        </button>

      </div>

    </div>

  );
}