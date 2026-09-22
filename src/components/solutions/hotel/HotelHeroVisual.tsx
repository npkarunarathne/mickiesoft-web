"use client"

import React, { useState } from "react"
import Image from "next/image"
import { 
  Calendar, 
  Users, 
  Search, 
  Star, 
  Wifi, 
  Coffee, 
  Waves, 
  Check, 
  ShieldCheck,
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react"

export function HotelHeroVisual() {
  const [liked, setLiked] = useState(false)

  return (
    <div 
      className="relative w-full max-w-xl lg:max-w-2xl mx-auto"
      role="img"
      aria-label="Hotel website design shown across desktop and mobile booking experiences"
    >
      {/* Background Ambience Glows */}
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/15 dark:bg-amber-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ── DESKTOP BROWSER MOCKUP ──────────────────────────────── */}
      <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl shadow-primary/10 transition-all duration-500 hover:border-primary/40 group">
        
        {/* Browser Top Chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border/60 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/80 border border-border/60 text-[11px] text-muted-foreground font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            <span>https://aurabay-resort.com/villas/ocean-pool-suite</span>
          </div>
          <div className="text-[11px] font-semibold text-primary/80 hidden sm:block">
            Mickiesoft Hospitality UX
          </div>
        </div>

        {/* Fictional Luxury Resort Website UI */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-background to-surface/40 space-y-4 sm:space-y-5">
          
          {/* Fictional Resort Header */}
          <div className="flex items-center justify-between border-b border-border/40 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-600 to-indigo-700 flex items-center justify-center text-white font-serif font-bold text-base shadow-sm">
                A
              </div>
              <div>
                <div className="text-sm font-serif font-bold tracking-wider text-foreground uppercase">
                  Aura Bay Resort & Villas
                </div>
                <div className="text-[10px] text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-primary" />
                  <span>Mirissa Sanctuary • Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="text-primary font-semibold">Villas</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Dining</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Spa & Wellness</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Experiences</span>
            </div>

            <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              Direct Best Rate
            </div>
          </div>

          {/* Real Property Photo Hero Banner in Website UI */}
          <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden shadow-inner group/photo">
            <Image
              src="/images/solutions/hotel-hero-villa.jpg"
              alt="Luxury oceanfront pool villa at golden hour with private infinity pool"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover/photo:scale-105"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Badges on Photo */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/20">
                Oceanfront Wing
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold tracking-wide uppercase">
                Instant Confirmation
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLiked(!liked)}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 hover:scale-110 transition-transform"
              aria-label="Save to wishlist"
            >
              <Heart className={`w-3.5 h-3.5 ${liked ? "fill-red-500 text-red-500" : "text-white"}`} />
            </button>

            {/* Photo Bottom Caption */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
              <div>
                <div className="text-[11px] font-medium text-amber-200 uppercase tracking-wider">Private Sanctuary</div>
                <div className="text-base sm:text-lg font-bold font-serif leading-tight">Ocean Horizon Pool Suite</div>
                <div className="text-[10px] text-white/80">140 m² • 180° Panoramic Indian Ocean Sunset View</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-white/60 line-through mr-1.5">$380</span>
                <span className="text-lg font-extrabold text-white font-mono">$315</span>
                <span className="text-[10px] text-white/80"> / night</span>
              </div>
            </div>
          </div>

          {/* Sticky Interactive Booking Engine Bar */}
          <div className="p-2.5 sm:p-3 rounded-2xl bg-card border border-border/90 shadow-md flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
            <div className="flex-1 min-w-[120px] p-2 rounded-xl bg-surface border border-border/60 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Check-in / Out</div>
                <div className="text-xs font-bold text-foreground">Oct 14 – Oct 19</div>
              </div>
            </div>

            <div className="flex-1 min-w-[100px] p-2 rounded-xl bg-surface border border-border/60 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary shrink-0" />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Guests</div>
                <div className="text-xs font-bold text-foreground">2 Adults, 1 Suite</div>
              </div>
            </div>

            <button 
              type="button"
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:opacity-95 transition-opacity cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Check Availability</span>
            </button>
          </div>

          {/* Suite Features & Direct Booking Benefit */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/50 text-xs">
            <div className="flex items-center gap-3 text-muted-foreground text-[11px]">
              <span className="flex items-center gap-1">
                <Waves className="w-3.5 h-3.5 text-primary" /> Private Plunge Pool
              </span>
              <span className="flex items-center gap-1">
                <Coffee className="w-3.5 h-3.5 text-primary" /> Daily In-Villa Breakfast
              </span>
              <span className="flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 text-primary" /> High-Speed Wi-Fi
              </span>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Direct Booking Bonus: 15% Spa Voucher</span>
            </div>
          </div>

        </div>

      </div>

      {/* ── MOBILE SCREEN OVERLAY MOCKUP ───────────────────────── */}
      <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-56 sm:w-64 rounded-3xl p-2.5 bg-slate-950 text-white shadow-2xl border-2 border-slate-700/90 backdrop-blur-xl z-20 transition-transform duration-500 hover:scale-105">
        
        {/* Mobile Phone Speaker Bar */}
        <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mb-2" />

        {/* Mobile Screen Content */}
        <div className="rounded-2xl bg-slate-900 overflow-hidden border border-slate-800 space-y-2.5">
          {/* Mobile Thumbnail */}
          <div className="relative h-24 w-full">
            <Image
              src="/images/solutions/hotel-suite-interior.jpg"
              alt="Boutique suite bedroom with terrace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-bold text-emerald-400">
              ● Live Engine Sync
            </div>
          </div>

          <div className="p-3 pt-0 space-y-2">
            <div>
              <div className="text-[11px] font-bold text-white">Ocean Horizon Suite</div>
              <div className="text-[9px] text-slate-300 flex items-center justify-between mt-0.5">
                <span>Oct 14 – 19 • 5 Nights</span>
                <span className="font-bold text-white font-mono">$1,575 Total</span>
              </div>
            </div>

            <div className="p-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <div className="text-[9px] text-emerald-200 leading-tight">
                Direct Best Rate Guaranteed • Free Cancel until Oct 7
              </div>
            </div>

            <div className="py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-center text-[11px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer hover:opacity-90">
              <span>Complete Reservation</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Pill: Conversion Metric Concept */}
      <div className="absolute top-8 -left-4 sm:top-10 sm:-left-8 backdrop-blur-md bg-background/90 dark:bg-background/80 border border-border/90 shadow-xl rounded-2xl px-3.5 py-2 flex items-center gap-2.5 z-20">
        <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
          <Star className="h-4 w-4 fill-current" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
            <span>Direct Conversion UX</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-semibold">+38% Direct</span>
          </div>
          <div className="text-[10px] text-muted-foreground">Inspiration to Booking in 3 Clicks</div>
        </div>
      </div>

    </div>
  )
}
