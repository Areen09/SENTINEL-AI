"use client";

import { useEffect, useState } from "react";

const baseLogs = [
  "Kubernetes deployment initiated",
  "Redis memory usage exceeded 92%",
  "API Gateway latency crossed threshold",
];

export default function LiveLogs() {

  const [logs, setLogs] = useState(baseLogs);

  useEffect(() => {

    const interval = setInterval(() => {

      const id = Math.floor(Math.random() * 9999);

      setLogs((prev) => [
        `AI detected anomaly #${id}`,
        ...prev.slice(0, 5),
      ]);

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="space-y-2 text-sm font-mono">

      {logs.map((log, index) => (

        <div
          key={index}
          className="bg-black/40 border border-zinc-800 rounded-xl p-3 text-green-400"
        >
          {log}
        </div>

      ))}

    </div>
  );
}