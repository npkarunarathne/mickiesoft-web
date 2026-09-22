"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { 
  Sparkles, 
  Crown, 
  Palmtree, 
  Home, 
  Compass, 
  Building, 
  HeartHandshake, 
  Globe2, 
  ArrowRight, 
  CheckCircle2,
  Star,
  MapPin
} from "lucide-react"
import { cn } from "@/lib/utils"

const HOSPITALITY_AUDIENCES = [
  {
    id: "boutique",
    label: "Boutique Hotels",
    icon: Sparkles,
    title: "Celebrate Property Individuality, Atmosphere & Character",
    description: "Boutique properties succeed when guests connect with the design, personality and story of the stay before they even arrive. We craft editorial digital experiences that showcase your unique ambiance while keeping room discovery and booking effortless.",
    focusPoints: [
      "Editorial typography and bespoke layout aesthetics reflecting your interior design",
      "Storytelling around the property's heritage, curated art and host hospitality",
      "Seamless room-by-room virtual discovery with distinct personality traits",
      "Direct booking incentive presentation that builds trust and loyalty"
    ],
    scenario: "An independent 18-room boutique hotel highlighting its historic architecture and personalized concierge services.",
    image: "/images/solutions/hotel-suite-interior.jpg",
    propertyType: "Historic Heritage Suite",
    location: "Galle Fort • Sri Lanka",
    startingRate: "$260",
    rating: "4.95",
    reviews: "142 reviews",
    highlightBadge: "Direct Booking Perk: Heritage Afternoon Tea Included"
  },
  {
    id: "luxury",
    label: "Luxury Hotels",
    icon: Crown,
    title: "Refined Digital Craftsmanship for Discerning Guests",
    description: "High-end travelers expect flawless digital interactions that match five-star standards. We engineer high-performance websites with elegant transitions, high-resolution imagery optimization, and discreet direct-booking journeys.",
    focusPoints: [
      "Ultra-crisp imagery delivery with instant loading and zero visual distortion",
      "Dedicated VIP suite presentations with immersive details and floor plans",
      "Private dining, butler service and bespoke experience reservations",
      "Multilingual architecture supporting high-net-worth international guests"
    ],
    scenario: "A 5-star city luxury hotel delivering an unhurried, discreet suite selection and fine dining reservation experience.",
    image: "/images/solutions/hotel-hero-villa.jpg",
    propertyType: "Royal Horizon Penthouse",
    location: "Colombo Seaboard",
    startingRate: "$580",
    rating: "4.98",
    reviews: "286 reviews",
    highlightBadge: "VIP Benefit: 24/7 Dedicated Butler Service"
  },
  {
    id: "resorts",
    label: "Resorts",
    icon: Palmtree,
    title: "Unify Stay, Dining, Wellness & Excursions Into One Flow",
    description: "A resort is much more than a room—it is an entire destination ecosystem. We design websites that present accommodations, multiple restaurants, water sports, kids' clubs, spa sanctuaries and wedding venues within one harmonious guest journey.",
    focusPoints: [
      "Interactive property maps and resort overview navigation",
      "Multi-venue dining showcases with online table reservation integrations",
      "Activities and excursions scheduling hubs for guests planning ahead",
      "Wedding, conference and private event package enquiry workflows"
    ],
    scenario: "A beachfront resort integrating beach pavilions, 3 dining venues, ayurvedic spa and dive center bookings into a coherent website.",
    image: "/images/solutions/hotel-beach-dining.jpg",
    propertyType: "Beachfront Dining & Ocean Villas",
    location: "Tangalle Coastline",
    startingRate: "$420",
    rating: "4.92",
    reviews: "310 reviews",
    highlightBadge: "All-Inclusive: Daily Sunset Cocktails & Spa Credit"
  },
  {
    id: "villas",
    label: "Villas & Estates",
    icon: Home,
    title: "Showcase Exclusive Privacy, Capacity & Luxury Amenities",
    description: "Private villas and luxury holiday estates require clear communication around exclusivity, sleeping capacity, dedicated staff, private chefs, amenities and transparent seasonal pricing.",
    focusPoints: [
      "Clear capacity, bedroom configurations and private amenity highlights",
      "Dedicated floor layouts, infinity pool specs and beach/scenic access details",
      "Direct enquiry forms alongside instant availability checks",
      "Concierge and private chef package options presented clearly"
    ],
    scenario: "A private 5-bedroom coastal villa estate clarifying rental inclusions, full staff availability, and minimum-stay rules.",
    image: "/images/solutions/hotel-hero-villa.jpg",
    propertyType: "Private 5-Bedroom Ocean Villa",
    location: "Mirissa Clifftop",
    startingRate: "$850",
    rating: "4.99",
    reviews: "88 reviews",
    highlightBadge: "Exclusivity: Full Private Staff & Dedicated Chef"
  },
  {
    id: "guesthouses",
    label: "Guesthouses & B&Bs",
    icon: Compass,
    title: "Warm, Authentic Stays Built Around Genuine Hospitality",
    description: "Guesthouses, bed & breakfasts and eco-lodges win guests through warmth, local insider knowledge, and honest charm. We build lean, fast, easy-to-manage websites that turn search interest into direct bookings without high OTA commissions.",
    focusPoints: [
      "Welcoming, authentic visual presentation reflecting host hospitality",
      "Local neighborhood and destination exploration guides",
      "Simple, dependable booking engine or direct WhatsApp/enquiry links",
      "Cost-effective architecture that is easy for owners to maintain"
    ],
    scenario: "A hillside tea-country guesthouse attracting independent travelers searching for scenic tranquility and hiking advice.",
    image: "/images/solutions/hotel-tea-bungalow.jpg",
    propertyType: "Hillside Heritage Cottage",
    location: "Ella Highlands",
    startingRate: "$140",
    rating: "4.89",
    reviews: "215 reviews",
    highlightBadge: "Host Special: Daily Ceylon Breakfast & Guided Walk"
  },
  {
    id: "serviced",
    label: "Serviced Apartments",
    icon: Building,
    title: "Accommodate Extended Stays, Business Travelers & Long Stays",
    description: "Serviced accommodation serves corporate travelers, relocating professionals and long-stay families. The website must clearly present kitchen amenities, workstation setups, weekly housekeeping and flexible rates.",
    focusPoints: [
      "Clear differentiation between short-term stays and monthly extended rates",
      "Detailed apartment specifications (kitchen, laundry, high-speed Wi-Fi)",
      "Corporate booking inquiries and automated invoicing flows",
      "Location proximity to business districts, transit hubs and supermarkets"
    ],
    scenario: "Urban serviced residences catering to remote executives needing high-speed internet and serviced living.",
    image: "/images/solutions/hotel-suite-interior.jpg",
    propertyType: "Executive 2-Bedroom Suite",
    location: "Central Business Hub",
    startingRate: "$195",
    rating: "4.87",
    reviews: "174 reviews",
    highlightBadge: "Long-stay Perk: High-Speed Fiber & Weekly Servicing"
  },
  {
    id: "wellness",
    label: "Wellness Retreats",
    icon: HeartHandshake,
    title: "Mindful Presentation of Healing, Yoga & Rejuvenation",
    description: "Wellness sanctuaries and retreat centers require calm, serene digital journeys. Guests need to understand treatment programs, daily schedules, nutritional philosophies, teacher credentials and multi-day packages.",
    focusPoints: [
      "Serene, distraction-free visual design with natural color palettes",
      "Detailed multi-day retreat package breakdowns and daily schedules",
      "Intake consultation forms and wellness goal questionnaires",
      "Transparent room-and-board inclusions for all-inclusive retreat tiers"
    ],
    scenario: "An eco-wellness sanctuary presenting 7-day rejuvenation programs with integrated accommodation and Ayurvedic treatments.",
    image: "/images/solutions/hotel-tea-bungalow.jpg",
    propertyType: "Ayurvedic Forest Sanctuary",
    location: "Kandy Rainforest Edge",
    startingRate: "$310",
    rating: "4.96",
    reviews: "128 reviews",
    highlightBadge: "Retreat Inclusions: Daily Yoga, Organic Meals & Consultations"
  },
  {
    id: "groups",
    label: "Hotel Groups & Collections",
    icon: Globe2,
    title: "Scalable Architecture for Growing Multi-Property Portfolios",
    description: "Hotel groups need digital foundations that scale. We engineer centralized multi-property platforms that unify brand standards, enable portfolio-wide availability searching, and allow individual properties to shine under one roof.",
    focusPoints: [
      "Portfolio-level property finder with destination and amenity filters",
      "Cross-property availability search engine and multi-hotel bookings",
      "Modular design system enabling rapid deployment of new property additions",
      "Centralized analytics, tracking and unified marketing landing pages"
    ],
    scenario: "A regional boutique hospitality group managing 6 distinct properties across mountain, heritage, and coastal destinations.",
    image: "/images/solutions/hotel-hero-villa.jpg",
    propertyType: "Multi-Property Signature Collection",
    location: "Island-wide Collection",
    startingRate: "$280 - $850",
    rating: "4.94",
    reviews: "1,200+ reviews",
    highlightBadge: "Collection Advantage: Unified Loyalty & Cross-Stay Perks"
  }
]

export function HospitalityAudienceSelector() {
  const [selectedId, setSelectedId] = useState(HOSPITALITY_AUDIENCES[0].id)
  const active = HOSPITALITY_AUDIENCES.find((a) => a.id === selectedId) || HOSPITALITY_AUDIENCES[0]
  const ActiveIcon = active.icon

  return (
    <div className="w-full">
      {/* Scrollable Audience Pills */}
      <div 
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        role="tablist"
        aria-label="Hospitality experience selector"
      >
        {HOSPITALITY_AUDIENCES.map((aud) => {
          const isSelected = selectedId === aud.id
          const Icon = aud.icon
          return (
            <button
              key={aud.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedId(aud.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border",
                isSelected
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-102"
                  : "bg-surface text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              )}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{aud.label}</span>
            </button>
          )
        })}
      </div>

      {/* Selected Audience Display Card */}
      <div className="glass rounded-3xl p-6 md:p-8 lg:p-10 border border-border/80 shadow-2xl overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context, Scenario, Focus Points & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
                <ActiveIcon className="w-3.5 h-3.5" />
                <span>Tailored for {active.label}</span>
              </div>
              
              <Typography variant="h3" className="text-foreground text-2xl md:text-3xl font-bold mb-3">
                {active.title}
              </Typography>
              
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-sm md:text-base mb-5">
                {active.description}
              </Typography>

              {/* Real-World Scenario Box */}
              <div className="p-4 rounded-2xl bg-surface/90 border border-border/70 mb-5">
                <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">
                  Real-World Solution Scenario
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 font-medium leading-snug">
                  {active.scenario}
                </p>
              </div>

              {/* Key UX Focus Areas */}
              <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Strategic UX & Technical Focus
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.focusPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-card/70 border border-border/60 text-xs text-foreground/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <Button asChild size="lg" className="rounded-full px-7 shadow-md">
                <Link href="/#contact">
                  <span>Discuss Your {active.label} Website</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Property Vignette Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl overflow-hidden border border-border/80 bg-card shadow-xl group">
              
              {/* Image Container */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <Image
                  src={active.image}
                  alt={`${active.label} website design showcase`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/20">
                    {active.propertyType}
                  </span>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-black text-[10px] font-extrabold shadow-sm">
                    <Star className="w-3 h-3 fill-black text-black" />
                    <span>{active.rating}</span>
                    <span className="opacity-75 font-medium">({active.reviews})</span>
                  </div>
                </div>

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-white/80 mb-0.5">
                    <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                    <span>{active.location}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-sm font-bold font-serif leading-tight">
                      Custom Guest Experience
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-white/70 block uppercase tracking-wider">Starting Direct</span>
                      <span className="text-base font-extrabold font-mono text-amber-300">{active.startingRate}</span>
                      <span className="text-[10px] text-white/80"> / night</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Inset: Direct Booking Perk Ribbon */}
              <div className="p-3.5 bg-surface/90 border-t border-border/70 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-foreground truncate text-[11px] sm:text-xs">
                    {active.highlightBadge}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] uppercase shrink-0">
                  Direct Rate
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
