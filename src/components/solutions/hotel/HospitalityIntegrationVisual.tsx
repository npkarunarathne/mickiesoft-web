"use client"

import React from "react"
import { 
  Layers, 
  Network, 
  ArrowDown, 
  Globe, 
  HeartHandshake, 
  CheckCircle2, 
  Building2,
  RefreshCw
} from "lucide-react"

export function HospitalityIntegrationVisual() {
  return (
    <div 
      className="w-full max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-card/70 backdrop-blur-xl border border-border/80 shadow-2xl"
      role="img"
      aria-label="Hotel website integration with booking engine and hospitality systems"
    >
      <div className="flex flex-col items-center">

        {/* Tier 1: Existing Hospitality Stack */}
        <div className="w-full">
          <div className="text-center mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Layer 01: Your Existing Hospitality Platforms
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
              <div className="inline-flex p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-2">
                <Layers className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-foreground">Booking Engine</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Rates, Rules & Policies</div>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
              <div className="inline-flex p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-2">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-foreground">PMS</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Room Inventory & Folios</div>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
              <div className="inline-flex p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-2">
                <RefreshCw className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-foreground">Channel Manager</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Distribution Sync</div>
            </div>

            <div className="p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
              <div className="inline-flex p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-2">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div className="text-xs font-bold text-foreground">CRM / Guest DB</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Profiles & Preferences</div>
            </div>
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-4" aria-hidden="true" />

        {/* Tier 2: Integration & Abstraction Layer */}
        <div className="w-full max-w-2xl p-5 rounded-2xl bg-primary/10 border-2 border-primary/30 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1">
            <Network className="w-4 h-4" />
            <span>Mickiesoft Integration & Synchronization Layer</span>
          </div>
          <div className="text-sm font-semibold text-foreground">
            APIs • Webhooks • Embeddable Widgets • Secure Middleware
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Validating availability, formatting rates, and ensuring real-time data sync where supported
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-4" aria-hidden="true" />

        {/* Tier 3: New Mickiesoft Hotel Website */}
        <div className="w-full max-w-xl p-5 rounded-2xl bg-surface border border-border/90 text-center shadow-md">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground mb-1">
            <Globe className="w-4 h-4 text-primary" />
            <span>New Custom Mickiesoft Hotel Website</span>
          </div>
          <div className="text-sm font-medium text-muted-foreground">
            Fast, responsive, branded property showcase with friction-free booking pathways
          </div>
        </div>

        <ArrowDown className="w-5 h-5 text-primary/60 my-4" aria-hidden="true" />

        {/* Tier 4: Measurable Guest Experience */}
        <div className="w-full max-w-lg p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center shadow-xs">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            <CheckCircle2 className="w-4 h-4" />
            <span>Improved Guest Experience & Direct Confidence</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Clearer room decisions, straightforward booking journeys, and fewer lost reservations
          </div>
        </div>

      </div>
    </div>
  )
}
