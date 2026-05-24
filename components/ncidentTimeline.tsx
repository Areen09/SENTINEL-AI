"use client";

const incidents = [

  {
    time: "14:06:21",
    title: "API Gateway latency spike detected",
    severity: "critical",
  },

  {
    time: "14:06:28",
    title: "AI anomaly engine triggered escalation",
    severity: "high",
  },

  {
    time: "14:06:35",
    title: "Redis cache memory exceeded threshold",
    severity: "medium",
  },

  {
    time: "14:06:41",
    title: "Autonomous remediation workflow executed",
    severity: "low",
  },

  {
    time: "14:06:52",
    title: "Firewall rules synchronized globally",
    severity: "low",
  },

  {
    time: "14:07:01",
    title: "Zero-day exploit attempt blocked",
    severity: "critical",
  },

];

export default function IncidentTimeline() {

  return (

    <div className="h-full overflow-y-auto pr-2 space-y-4">

      {incidents.map((incident, index) => (

        <div
          key={index}
          className="relative pl-8 pb-6 border-l border-cyan-500/20"
        >

          {/* DOT */}
          <div
            className={`absolute left-[-7px] top-1 w-3 h-3 rounded-full ${
              incident.severity === "critical"
                ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                : incident.severity === "high"
                ? "bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]"
                : incident.severity === "medium"
                ? "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                : "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"
            }`}
          />

          {/* TIME */}
          <p className="text-xs text-cyan-400 font-mono mb-1">

            {incident.time}

          </p>

          {/* TITLE */}
          <h3 className="text-sm text-zinc-200 font-medium">

            {incident.title}

          </h3>

          {/* SEVERITY */}
          <div className="mt-2">

            <span
              className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${
                incident.severity === "critical"
                  ? "border-red-500/30 text-red-400 bg-red-500/10"
                  : incident.severity === "high"
                  ? "border-orange-500/30 text-orange-400 bg-orange-500/10"
                  : incident.severity === "medium"
                  ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/10"
                  : "border-green-500/30 text-green-400 bg-green-500/10"
              }`}
            >

              {incident.severity}

            </span>

          </div>

        </div>

      ))}

    </div>

  );
}