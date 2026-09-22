"use client"

import React from "react"
import { 
  Radio, 
  Cpu, 
  Wifi, 
  Cloud, 
  LayoutDashboard, 
  Users, 
  ArrowRight, 
  ArrowDown 
} from "lucide-react"

export function DeviceArchitectureVisual() {
  const steps = [
    {
      step: "01",
      title: "Healthcare Device",
      desc: "Hardware sensors, monitors, vitals trackers, or diagnostic equipment",
      icon: Radio,
      badge: "Hardware Layer"
    },
    {
      step: "02",
      title: "Embedded Software",
      desc: "Firmware, microcontrollers, edge processing, and local buffer management",
      icon: Cpu,
      badge: "Edge Logic"
    },
    {
      step: "03",
      title: "Connectivity & API",
      desc: "BLE, MQTT, WebSocket, secure telemetry, and protocol bridges",
      icon: Wifi,
      badge: "Transport"
    },
    {
      step: "04",
      title: "Cloud & Backend",
      desc: "Scalable ingestion pipelines, time-series data storage, and analytics",
      icon: Cloud,
      badge: "Platform"
    },
    {
      step: "05",
      title: "Web & Mobile Apps",
      desc: "Live charts, real-time alert feeds, patient history, and clinician consoles",
      icon: LayoutDashboard,
      badge: "Experience"
    },
    {
      step: "06",
      title: "Clinician & Patient",
      desc: "Actionable health insights, prompt interventions, and remote monitoring",
      icon: Users,
      badge: "Outcome"
    }
  ]

  return (
    <div 
      className="w-full max-w-5xl mx-auto p-6 md:p-8 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-xl"
      role="img"
      aria-label="Healthcare device integration connecting embedded software with cloud, web and mobile applications"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((item, idx) => {
          const Icon = item.icon
          return (
            <div 
              key={idx} 
              className="relative p-5 rounded-2xl bg-surface/80 border border-border/70 flex flex-col justify-between hover:border-primary/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-muted-foreground/60">
                    Step {item.step}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="mt-4 pt-2 border-t border-border/40 hidden lg:flex items-center text-[10px] text-muted-foreground/70 gap-1">
                  <span>Connects to step {idx + 2}</span>
                  <ArrowRight className="w-3 h-3 text-primary" aria-hidden="true" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
