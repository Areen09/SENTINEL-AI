"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";

export default function Charts() {

  const [data, setData] = useState([
    { time: "2:00", cpu: 20 },
    { time: "2:01", cpu: 35 },
    { time: "2:02", cpu: 60 },
    { time: "2:03", cpu: 90 },
  ]);

  useEffect(() => {

    const interval = setInterval(() => {

      setData((prev) => {

        const newPoint = {
          time: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60)}`,
          cpu: Math.floor(Math.random() * 100),
        };

        return [...prev.slice(-5), newPoint];
      });

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-zinc-900/20 p-6 rounded-2xl">

      <h2 className="text-xl mb-4 text-white font-bold">
        Live CPU Usage
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="time" stroke="#888" />

            <YAxis stroke="#888" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="cpu"
              stroke="#22c55e"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}