
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
      const isSpike = Math.random() > 0.85;

      setCpu((prev) =>
        Math.min(100, Math.max(20, prev + (isSpike ? Math.random() * 40 - 15 : Math.random() * 6 - 3)))
      );

      setIncidents((prev) =>
        Math.max(0, prev + (isSpike ? Math.floor(Math.random() * 4 - 1) : 0))
      );

      setConfidence((prev) =>
        Math.min(100, Math.max(85, prev + (Math.random() * 4 - 2)))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 relative font-sans">
      
      {/* BACKGROUND - Clean, deep, and atmospheric */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        {/* Soft glowing orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen" />
        
        {/* Crisp minimal grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)] opacity-60" />
      </div>

      {/* MAIN LAYOUT */}
      <main className="relative z-10 p-4 md:p-8 lg:p-10 max-w-[2560px] mx-auto flex flex-col gap-8">
        
        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-zinc-900/80 rounded-2xl border border-white/5 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <Activity className="text-cyan-400 w-8 h-8 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
                Sentinel AI
              </h1>
            </div>
            <p className="text-zinc-500 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase pl-[72px]">
              Autonomous Infrastructure Intelligence
            </p>
          </div>

          {/* STATUS INDICATOR */}
          <div className="bg-zinc-900/50 border border-cyan-500/20 backdrop-blur-2xl px-6 py-3 rounded-full flex items-center gap-4 shadow-lg w-fit">
            <div className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></span>
            </div>
            <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">
              System Active
            </p>
          </div>
        </header>

        {/* KEY METRICS (4 Columns) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Cpu className="text-cyan-400 w-7 h-7" />}
            label="Compute Load"
            value={`${Math.round(cpu)}%`}
            accentColor="cyan"
          />
          <StatCard
            icon={<ShieldAlert className="text-red-400 w-7 h-7 animate-pulse group-hover:animate-none" />}
            label="Threat Level"
            value="HIGH"
            accentColor="red"
          />
          <StatCard
            icon={<Database className="text-purple-400 w-7 h-7" />}
            label="Active Incidents"
            value={incidents}
            accentColor="purple"
          />
          <StatCard
            icon={<Zap className="text-green-400 w-7 h-7" />}
            label="AI Confidence"
            value={`${Math.round(confidence)}%`}
            accentColor="green"
          />
        </section>

        {/* BENTO GRID MAIN SECTION (12 Columns) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ROW 1: Hero Visuals */}
          <div className="md:col-span-12 lg:col-span-8 h-[450px] lg:h-[550px]">
            <DashboardPanel title="Global Threat Map" accentColor="cyan">
              <GlobalMap />
            </DashboardPanel>
          </div>
          <div className="md:col-span-12 lg:col-span-4 h-[450px] lg:h-[550px]">
            <DashboardPanel title="Live Threat Feed" accentColor="red">
              <ThreatFeed />
            </DashboardPanel>
          </div>

          {/* ROW 2: Analytics & AI */}
          <div className="md:col-span-12 lg:col-span-6 h-[400px]">
            <DashboardPanel title="Telemetry & Network Traffic" accentColor="purple">
              <TelemetryCharts />
            </DashboardPanel>
          </div>
          <div className="md:col-span-6 lg:col-span-3 h-[400px]">
            <DashboardPanel title="AI Copilot Assist" accentColor="cyan">
              <AICopilot />
            </DashboardPanel>
          </div>
          <div className="md:col-span-6 lg:col-span-3 h-[400px]">
            <DashboardPanel title="Intelligence Core" accentColor="blue">
              <IntelligenceCore />
            </DashboardPanel>
          </div>

          {/* ROW 3: Logs & Actions */}
          <div className="md:col-span-12 lg:col-span-5 h-[350px]">
            <DashboardPanel title="System Activity Logs" accentColor="zinc">
              <LiveLogs />
            </DashboardPanel>
          </div>
          <div className="md:col-span-6 lg:col-span-4 h-[350px]">
            <DashboardPanel title="Incident Timeline" accentColor="orange">
              <IncidentTimeline />
            </DashboardPanel>
          </div>
          <div className="md:col-span-6 lg:col-span-3 h-[350px]">
            <DashboardPanel title="Autonomous Actions" accentColor="green">
              <AutonomousActions />
            </DashboardPanel>
          </div>

        </section>
      </main>
    </div>
  );
}

/* =========================================
   COMPONENTS
========================================= */

function StatCard({
  icon,
  label,
  value,
  accentColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  accentColor: "cyan" | "red" | "purple" | "green";
}) {
  const hoverBorders = {
    cyan: "hover:border-cyan-500/30",
    red: "hover:border-red-500/30",
    purple: "hover:border-purple-500/30",
    green: "hover:border-green-500/30",
  };

  return (
    <div className={`group bg-zinc-900/30 backdrop-blur-2xl border border-white/5 rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 overflow-hidden relative cursor-default shadow-xl ${hoverBorders[accentColor]}`}>
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white-[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="p-3 bg-zinc-950/50 rounded-2xl border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <p className="text-zinc-500 font-bold text-xs md:text-sm uppercase tracking-[0.15em] group-hover:text-zinc-300 transition-colors duration-500">
          {label}
        </p>
      </div>
      <p className="text-4xl md:text-5xl font-black font-mono tracking-tighter relative z-10 text-white drop-shadow-md">
        {value}
      </p>
    </div>
  );
}

function DashboardPanel({
  title,
  children,
  accentColor = "zinc",
}: {
  title: string;
  children: React.ReactNode;
  accentColor?: "cyan" | "red" | "purple" | "green" | "blue" | "orange" | "zinc";
}) {
  const dotColors = {
    cyan: "bg-cyan-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    zinc: "bg-zinc-500",
  };

  return (
    <div className="group bg-zinc-900/20 backdrop-blur-2xl border border-white/5 rounded-3xl flex flex-col h-full overflow-hidden shadow-2xl transition-all duration-500 hover:bg-zinc-900/40 hover:border-white/10 relative">
      
      {/* Top Header Bar inside Panel */}
      <div className="px-6 py-4 border-b border-white/5 bg-zinc-950/40 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${dotColors[accentColor]} shadow-[0_0_8px_currentColor] opacity-70 group-hover:opacity-100 transition-opacity`} />
          <h3 className="font-bold text-xs tracking-[0.2em] text-zinc-400 uppercase group-hover:text-zinc-100 transition-colors duration-500">
            {title}
          </h3>
        </div>
        
        {/* Decorative Terminal Dots */}
        <div className="flex gap-1.5 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 overflow-y-auto overflow-x-hidden relative z-0 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
        {children}
      </div>
      
    </div>
  );
}

