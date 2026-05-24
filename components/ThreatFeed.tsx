"use client";

import { useEffect, useState } from "react";

const alerts = [
  "Redis memory spike detected",
  "API latency exceeded threshold",
  "Kubernetes autoscaling initiated",
  "Database replication lag increasing",
  "DDoS traffic pattern identified",
  "Authentication failure anomaly detected",
];

export default function ThreatFeed() {

  const [threats, setThreats] = useState(alerts);

  useEffect(() => {

    const interval = setInterval(() => {

      const shuffled =
        [...alerts].sort(() => 0.5 - Math.random());

      setThreats(shuffled);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="space-y-3">

      {threats.map((threat, index) => (

        <div
          key={index}
          className={`p-4 rounded-xl border text-sm font-medium animate-pulse ${
            index % 3 === 0
              ? "bg-red-500/10 border-red-500/20 text-red-300"
              : index % 3 === 1
              ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
              : "bg-cyan-500/10 border-cyan-500/20 text-cyan-300"
          }`}
        >
          {threat}
        </div>

      ))}

    </div>
  );
}