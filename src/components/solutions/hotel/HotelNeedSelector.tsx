"use client"

import React, { useState } from "react"
import { Link } from "@/i18n/navigation"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Search, 
  Globe2, 
  CalendarCheck2
} from "lucide-react"
import { cn } from "@/lib/utils"

const HOTEL_NEEDS = [
  {
    id: "new-property",
    shortLabel: "New Property",
    title: "We're Opening a New Property",
    icon: Building2,
    headline: "Build the digital experience alongside your new property and brand.",
    description: "Launch with a website built around how guests discover, evaluate and book. We help define your website structure, content hierarchy, room presentation and booking setup from day one.",
    bullets: [
      "Brand identity translation into premium digital guest journeys",
      "Room, suite and villa presentation architecture",
      "Direct booking integration or enquiry funnel setup",
      "Launch-ready technical SEO and local property schema markup"
    ],
    ctaText: "Build Your New Website",
    ctaHash: "/#contact"
  },
  {
    id: "redesign",
    shortLabel: "Redesign",
    title: "Our Website Needs a Redesign",
    icon: Sparkles,
    headline: "Your property has evolved while the website stayed behind.",
    description: "We can rethink the visual presentation, mobile responsiveness, content structure and technical implementation while protecting your existing search rankings and what already works.",
    bullets: [
      "Modern editorial UI designed for high-resolution property photography",
      "Mobile-first navigation and rapid room exploration flows",
      "Preservation of existing domain equity and URL redirect mapping",
      "Streamlined booking CTA visibility across all guest touchpoints"
    ],
    ctaText: "Redesign Your Website",
    ctaHash: "/#contact"
  },
  {
    id: "booking-journey",
    shortLabel: "Booking Journey",
    title: "We Want a Better Booking Journey",
    icon: CalendarCheck2,
    headline: "Visitors should never have to search for what to do next.",
    description: "We audit and restructure how guests move from first impression through room comparison to checking availability and entering your reservation engine.",
    bullets: [
      "Reduced friction between room discovery and date selection",
      "Clear presentation of inclusions, rates and direct-booking benefits",
      "Seamless handoff to third-party booking widgets without context loss",
      "Mobile optimization to minimize abandoned availability lookups"
    ],
    ctaText: "Improve the Booking Journey",
    ctaHash: "/#contact"
  },
  {
    id: "booking-engine",
    shortLabel: "Existing Engine",
    title: "We Already Have a Booking Engine",
    icon: Layers,
    headline: "Keep what works. You may not need to replace your booking platform.",
    description: "If your hotel already uses an established booking engine, PMS or channel manager with suitable APIs or widgets, we design and build the new website around that existing environment.",
    bullets: [
      "Integration via supported REST APIs, webhooks, or embeddable widgets",
      "Seamless visual styling matching your custom property brand",
      "Real-time rate and availability querying where technically supported",
      "Preservation of existing staff workflows and operational systems"
    ],
    ctaText: "Connect Your Booking Experience",
    ctaHash: "/#contact"
  },
  {
    id: "search-visibility",
    shortLabel: "Search Visibility",
    title: "We Need Better Search Visibility",
    icon: Search,
    headline: "A website architecture built to help search engines understand your property.",
    description: "Structure room categories, amenities, location guides, dining and experiences so search engines crawl and index them effectively without compromising human guest experience.",
    bullets: [
      "Descriptive, search-friendly information architecture and clean URLs",
      "Structured data (Hotel, LodgingBusiness, Room, Offer schemas)",
      "Destination and local experience content hubs for high-intent queries",
      "Optimized Core Web Vitals and image delivery for mobile search"
    ],
    ctaText: "Improve Website Structure",
    ctaHash: "/#contact"
  },
  {
    id: "multi-property",
    shortLabel: "Multi-Property",
    title: "We Manage Multiple Properties",
    icon: Globe2,
    headline: "Scalable digital architecture for hotel groups, resorts and villa collections.",
    description: "Create a coherent parent brand website that allows visitors to explore different properties, destinations or concepts while retaining individual character and clean booking paths.",
    bullets: [
      "Unified brand experience with dedicated sub-property microsites",
      "Cross-property availability search and portfolio discovery",
      "Centralized content management for marketing and operational updates",
      "Flexible architectural foundation ready to add future properties"
    ],
    ctaText: "Discuss Multi-Property Websites",
    ctaHash: "/#contact"
  }
]

export function HotelNeedSelector() {
  const [activeStage, setActiveStage] = useState(HOTEL_NEEDS[0].id)
  const current = HOTEL_NEEDS.find((s) => s.id === activeStage) || HOTEL_NEEDS[0]
  const Icon = current.icon

  return (
    <div className="w-full">
      {/* Visual Lifecycle Ribbon */}
      <div 
        className="mb-8 p-3 rounded-2xl bg-surface border border-border/80 overflow-x-auto scrollbar-none"
        role="region"
        aria-label="Hotel website project stage selector"
      >
        <div className="flex items-center justify-between min-w-[680px] gap-2">
          {HOTEL_NEEDS.map((need, idx) => {
            const isSelected = activeStage === need.id
            const StageIcon = need.icon
            return (
              <React.Fragment key={need.id}>
                <button
                  type="button"
                  onClick={() => setActiveStage(need.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-102"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <StageIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{need.shortLabel}</span>
                </button>
                {idx < HOTEL_NEEDS.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-muted-foreground/40 shrink-0" aria-hidden="true" />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* Selected Stage Detail Card */}
      <div className="glass rounded-3xl p-6 md:p-10 border border-border/80 shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                <Icon className="w-3.5 h-3.5" />
                <span>Scenario: {current.title}</span>
              </div>
              <Typography variant="h3" className="mb-4 text-foreground text-2xl md:text-3xl font-bold">
                {current.headline}
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-6 text-base">
                {current.description}
              </Typography>
            </div>

            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full px-7 shadow-md">
                <Link href="/#contact">
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-card/80 p-6 rounded-2xl border border-border/70">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              How Mickiesoft Delivers
            </div>
            <ul className="space-y-3">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
