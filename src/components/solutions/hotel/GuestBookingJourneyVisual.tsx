"use client"

import React from "react"
import Image from "next/image"
import { 
  Search, 
  Share2, 
  Megaphone, 
  UserCheck, 
  Compass, 
  BedDouble, 
  Utensils, 
  Sparkles, 
  MapPin, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  ArrowDown, 
  Server,
  Layers,
  Info
} from "lucide-react"

export function GuestBookingJourneyVisual() {
  return (
    <div 
      className="w-full max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-2xl space-y-10"
      role="img"
      aria-label="Hotel website booking journey from property discovery through availability and reservation"
    >
      {/* Top Notice: Clean connected flow */}
      <div className="text-center max-w-xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Connected Guest Experience & Technology Pipeline</span>
        </span>
      </div>

      {/* ── STAGE 1: Discovery Channels ────────────────────────── */}
      <div className="flex flex-col items-center">
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 text-center">
          Phase 01: Where Guest Discovery Begins
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-4xl">
          <div className="p-3 rounded-2xl bg-surface border border-border/80 text-center shadow-xs flex flex-col items-center justify-center gap-1.5">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Search className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-foreground">Google Search</span>
            <span className="text-[10px] text-muted-foreground">Organic & Local Pack</span>
          </div>

          <div className="p-3 rounded-2xl bg-surface border border-border/80 text-center shadow-xs flex flex-col items-center justify-center gap-1.5">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
              <Share2 className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-foreground">Social Discovery</span>
            <span className="text-[10px] text-muted-foreground">Visual Inspiration</span>
          </div>

          <div className="p-3 rounded-2xl bg-surface border border-border/80 text-center shadow-xs flex flex-col items-center justify-center gap-1.5">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Megaphone className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-foreground">Paid Campaigns</span>
            <span className="text-[10px] text-muted-foreground">Targeted Audiences</span>
          </div>

          <div className="p-3 rounded-2xl bg-surface border border-border/80 text-center shadow-xs flex flex-col items-center justify-center gap-1.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <UserCheck className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-foreground">Returning Guests</span>
            <span className="text-[10px] text-muted-foreground">Loyalty & Direct Traffic</span>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-surface border border-border/80 text-center shadow-xs flex flex-col items-center justify-center gap-1.5">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-foreground">Referrals</span>
            <span className="text-[10px] text-muted-foreground">OTAs & Travel Guides</span>
          </div>
        </div>

        <div className="my-3 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-primary/70 animate-bounce" aria-hidden="true" />
        </div>

        {/* ── STAGE 2: Hotel Website (The Central Experience) ─── */}
        <div className="w-full max-w-4xl p-6 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-background border-2 border-primary/30 shadow-lg relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-border/60 gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                The Central Experience: Your Hotel Website
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              Built to sell the stay and move visitors naturally toward booking
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4">
            <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-center">
              <Sparkles className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <div className="text-xs font-bold text-foreground">Property Story</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Atmosphere & Trust</div>
            </div>

            <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-center">
              <BedDouble className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <div className="text-xs font-bold text-foreground">Room Exploration</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Specs, Views & Pricing</div>
            </div>

            <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-center">
              <Utensils className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <div className="text-xs font-bold text-foreground">Dining & Wellness</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">On-site Experiences</div>
            </div>

            <div className="p-3 rounded-xl bg-background/80 border border-border/60 text-center">
              <CreditCard className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <div className="text-xs font-bold text-foreground">Direct Offers</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Exclusive Packages</div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-background/80 border border-border/60 text-center">
              <MapPin className="w-4 h-4 text-primary mx-auto mb-1.5" />
              <div className="text-xs font-bold text-foreground">Destination</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Location & Context</div>
            </div>
          </div>

          {/* Visual Vignette Thumbnails Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-border/60">
            <div className="relative h-28 rounded-xl overflow-hidden border border-border/70 group">
              <Image
                src="/images/solutions/hotel-hero-villa.jpg"
                alt="Property villa visual"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block">Vibe & Ambience</span>
                <span className="text-xs font-bold leading-tight block">Oceanfront Sanctuary</span>
              </div>
            </div>

            <div className="relative h-28 rounded-xl overflow-hidden border border-border/70 group">
              <Image
                src="/images/solutions/hotel-suite-interior.jpg"
                alt="Suite interior comparison visual"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block">Room Comparison</span>
                <span className="text-xs font-bold leading-tight block">Balcony Suite Specs</span>
              </div>
            </div>

            <div className="relative h-28 rounded-xl overflow-hidden border border-border/70 group">
              <Image
                src="/images/solutions/hotel-beach-dining.jpg"
                alt="Dining & experience visual"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="250px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300 block">Experiences</span>
                <span className="text-xs font-bold leading-tight block">Dining & Sunset Lounge</span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" />
        </div>

        {/* ── STAGE 3: Clear Availability Step ────────────────── */}
        <div className="w-full max-w-xl p-4 rounded-2xl bg-surface border border-primary/40 text-center shadow-sm">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-1">
            <Calendar className="w-4 h-4" />
            <span>Check Availability & Date Selection</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Clear dates, room categories, guest counts and rate options kept visible when the visitor is ready
          </div>
        </div>

        <div className="my-3 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-primary/70" aria-hidden="true" />
        </div>

        {/* ── STAGE 4: Booking Engine / Reservation Flow ──────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Booking Engine Handoff</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Seamless transition into existing booking engine, widget, or custom checkout flow
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-card border border-border/80 shadow-xs flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-foreground">Reservation Confirmation</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                Instant guest confirmation, secure payment capture & automated notification sync
              </div>
            </div>
          </div>
        </div>

        {/* ── OPERATIONAL BACKEND ECOSYSTEM ────────────────────── */}
        <div className="mt-10 w-full max-w-4xl pt-8 border-t border-dashed border-border/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                Operational Hospitality Ecosystem (Under the Hood)
              </span>
            </div>
            <span className="text-[11px] text-muted-foreground hidden sm:block">
              Two-way inventory & rate alignment
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-surface/80 border border-border/70 text-center">
              <div className="text-xs font-bold text-foreground">PMS</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Property Management</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface/80 border border-border/70 text-center">
              <div className="text-xs font-bold text-foreground">Channel Manager</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">OTA & Rate Sync</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface/80 border border-border/70 text-center">
              <div className="text-xs font-bold text-foreground">Booking Engine</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Direct Rate Engine</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/30 text-center">
              <div className="text-xs font-bold text-primary">Hotel Website</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">Guest Front-Door</div>
            </div>
          </div>

          <div className="mt-3 flex items-start gap-2 p-3 rounded-xl bg-surface/50 border border-border/50 text-[11px] text-muted-foreground">
            <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
            <span>
              Exact integrations depend on supported APIs, webhooks, or interfaces provided by your specific platform vendors.
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
