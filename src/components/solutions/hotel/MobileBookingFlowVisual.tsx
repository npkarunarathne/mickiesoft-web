"use client"

import React, { useState } from "react"
import Image from "next/image"
import { 
  Search, 
  Building2, 
  BedDouble, 
  Calendar, 
  CheckCircle, 
  CreditCard, 
  Check,
  Wifi,
  Sparkles,
  Smartphone,
  Waves,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const MOBILE_STEPS = [
  {
    step: "01",
    title: "Search & Arrival",
    icon: Search,
    desc: "Instant mobile landing with fast LCP, clear brand framing and immediate booking trigger above the fold.",
    badge: "Sub-second Load",
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400"
  },
  {
    step: "02",
    title: "Property Vibe & Atmosphere",
    icon: Building2,
    desc: "Touch-optimized swipeable galleries and concise highlights showcasing property ambiance without endless scrolls.",
    badge: "Thumb-friendly",
    color: "from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400"
  },
  {
    step: "03",
    title: "Room Selection & Comparison",
    icon: BedDouble,
    desc: "Legible room dimensions, bed types, scenic views and transparent rates displayed side-by-side without zooming.",
    badge: "High Legibility",
    color: "from-amber-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400"
  },
  {
    step: "04",
    title: "Dates & Guests Selection",
    icon: Calendar,
    desc: "Native-like datepicker with minimum stay warnings, rate calenders and flexible day selectors.",
    badge: "Touch Controls",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400"
  },
  {
    step: "05",
    title: "Availability Confirmation",
    icon: CheckCircle,
    desc: "Real-time room availability confirmation with transparent pricing, local taxes and inclusions breakdown.",
    badge: "Instant Sync",
    color: "from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400"
  },
  {
    step: "06",
    title: "Direct Frictionless Reservation",
    icon: CreditCard,
    desc: "Streamlined single-column booking form with autofill, mobile wallets (Apple Pay/Google Pay), and zero horizontal overflow.",
    badge: "Frictionless",
    color: "from-rose-500/10 to-red-500/10 text-rose-600 dark:text-rose-400"
  }
]

export function MobileBookingFlowVisual() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div 
      className="w-full max-w-6xl mx-auto space-y-10"
      role="img"
      aria-label="Mobile hotel booking journey from room discovery to availability"
    >
      {/* Interactive Showcase: Smartphone Mockup + 6 Flow Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Authentic Mobile Smartphone Device Mockup */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-[300px] sm:w-[320px] rounded-[2.8rem] p-3 bg-zinc-900 shadow-2xl ring-1 ring-white/20 border-4 border-zinc-800">
            {/* Phone Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full z-20 flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block mr-2" />
              <span className="w-10 h-1 rounded-full bg-zinc-800 inline-block" />
            </div>

            {/* Phone Screen Canvas */}
            <div className="rounded-[2.2rem] overflow-hidden bg-background border border-border/60 text-foreground pt-7 pb-3 flex flex-col justify-between h-[580px] shadow-inner relative">
              
              {/* Top Mobile Status Header */}
              <div className="px-4 pb-2.5 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-primary/20 text-primary flex items-center justify-center font-serif text-[10px] font-bold">
                    A
                  </div>
                  <span className="text-[11px] font-bold tracking-tight">Aura Bay Resort</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                  Direct Guarantee
                </div>
              </div>

              {/* Scrollable Screen Body */}
              <div className="p-3 space-y-3 overflow-hidden">
                {/* Suite Photography Showcase */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/solutions/hotel-suite-interior.jpg"
                    alt="Mobile booking suite preview"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Photo Badges */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-bold">
                    ★ 4.98 (142 reviews)
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <div className="text-[10px] text-amber-300 font-medium">Boutique Pool Suite</div>
                    <div className="text-xs font-bold leading-tight">Ocean Balcony Horizon Suite</div>
                  </div>
                </div>

                {/* Direct Rate Advantage Banner */}
                <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-[10px] font-semibold text-foreground">Save 15% vs OTAs</span>
                  </div>
                  <span className="text-[9px] font-bold text-primary uppercase">Direct Bonus</span>
                </div>

                {/* Mobile Room Amenities */}
                <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <div className="p-1.5 rounded-lg bg-surface border border-border/60">
                    <Wifi className="w-3 h-3 text-primary mx-auto mb-0.5" />
                    <span className="text-muted-foreground text-[9px]">High-speed Wi-Fi</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-surface border border-border/60">
                    <BedDouble className="w-3 h-3 text-primary mx-auto mb-0.5" />
                    <span className="text-muted-foreground text-[9px]">King Luxury Bed</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-surface border border-border/60">
                    <Waves className="w-3 h-3 text-primary mx-auto mb-0.5" />
                    <span className="text-muted-foreground text-[9px]">Plunge Pool</span>
                  </div>
                </div>

                {/* Mobile Date & Guest Pill */}
                <div className="p-2 rounded-xl bg-surface border border-border/80 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span className="font-semibold text-foreground">Oct 14 - 18 • 2 Guests</span>
                  </div>
                  <span className="text-[10px] text-primary font-bold">Edit</span>
                </div>
              </div>

              {/* Mobile Sticky Booking Bar */}
              <div className="p-3 bg-card border-t border-border/80 flex items-center justify-between gap-2 shadow-lg">
                <div>
                  <div className="text-[9px] text-muted-foreground uppercase">Direct Price</div>
                  <div className="text-sm font-extrabold font-mono text-foreground">$315<span className="text-[9px] text-muted-foreground font-normal"> / night</span></div>
                </div>
                <button 
                  type="button"
                  className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center gap-1 shadow-md shadow-primary/20 cursor-pointer"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Home Indicator Bar */}
              <div className="w-24 h-1 bg-muted-foreground/40 rounded-full mx-auto mt-1" />
            </div>
          </div>
        </div>

        {/* Right Column: 6 Touch-Optimized Flow Steps */}
        <div className="lg:col-span-7 space-y-4">
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-2">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Guest Funnel</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Engineered for One-Thumb Discovery & Reservation
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Mobile guests bounce when layouts lag or require pinch-to-zoom. We structure every touchpoint for speed, clarity and effortless booking.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MOBILE_STEPS.map((s, idx) => {
              const Icon = s.icon
              const isSelected = activeStep === idx
              return (
                <div 
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between",
                    isSelected
                      ? "bg-card border-primary shadow-md shadow-primary/10 scale-101"
                      : "bg-surface/70 border-border/70 hover:border-primary/40 hover:bg-card"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
                        STEP {s.step}
                      </span>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        {s.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={cn("p-1.5 rounded-lg bg-surface border border-border/60", s.color)}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">
                        {s.title}
                      </h4>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px] font-medium text-foreground/80">
                    <span className="text-[10px] text-muted-foreground">Touch benchmark</span>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

      {/* Mobile UX Benchmarks Banner */}
      <div className="p-6 rounded-3xl bg-surface border border-border/80 shadow-md">
        <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
          Mobile Engineering Principles
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-2 text-foreground/90 font-medium">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>48px+ touch targets</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 font-medium">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Zero horizontal overflow</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 font-medium">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Persistent booking trigger</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/90 font-medium">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Responsive WebP/AVIF imagery</span>
          </div>
        </div>
      </div>
    </div>
  )
}
