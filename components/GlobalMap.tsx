"use client";

const nodes = [

  { id: "CORE", x: 50, y: 50, type: "core" },

  { id: "AI", x: 30, y: 25, type: "service" },
  { id: "Telemetry", x: 70, y: 28, type: "service" },
  { id: "Logs", x: 25, y: 65, type: "service" },
  { id: "Prediction", x: 72, y: 68, type: "service" },

  { id: "Node-01", x: 18, y: 40, type: "edge" },
  { id: "Node-02", x: 82, y: 40, type: "edge" },
  { id: "Node-03", x: 42, y: 15, type: "edge" },
  { id: "Node-04", x: 60, y: 15, type: "edge" },
  { id: "Node-05", x: 15, y: 78, type: "edge" },
  { id: "Node-06", x: 85, y: 78, type: "edge" },

];

const connections = [

  ["CORE", "AI"],
  ["CORE", "Telemetry"],
  ["CORE", "Logs"],
  ["CORE", "Prediction"],

  ["AI", "Node-01"],
  ["AI", "Node-03"],

  ["Telemetry", "Node-02"],
  ["Telemetry", "Node-04"],

  ["Logs", "Node-05"],

  ["Prediction", "Node-06"],

  ["AI", "Telemetry"],
  ["Telemetry", "Prediction"],
  ["Logs", "Prediction"],

];

export default function GlobalMap() {

  const getNode = (id: string) =>
    nodes.find((n) => n.id === id);

  return (

    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-black">

      {/* GRID */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* RADIAL GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_70%)]" />

      {/* NETWORK CONNECTIONS */}

      <svg className="absolute inset-0 w-full h-full">

        {connections.map(([from, to], index) => {

          const start = getNode(from);
          const end = getNode(to);

          if (!start || !end) return null;

          return (

            <g key={index}>

              {/* MAIN LINE */}

              <line
                x1={`${start.x}%`}
                y1={`${start.y}%`}
                x2={`${end.x}%`}
                y2={`${end.y}%`}
                stroke="rgba(0,255,255,0.18)"
                strokeWidth="1.5"
              />

              {/* ANIMATED FLOW */}

              <circle r="2" fill="#22d3ee">

                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path={`M ${start.x * 10} ${start.y * 10} L ${end.x * 10} ${end.y * 10}`}
                />

              </circle>

            </g>

          );

        })}

      </svg>

      {/* MESH PARTICLES */}

      {[...Array(80)].map((_, i) => (

        <div
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full bg-cyan-400/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

      {/* NODES */}

      {nodes.map((node, index) => (

        <div
          key={index}
          className="absolute flex flex-col items-center"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >

          {/* PULSE */}

          <div
            className={`absolute rounded-full animate-ping ${
              node.type === "core"
                ? "w-20 h-20 bg-cyan-400/10"
                : "w-10 h-10 bg-cyan-400/10"
            }`}
          />

          {/* NODE */}

          <div
            className={`relative rounded-full border ${
              node.type === "core"
                ? "w-7 h-7 bg-cyan-300 border-cyan-200 shadow-[0_0_35px_rgba(34,211,238,1)]"
                : node.type === "service"
                ? "w-5 h-5 bg-cyan-400 border-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
                : "w-3 h-3 bg-cyan-500 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
            }`}
          />

          {/* LABEL */}

          <p
            className={`mt-2 uppercase tracking-[0.2em] ${
              node.type === "core"
                ? "text-cyan-200 text-xs font-black"
                : "text-cyan-400 text-[10px] font-semibold"
            }`}
          >

            {node.id}

          </p>

        </div>

      ))}

      {/* CORE RINGS */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

        <div className="w-52 h-52 rounded-full border border-cyan-500/10 animate-pulse" />

        <div className="absolute inset-8 rounded-full border border-cyan-400/20" />

      </div>

      {/* LIVE STATUS */}

      <div className="absolute top-4 right-4 bg-black/70 border border-cyan-500/20 backdrop-blur-xl rounded-xl px-4 py-2">

        <div className="flex items-center gap-2">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <p className="text-green-400 text-xs uppercase tracking-[0.2em]">

            Network Stable

          </p>

        </div>

      </div>

      {/* FOOTER */}

      <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-cyan-500/60">

        Autonomous Infrastructure Mesh

      </div>

    </div>

  );
}