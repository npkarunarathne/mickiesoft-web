"use client"

import React from "react"
import { 
  Users, 
  Globe, 
  Smartphone, 
  Server, 
  Sparkles, 
  FlaskConical, 
  Cpu, 
  Network, 
  BarChart3,
  ArrowDown
} from "lucide-react"

export function HealthcareArchitectureVisual() {
  return (
    <div 
      className="w-full max-w-4xl mx-auto p-6 md:p-10 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-2xl"
      role="img"
      aria-label="Healthcare software architecture connecting web and mobile applications with AI, laboratories, devices and external systems"
    >
      {/* Tier 1: Users */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-md p-3.5 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>End Users & Stakeholders</span>
          </div>
          <div className="text-sm font-medium text-foreground">
            Patients • Caregivers • Physicians • Nurses • Lab Staff • Administrators
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-2" aria-hidden="true" />

        {/* Tier 2: Frontends */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
          <div className="p-4 rounded-2xl bg-background border border-border/80 text-center shadow-xs">
            <div className="inline-flex p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-2">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-sm font-semibold text-foreground">Web Applications</div>
            <div className="text-xs text-muted-foreground mt-0.5">Doctor Portals, Admin Dashboards & EHR UI</div>
          </div>

          <div className="p-4 rounded-2xl bg-background border border-border/80 text-center shadow-xs">
            <div className="inline-flex p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-2">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="text-sm font-semibold text-foreground">Mobile Applications</div>
            <div className="text-xs text-muted-foreground mt-0.5">iOS & Android Patient Portals & Telehealth</div>
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-2" aria-hidden="true" />

        {/* Tier 3: Core Backend & Cloud Platform */}
        <div className="w-full max-w-xl p-5 rounded-2xl bg-primary/5 border border-primary/20 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-1">
            <Server className="w-4 h-4" />
            <span>Core Backend • Scalable Cloud & Secure APIs</span>
          </div>
          <div className="text-sm font-semibold text-foreground">
            Authentication, Business Logic, Role-Based Access & Event Streaming
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Zero-Trust Data Flow • Rate Limiting • Secure Encrypted Bus
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-2" aria-hidden="true" />

        {/* Tier 4: Connected Systems Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
          <div className="p-3.5 rounded-2xl bg-surface border border-border/80 text-center">
            <div className="inline-flex p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-foreground">AI Services</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Assisted Triage & OCR</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface border border-border/80 text-center">
            <div className="inline-flex p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
              <FlaskConical className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-foreground">Lab Systems</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">LIMS & Report Ingestion</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface border border-border/80 text-center">
            <div className="inline-flex p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 mb-2">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-foreground">Medical Devices</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">IoMT & Vitals Ingestion</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-surface border border-border/80 text-center">
            <div className="inline-flex p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-2">
              <Network className="w-4 h-4" />
            </div>
            <div className="text-xs font-semibold text-foreground">External APIs</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">EHR, Billing & Identity</div>
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-2" aria-hidden="true" />

        {/* Tier 5: Operational Outcomes */}
        <div className="w-full max-w-md p-3.5 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <BarChart3 className="w-4 h-4" />
            <span>Data • Reporting • Operational Workflows</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Auditable Logs, Patient Care Insights, and Clinical Decision Support
          </div>
        </div>
      </div>
    </div>
  )
}
