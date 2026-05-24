"use client";

import { useEffect, useState } from "react";

const predictions = [
  "Redis saturation may trigger payment failures.",
  "Database instability predicted within 12 minutes.",
  "Potential Kubernetes node exhaustion detected.",
];

export default function PredictionEngine() {

  const [prediction, setPrediction] =
    useState(predictions[0]);

  useEffect(() => {

    const interval = setInterval(() => {

      setPrediction(
        predictions[
          Math.floor(Math.random() * predictions.length)
        ]
      );

    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 h-full">

      <p className="text-red-400 text-xs uppercase font-bold mb-3">

        AI Prediction Engine

      </p>

      <p className="text-sm text-zinc-200 leading-relaxed">

        {prediction}

      </p>

    </div>
  );
}