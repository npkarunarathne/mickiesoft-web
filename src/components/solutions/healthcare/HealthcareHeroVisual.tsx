"use client"

import React from "react"
import Image from "next/image"
import { Activity, ShieldCheck, HeartPulse } from "lucide-react"

export function HealthcareHeroVisual() {
  return (
    <div 
      className="relative w-full max-w-lg mx-auto"
      role="img"
      aria-label="Healthcare mobile app and connected medical telemetry platform"
    >
      {/* Subtle Background Glows */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Image Container */}
      <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl shadow-primary/10 group">
        <Image
          src="/images/solutions/healthcare-app-hero.jpg"
          alt="Modern healthcare app interface showing patient telemetry, heart rate vitals, and secure cloud synchronization"
          width={700}
          height={700}
          priority
          className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Floating Glass Pill: Live Vitals */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 backdrop-blur-md bg-background/80 dark:bg-background/70 border border-border/80 shadow-lg rounded-2xl px-3.5 py-2 flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
            <HeartPulse className="h-4 w-4 animate-pulse text-primary" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <span>Live Patient Telemetry</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="text-[10px] text-muted-foreground">Continuous Vitals Sync</div>
          </div>
        </div>

        {/* Floating Glass Pill: Security & Compliance */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 backdrop-blur-md bg-background/80 dark:bg-background/70 border border-border/80 shadow-lg rounded-2xl px-3.5 py-2 flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-foreground">Secure Health Data</div>
            <div className="text-[10px] text-muted-foreground">HIPAA & GDPR Architecture</div>
          </div>
        </div>
      </div>
    </div>
  )
}
