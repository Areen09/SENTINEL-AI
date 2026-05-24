"use client";

import { useEffect, useState } from "react";

const incidentMessages = [

  "API latency spike detected",
  "Redis memory threshold exceeded",
  "AI anomaly escalation triggered",
  "Unauthorized access blocked",
  "Database timeout detected",
  "Autonomous remediation executed",
  "Edge node synchronization failed",
  "Traffic spike mitigation enabled",
  "Zero-day exploit prevented",
  "Cloud workload imbalance detected",

];

type Incident = {
  id: number;
  time: string;
  message: string;
};

export default function IncidentTimeline() {

  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {

    let currentTime = new Date();

    const generateIncident = () => {

      currentTime = new Date(currentTime.getTime() + 3000);

      const formattedTime = currentTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      const randomMessage =
        incidentMessages[
          Math.floor(Math.random() * incidentMessages.length)
        ];

      return {
        id: Date.now() + Math.random(),
        time: formattedTime,
        message: randomMessage,
      };
    };

    const initialIncidents: Incident[] = [];

    for (let i = 0; i < 6; i++) {

      initialIncidents.unshift(generateIncident());

    }

    setIncidents(initialIncidents);

    const interval = setInterval(() => {

      setIncidents((prev) => [

        generateIncident(),

        ...prev.slice(0, 9),

      ]);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="h-full overflow-y-auto pr-2 space-y-3">

      {incidents.map((incident) => (

        <div
          key={incident.id}
          className="border border-red-500/20 bg-black/40 rounded-xl px-4 py-3 hover:bg-red-500/5 transition-all"
        >

          <div className="flex items-center justify-between">

            <p className="text-red-400 text-xs font-mono tracking-wider">

              {incident.time}

            </p>

            <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-red-500/30 text-red-400 bg-red-500/10">

              Critical

            </span>

          </div>

          <p className="text-zinc-200 text-sm mt-3 font-medium">

            {incident.message}

          </p>

        </div>

      ))}

    </div>

  );
}