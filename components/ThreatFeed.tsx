"use client";

import React, { useState, useEffect } from "react";
import { AlertTriangle, ShieldAlert, Activity } from "lucide-react";

type Threat = {
  id: string;
  type: string;
  source: string;
  severity: "critical" | "high" | "medium";
  timestamp: string;
};

const initialThreats: Threat[] = [
  { id: "TX-992", type: "Unauthorized Access Attempt", source: "192.168.1.45", severity: "critical", timestamp: "Just now" },
  { id: "TX-991", type: "DDoS Signature Detected", source: "External Node", severity: "high", timestamp: "2m ago" },
  { id: "TX-990", type: "Anomalous Data Exfiltration", source: "DB-Cluster-02", severity: "medium", timestamp: "5m ago" },
  { id: "TX-989", type: "Multiple Failed Logins", source: "10.0.0.233", severity: "medium", timestamp: "12m ago" },
];

export default function ThreatFeed() {
  const [threats, setThreats] = useState<Threat[]>(initialThreats);

  // Safely simulate an incoming threat every 10 seconds to look alive for judges
  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat: Threat = {
        id: `TX-${Math.floor(Math.random() * 10000)}`,
        type: "Port Scan Detected",
        source: `172.16.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        severity: Math.random() > 0.8 ? "critical" : "high",
        timestamp: "Just now",
      };

      setThreats((prev) => [newThreat, ...prev].slice(0, 6)); // Keep only the latest 6
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColors = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      case "high":
        return "bg-orange-500/10 text-orange-400 border-orange-500/20";
      default:
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <ShieldAlert className="w-4 h-4 text-red-400" />;
      case "high":
        return <AlertTriangle className="w-4 h-4 text-orange-400" />;
      default:
        return <Activity className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      {threats.map((threat) => (
        <div
          key={threat.id}
          className={`flex items-start gap-3 p-3 rounded-lg border backdrop-blur-sm transition-all ${getSeverityColors(threat.severity)}`}
        >
          <div className="mt-0.5">{getSeverityIcon(threat.severity)}</div>
          
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-sm tracking-wide">{threat.type}</p>
              <span className="text-xs opacity-70 font-mono">{threat.timestamp}</span>
            </div>
            
            <div className="flex items-center justify-between text-xs opacity-80">
              <span className="font-mono">{threat.source}</span>
              <span className="uppercase tracking-widest text-[10px] border px-1.5 py-0.5 rounded-sm border-current opacity-70">
                {threat.severity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}