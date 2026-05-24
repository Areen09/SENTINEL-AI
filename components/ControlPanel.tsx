"use client";

import { useState } from "react";

export default function ControlPanel() {

  const [status, setStatus] = useState("System Stable");

  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6 text-white">
        Incident Controls
      </h2>

      <div className="flex gap-4 mb-6">

        <button
          onClick={() => setStatus("Critical Incident Detected")}
          className="bg-red-500 hover:bg-red-600 hover:scale-105 transition-all px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(239,68,68,0.4)]"
        >
          Simulate Incident
        </button>

        <button
          onClick={() => setStatus("System Stable")}
          className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          Resolve Incident
        </button>

      </div>

      <div className="bg-black/40 border border-zinc-800 rounded-xl p-4">

        <p className="text-zinc-400 text-sm mb-2">
          AI Status Monitor
        </p>

        <h3 className="text-2xl font-bold text-emerald-400 animate-pulse">
          {status}
        </h3>

      </div>

    </div>
  );
}