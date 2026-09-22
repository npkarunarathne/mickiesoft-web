"use client"

import React from "react"
import { 
  FolderTree, 
  Home, 
  BedDouble, 
  Utensils, 
  Sparkles, 
  Waves, 
  Tag, 
  Heart, 
  MapPin, 
  Info, 
  HelpCircle, 
  CalendarCheck,
  CheckCircle2
} from "lucide-react"

export function HotelSeoArchitectureVisual() {
  return (
    <div 
      className="w-full max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-2xl space-y-8"
      role="img"
      aria-label="Hotel website structure connecting rooms, experiences, offers and destination content"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
        <div className="flex items-center gap-2">
          <FolderTree className="w-5 h-5 text-primary" />
          <h3 className="text-sm sm:text-base font-bold text-foreground">
            Search-Optimized Information Architecture
          </h3>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          Structured URL Taxonomy & Breadcrumb Graph
        </span>
      </div>

      {/* Visual Hierarchy Tree */}
      <div className="p-6 rounded-2xl bg-surface/80 border border-border/70 font-mono text-xs text-foreground space-y-3 overflow-x-auto">
        
        {/* Root: Home */}
        <div className="flex items-center gap-2 text-primary font-bold text-sm">
          <Home className="w-4 h-4 shrink-0" />
          <span>/ (Home — Brand & Core Property Intent)</span>
        </div>

        {/* Tree lines */}
        <div className="pl-4 sm:pl-6 border-l-2 border-primary/30 space-y-3.5 pt-1">
          
          {/* Branch 1: Rooms */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-foreground">
              <BedDouble className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>├── /rooms-and-suites/</span>
              <span className="text-[10px] font-normal text-muted-foreground font-sans hidden sm:inline">
                (Hub for room discovery & category intent)
              </span>
            </div>
            <div className="pl-6 sm:pl-8 border-l border-muted-foreground/30 space-y-1 text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>├── /rooms/deluxe-ocean-view</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-sans">#RoomSchema</span>
              </div>
              <div className="flex items-center gap-2">
                <span>├── /rooms/private-pool-villa</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-sans">#VillaSchema</span>
              </div>
              <div className="flex items-center gap-2">
                <span>└── /suites/presidential-suite</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-sans">#SuiteSchema</span>
              </div>
            </div>
          </div>

          {/* Branch 2: Dining */}
          <div className="flex items-center gap-2">
            <Utensils className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span className="font-semibold text-foreground">├── /dining/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">
              (Restaurants, menus & dietary options)
            </span>
          </div>

          {/* Branch 3: Experiences */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
            <span className="font-semibold text-foreground">├── /experiences/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">
              (Excursions, water sports, tea tours, safaris)
            </span>
          </div>

          {/* Branch 4: Facilities */}
          <div className="flex items-center gap-2">
            <Waves className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
            <span className="font-semibold text-foreground">├── /facilities/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">
              (Spa, wellness, infinity pool, fitness)
            </span>
          </div>

          {/* Branch 5: Offers */}
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="font-semibold text-foreground">├── /offers/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">
              (Seasonal packages, honeymoon specials, direct deals)
            </span>
          </div>

          {/* Branch 6: Weddings & Events */}
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
            <span className="font-semibold text-foreground">├── /weddings-and-events/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">
              (Destination weddings & corporate retreats)
            </span>
          </div>

          {/* Branch 7: Location / Destination */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
            <span className="font-semibold text-foreground">├── /location/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">
              (Regional guide, travel directions & airport transfers)
            </span>
          </div>

          {/* Branch 8: Supporting Content */}
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="font-semibold text-foreground">├── /about/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">(Heritage & sustainability story)</span>
          </div>

          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
            <span className="font-semibold text-foreground">├── /faq/</span>
            <span className="text-[10px] text-muted-foreground font-sans hidden sm:inline">(Check-in policies, pets, payments)</span>
          </div>

          <div className="flex items-center gap-2 text-primary font-bold">
            <CalendarCheck className="w-4 h-4 shrink-0" />
            <span>└── /book/ (Direct Reservation Funnel)</span>
          </div>

        </div>

      </div>

      {/* SEO Technical Safeguards Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-foreground block">Clean URL Slugs</span>
            <span className="text-muted-foreground text-[11px]">Human-readable, keyword-targeted paths</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-foreground block">Rich Snippet Schemas</span>
            <span className="text-muted-foreground text-[11px]">Hotel, Lodging, Room & Offer JSON-LD</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-foreground block">Fast Indexing</span>
            <span className="text-muted-foreground text-[11px]">Crawlable internal link graphs & dynamic sitemaps</span>
          </div>
        </div>
      </div>
    </div>
  )
}
