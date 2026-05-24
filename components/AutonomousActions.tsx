"use client";

import { useEffect, useState } from "react";

const actions = [
  "Scaling Kubernetes pods...",
  "Restarting Redis cluster...",
  "Isolating suspicious traffic...",
  "Triggering deployment rollback...",
];

export default function AutonomousActions() {

  const [action, setAction] = useState(actions[0]);

  useEffect(() => {

    const interval = setInterval(() => {

      setAction(
        actions[
          Math.floor(Math.random() * actions.length)
        ]
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 h-full">

      <div className="flex items-center gap-3 mb-4">

        <div className="w-3 h-3 bg-green-400 rounded-full animate-ping" />

        <p className="text-green-400 text-xs uppercase font-bold">

          AI Agent Active

        </p>

      </div>

      <p className="text-lg font-semibold">

        {action}

      </p>

    </div>
  );
}