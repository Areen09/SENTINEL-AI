"use client";

import React, { useEffect, useState } from "react";

import {
  Cpu,
  ShieldAlert,
  Database,
  Zap,
  Activity,
} from "lucide-react";

import ThreatFeed from "@/components/ThreatFeed";
import IntelligenceCore from "@/components/IntelligenceCore";
import GlobalMap from "@/components/GlobalMap";
import AICopilot from "@/components/AICopilot";
import TelemetryCharts from "@/components/TelemetryCharts";
import LiveLogs from "@/components/LiveLogs";
import AutonomousActions from "@/components/AutonomousActions";
import PredictionEngine from "@/components/PredictionEngine";
import IncidentTimeline from "@/components/IncidentTimeline";

export default function Dashboard() {

  const [mounted, setMounted] = useState(false);

  const [cpu, setCpu] = useState(84);
  const [incidents, setIncidents] = useState(12);
  const [confidence, setConfidence] = useState(96);

  useEffect(() => {

    setMounted(true);

    const interval = setInterval(() => {

      setCpu((prev) =>
        Math.min(100, Math.max(20, prev + (Math.random() * 10 - 5)))
      );

      setIncidents((prev) =>
        Math.max(0, prev + Math.floor(Math.random() * 3 - 1))
      );

      setConfidence((prev) =>
        Math.min(100, Math.max(85, prev + (Math.random() * 4 - 2)))
      );

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  if (!mounted) return null;

  return (

    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500/30 relative font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-950 to-black" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      </div>

      {/* MAIN */}
      <main className="relative z-10 p-4 md:p-6 lg:p-8 max-w-[1920px] mx-auto space-y-6">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-white/10">

          <div className="space-y-1">

            <div className="flex items-center gap-2">

              <Activity className="text-cyan-400 w-8 h-8 animate-pulse" />

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">

                Sentinel AI

              </h1>

            </div>

            <p className="text-zinc-400 font-medium tracking-wide text-sm md:text-base uppercase">

              Autonomous Infrastructure Intelligence

            </p>

          </div>

          {/* STATUS */}
          <div className="bg-zinc-900/80 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-xl px-5 py-2.5 rounded-full flex items-center gap-3 w-fit">

            <div className="relative flex h-3 w-3">

              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>

            </div>

            <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">

              System Active

            </p>

          </div>

        </header>

        {/* STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <StatCard
            icon={<Cpu className="text-cyan-400" />}
            label="Compute Load"
            value={`${Math.round(cpu)}%`}
            colorClass="border-cyan-500/20 shadow-cyan-500/5"
          />

          <StatCard
            icon={<ShieldAlert className="text-red-400" />}
            label="Threat Level"
            value="HIGH"
            colorClass="border-red-500/20 shadow-red-500/5 text-red-400 animate-pulse"
          />

          <StatCard
            icon={<Database className="text-purple-400" />}
            label="Active Incidents"
            value={incidents}
            colorClass="border-purple-500/20 shadow-purple-500/5"
          />

          <StatCard
            icon={<Zap className="text-green-400" />}
            label="AI Confidence"
            value={`${Math.round(confidence)}%`}
            colorClass="border-green-500/20 shadow-green-500/5 text-green-400"
          />

        </section>

        {/* TOP GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:h-[450px]">

          <DashboardPanel title="Threat Feed">

            <ThreatFeed />

          </DashboardPanel>

          <DashboardPanel title="Intelligence Core">

            <IntelligenceCore />

          </DashboardPanel>

          <DashboardPanel title="Global Map">

            <GlobalMap />

          </DashboardPanel>

        </section>

        {/* INCIDENT TIMELINE */}
        <section className="h-[320px]">

          <DashboardPanel title="Incident Timeline">

            <IncidentTimeline />

          </DashboardPanel>

        </section>

        {/* BOTTOM GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:min-h-[400px]">

          <div className="lg:col-span-2">

            <DashboardPanel title="AI Copilot">

              <AICopilot />

            </DashboardPanel>

          </div>

          <div className="lg:col-span-1">

            <DashboardPanel title="Telemetry">

              <TelemetryCharts />

            </DashboardPanel>

          </div>

          <div className="lg:col-span-1 flex flex-col gap-4">

            <div className="flex-1">

              <DashboardPanel title="Prediction Engine">

                <PredictionEngine />

              </DashboardPanel>

            </div>

            <div className="flex-1">

              <DashboardPanel title="Autonomous Actions">

                <AutonomousActions />

              </DashboardPanel>

            </div>

          </div>

        </section>

        {/* LOGS */}
        <section className="h-[250px]">

          <DashboardPanel title="Live Activity Logs">

            <LiveLogs />

          </DashboardPanel>

        </section>

      </main>

    </div>

  );
}

/* STAT CARD */

function StatCard({
  icon,
  label,
  value,
  colorClass,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  colorClass: string;
}) {

  return (

    <div className={`bg-zinc-950/50 backdrop-blur-md border rounded-2xl p-5 flex flex-col justify-between transition-all hover:bg-zinc-900/60 shadow-lg ${colorClass}`}>

      <div className="flex items-center gap-3 mb-4">

        <div className="p-2 bg-white/5 rounded-lg">

          {icon}

        </div>

        <p className="text-zinc-400 font-medium text-sm uppercase tracking-wider">

          {label}

        </p>

      </div>

      <p className="text-4xl font-black font-mono tracking-tight">

        {value}

      </p>

    </div>

  );
}

/* PANEL */

function DashboardPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {

  return (

    <div className="bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl hover:border-white/20 transition-colors">

      <div className="px-4 py-3 border-b border-white/5 bg-white/5">

        <h3 className="font-semibold text-sm tracking-wide text-zinc-300 uppercase">

          {title}

        </h3>

      </div>

      <div className="p-4 flex-1 overflow-auto relative">

        {children}

      </div>

    </div>

  );
}