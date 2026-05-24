"use client";

import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function TelemetryCharts() {

  const [data, setData] = useState([
    { cpu: 45 },
    { cpu: 52 },
    { cpu: 61 },
    { cpu: 58 },
    { cpu: 73 },
    { cpu: 68 },
  ]);

  const [time, setTime] = useState("");

  useEffect(() => {

    const telemetryInterval = setInterval(() => {

      setData((prev) => {

        const nextValue =
          Math.floor(Math.random() * 40) + 40;

        return [
          ...prev.slice(1),
          { cpu: nextValue },
        ];

      });

    }, 2000);

    const clockInterval = setInterval(() => {

      const now = new Date();

      setTime(
        now.toLocaleTimeString()
      );

    }, 1000);

    return () => {

      clearInterval(telemetryInterval);

      clearInterval(clockInterval);

    };

  }, []);

  return (
    <div className="h-full flex flex-col justify-between">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">

        <div>

          <p className="text-cyan-400 text-xs uppercase font-bold tracking-widest">

            Live Telemetry

          </p>

          <p className="text-zinc-500 text-xs mt-1">

            Real-time Infrastructure Metrics

          </p>

        </div>

        {/* CLOCK */}
        <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-xl">

          <p className="text-cyan-300 font-mono text-sm">

            {time}

          </p>

        </div>

      </div>

      {/* CHART */}
      <div className="flex-1">

        <ResponsiveContainer width="100%" height={220}>

          <LineChart data={data}>

            <Tooltip
              contentStyle={{
                background: "#09090b",
                border: "1px solid rgba(0,255,255,0.2)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="cpu"
              stroke="#00ffff"
              strokeWidth={3}
              dot={false}
              isAnimationActive
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* FOOTER METRICS */}
      <div className="grid grid-cols-3 gap-3 mt-4">

        <div className="bg-black/40 border border-cyan-500/10 rounded-xl p-3">

          <p className="text-zinc-500 text-xs mb-1">

            Network

          </p>

          <p className="text-cyan-300 font-bold">

            Stable

          </p>

        </div>

        <div className="bg-black/40 border border-purple-500/10 rounded-xl p-3">

          <p className="text-zinc-500 text-xs mb-1">

            Region

          </p>

          <p className="text-purple-300 font-bold">

            AP-SOUTH

          </p>

        </div>

        <div className="bg-black/40 border border-green-500/10 rounded-xl p-3">

          <p className="text-zinc-500 text-xs mb-1">

            Status

          </p>

          <p className="text-green-300 font-bold">

            Online

          </p>

        </div>

      </div>

    </div>
  );
}