"use client";

import { motion } from "framer-motion";

export default function ThreatAlert() {

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 right-6 z-50"
    >

      <div className="bg-red-500/20 backdrop-blur-xl border border-red-500/40 rounded-2xl p-5 shadow-[0_0_25px_rgba(239,68,68,0.4)]">

        <div className="flex items-center gap-3">

          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />

          <div>

            <h2 className="text-red-400 font-bold text-lg">
              Critical Threat Detected
            </h2>

            <p className="text-zinc-300 text-sm">
              API latency spike affecting payment systems.
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}