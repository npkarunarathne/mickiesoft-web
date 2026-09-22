import type { Metadata } from "next"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Calendar, 
  Layers, 
  Database, 
  ShieldCheck, 
  Server, 
  BarChart3, 
  Network,
  Users,
  Code2,
  BedDouble,
  Compass,
  Utensils,
  CreditCard,
  MapPin,
  Mail,
  ArrowDown,
  Star,
  Eye
} from "lucide-react"

import { HotelHeroVisual } from "@/components/solutions/hotel/HotelHeroVisual"
import { HotelNeedSelector } from "@/components/solutions/hotel/HotelNeedSelector"
import { GuestBookingJourneyVisual } from "@/components/solutions/hotel/GuestBookingJourneyVisual"
import { HospitalityIntegrationVisual } from "@/components/solutions/hotel/HospitalityIntegrationVisual"
import { MobileBookingFlowVisual } from "@/components/solutions/hotel/MobileBookingFlowVisual"
import { HotelSeoArchitectureVisual } from "@/components/solutions/hotel/HotelSeoArchitectureVisual"
import { HospitalityAudienceSelector } from "@/components/solutions/hotel/HospitalityAudienceSelector"
import { HotelFaq } from "@/components/solutions/hotel/HotelFaq"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = "Hotel Website Design Company | Mickiesoft"
  const description =
    "Custom hotel website design for hotels, resorts and hospitality brands. Create fast, mobile-friendly websites built around better guest experiences and booking journeys."
  const canonicalUrl =
    locale === "en"
      ? "https://mickiesoft.lk/solutions/hotel-website-design"
      : `https://mickiesoft.lk/${locale}/solutions/hotel-website-design`

  return {
    title,
    description,
    keywords: [
      "hotel website design",
      "hotel website design company",
      "hotel website design agency",
      "hotel website design Sri Lanka",
      "hotel website development",
      "responsive hotel website design",
      "hotel web design",
      "hotel booking website",
      "hotel booking integration",
      "hotel website redesign",
      "hotel website SEO",
      "hospitality website design",
      "hospitality website development",
      "hotel booking engine integration",
      "Mickiesoft",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Hotel Website Design Company — Mickiesoft",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function HotelWebsiteDesignPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const pageUrl =
    locale === "en"
      ? "https://mickiesoft.lk/solutions/hotel-website-design"
      : `https://mickiesoft.lk/${locale}/solutions/hotel-website-design`

  // Schema.org structured data: BreadcrumbList and Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mickiesoft.lk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: pageUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hotel Website Design",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Hotel Website Design & Development Services",
        description:
          "Custom hotel website design and responsive web development for hotels, boutique properties, resorts and villas with booking journey optimization and hospitality system integrations.",
        provider: {
          "@type": "Organization",
          name: "Mickiesoft (Pvt) Ltd",
          url: "https://mickiesoft.lk",
          logo: "https://mickiesoft.lk/images/logo.png",
        },
        serviceType: "Hospitality Website Design and Software Development",
        areaServed: {
          "@type": "Place",
          name: "Global",
        },
      },
    ],
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 overflow-hidden pt-24">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Breadcrumb Navigation ──────────────────────────── */}
        <div className="container mx-auto px-4 max-w-7xl pt-4 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-muted-foreground">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">
              Hotel Website Design
            </span>
          </nav>
        </div>

        {/* ── Section 9: Hero ─────────────────────────────────── */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Context & Copy */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary mb-4">
                  HOTEL & HOSPITALITY WEBSITE DESIGN
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-5">
                  Hotel Website Design That Turns Visitors Into Guests
                </h1>

                <Typography variant="large" className="text-foreground/90 font-semibold mb-4 text-lg sm:text-xl leading-snug">
                  Beautiful enough to sell the stay. Built well enough to turn interest into bookings.
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
                  Your hotel website has two jobs: make people want to stay and make it easy for them to take the next step.
                  Mickiesoft designs and develops fast, responsive hotel websites that showcase your property, simplify the journey toward booking and connect with the systems behind your hospitality business where required.
                </Typography>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/#contact">
                      <span>Discuss Your Hotel Website</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <Link href="#guest-journey">
                      <span>Explore What We Can Build</span>
                    </Link>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/70 w-full text-xs font-semibold text-muted-foreground tracking-wide">
                  Design • Development • Mobile • Booking • Integrations • SEO
                </div>
              </div>

              {/* Right Column: Hero Visual Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <HotelHeroVisual />
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 11: Early Value Section ─────────────────── */}
        <section id="guest-journey" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Strategic Foundation
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Your Hotel Website Should Do More Than Look Beautiful
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-3">
                A beautiful website can create interest. But if guests struggle to explore rooms, understand what makes your property different, check availability or move into the booking journey, the website is not doing enough.
              </Typography>
              <Typography variant="large" className="text-foreground font-semibold">
                A strong hotel website should connect inspiration with action.
              </Typography>
            </div>

            {/* Visual Step Journey Ribbon: DISCOVER -> EXPLORE -> COMPARE -> CHECK AVAILABILITY -> BOOK */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              
              {/* Step 1: Discover */}
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between group hover:border-primary/40 hover:shadow-md transition-all">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-2">01</div>
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>DISCOVER</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Create a strong first impression around the property, ambiance and stay experience.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-medium text-foreground/80">
                  Emotional resonance
                </div>
              </div>

              {/* Step 2: Explore */}
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between group hover:border-primary/40 hover:shadow-md transition-all">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-2">02</div>
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-primary" />
                    <span>EXPLORE</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Help visitors understand rooms, facilities, dining, experiences and destination location.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-medium text-foreground/80">
                  Contextual clarity
                </div>
              </div>

              {/* Step 3: Compare */}
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between group hover:border-primary/40 hover:shadow-md transition-all">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-2">03</div>
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4 text-primary" />
                    <span>COMPARE</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Make accommodation options, inclusions, views and important differences easy to understand.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-medium text-foreground/80">
                  Confident decisions
                </div>
              </div>

              {/* Step 4: Check Availability */}
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between group hover:border-primary/40 hover:shadow-md transition-all">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-2">04</div>
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>CHECK AVAILABILITY</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Keep the next step visible and intuitive whenever the visitor is ready to choose dates.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-medium text-foreground/80">
                  Persistent readiness
                </div>
              </div>

              {/* Step 5: Book */}
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between group hover:border-primary/40 hover:shadow-md transition-all">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-2">05</div>
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-primary" />
                    <span>BOOK</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Create a clear, seamless transition into the reservation experience and confirmation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-[11px] font-medium text-foreground/80">
                  Frictionless conversion
                </div>
              </div>

            </div>

            {/* Visual Experience Showcase: From Room Discovery to Reservation */}
            <div className="mt-12 rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left: Real Suite Photography with Badges */}
                <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[320px] overflow-hidden group">
                  <Image
                    src="/images/solutions/hotel-suite-interior.jpg"
                    alt="Luxury hotel bedroom suite with private balcony and sea view"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase border border-white/20">
                      Boutique Suite Showcase
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold tracking-wider uppercase">
                      Direct Guarantee
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    <Eye className="w-3.5 h-3.5 text-primary" />
                    <span>360° Virtual Tour</span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-medium mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>Rated 4.96 by 140+ verified guests</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                      Ocean Horizon Balcony Suite
                    </div>
                    <div className="text-xs text-white/80 mt-1">
                      65 m² • King Luxury Bed • Private Teak Veranda • High-Speed Optical Wi-Fi
                    </div>
                  </div>
                </div>

                {/* Right: Conversion Architecture In Action */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Conversion Architecture In Practice</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      Bridging Visual Emotion With Clear Room Comparison
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      Great hotel web design doesn&apos;t just show high-res photos. It removes hesitation by presenting room specs, direct booking incentives, transparent inclusions, and a clear path to availability.
                    </p>

                    {/* Direct Booking Advantage Card */}
                    <div className="p-4 rounded-2xl bg-surface/90 border border-border/80 mb-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">Direct vs. OTA Rate Comparison</span>
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          Save $55 / night direct
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-card border border-primary/30">
                          <span className="text-[10px] text-primary font-bold uppercase block">Official Website</span>
                          <span className="text-lg font-extrabold font-mono text-foreground">$315</span>
                          <span className="text-[10px] text-muted-foreground"> / night</span>
                          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1">
                            + Free Breakfast & Airport Transfer
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-muted/30 border border-border/60">
                          <span className="text-[10px] text-muted-foreground font-medium uppercase block">Third-Party OTA</span>
                          <span className="text-lg font-extrabold font-mono text-muted-foreground line-through">$370</span>
                          <span className="text-[10px] text-muted-foreground"> / night</span>
                          <div className="text-[10px] text-muted-foreground mt-1">
                            Standard rate without transfer
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Inclusions Checklist */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-foreground/90 mb-6">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Instant availability sync</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Zero hidden booking fees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Flexible 48-hr cancellation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>Mobile-first datepicker</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Designed to inspire and convert
                    </span>
                    <Button asChild size="sm" className="rounded-full px-5">
                      <Link href="/#contact">
                        <span>Design Your Hotel Rooms</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Section 12: Where Are You Today? ────────────────── */}
        <section id="where-are-you-today" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Project Starting Point
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                What Does Your Hotel Website Need Today?
              </Typography>
              <Typography variant="lead" className="text-muted-foreground max-w-2xl mx-auto">
                You don&apos;t need to arrive with a finished website specification. Start with what you have now and what needs to improve.
              </Typography>
            </div>

            <HotelNeedSelector />
          </div>
        </section>

        {/* ── Section 13: Design Around How Guests Choose a Stay ── */}
        <section id="how-guests-choose" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Hospitality UX
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Designed Around How Guests Choose a Stay
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Guests rarely make a booking decision from one image or one paragraph. They move through a progressive series of questions:
              </Typography>
            </div>

            {/* Guest Questions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { q: "Is this the kind of place I want to stay?", step: "First Impression", icon: Sparkles },
                { q: "Which room is right for me?", step: "Room Discovery", icon: BedDouble },
                { q: "What's included in the stay?", step: "Inclusions & Value", icon: CheckCircle2 },
                { q: "Where is it located?", step: "Location & Transfer", icon: MapPin },
                { q: "What can I do while I'm there?", step: "Activities & Dining", icon: Utensils },
                { q: "Can I trust this property?", step: "Reputation & Proof", icon: ShieldCheck },
                { q: "Is it available for my dates?", step: "Availability", icon: Calendar },
                { q: "How do I book?", step: "Direct Reservation", icon: CreditCard },
              ].map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-card border border-border/70 shadow-xs flex flex-col justify-between">
                    <div className="mb-3">
                      <div className="inline-flex p-1.5 rounded-lg bg-primary/10 text-primary mb-2">
                        <ItemIcon className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm font-semibold text-foreground italic">
                        &ldquo;{item.q}&rdquo;
                      </p>
                    </div>
                    <div className="pt-2 border-t border-border/50 text-[11px] font-mono font-semibold text-primary uppercase tracking-wider">
                      Ans: {item.step}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Visual Decision Journey Flow */}
            <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">
                Visual Guest Decision Journey
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">First Impression</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">Property Experience</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">Rooms</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">Facilities & Experiences</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">Location</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">Trust & Information</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-surface border border-border/80 text-foreground">Availability</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground/60 shrink-0" />
                <span className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground shadow-sm">Direct Booking</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 14: Hotel Website Capabilities ──────────── */}
        <section id="capabilities" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Full-Stack Hospitality
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Everything Your Hotel Website Can Bring Together
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                We organize hotel website design and engineering capabilities into meaningful operational groups rather than generic checklists.
              </Typography>
            </div>

            {/* Visual Experience Showcase Banner: Beyond Guestrooms */}
            <div className="mb-12 rounded-3xl overflow-hidden border border-border/80 bg-card shadow-2xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Visual Image Side */}
                <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 w-full group">
                  <Image
                    src="/images/solutions/hotel-beach-dining.jpg"
                    alt="Beachfront resort dining and sunset lounge experiences"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/20">
                      Dining & Experiences
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-bold tracking-wide uppercase">
                      Online Reservations
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-amber-300 font-medium">The Azure Pavilion & Sunset Lounge</div>
                    <div className="text-lg sm:text-xl font-bold font-serif leading-tight">
                      Showcase Non-Room Revenue Streams
                    </div>
                    <div className="text-xs text-white/80 mt-1">
                      Signature dining • Beachfront cabanas • Wellness & spa packages • Local excursions
                    </div>
                  </div>
                </div>

                {/* Capability Highlights Side */}
                <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Complete Property Ecosystem</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                      Elevate Dining, Wellness & Event Bookings
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                      High-performing hotel websites generate revenue beyond guestrooms. We design frictionless booking journeys for on-site restaurants, signature spa treatments, destination weddings and private celebrations.
                    </p>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-foreground">Table & Venue Booking</div>
                          <div className="text-[10px] text-muted-foreground">OpenTable, SevenRooms, or bespoke enquiry forms</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-foreground">Spa & Wellness Packages</div>
                          <div className="text-[10px] text-muted-foreground">Treatment menus & integrated appointment bookings</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-foreground">Weddings & Private Events</div>
                          <div className="text-[10px] text-muted-foreground">Downloadable brochures & tiered enquiry funnels</div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface border border-border/70 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-bold text-foreground">Direct Experience Add-ons</div>
                          <div className="text-[10px] text-muted-foreground">Curated excursions packaged with direct room stays</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Integrated with your existing hospitality tech</span>
                    <span className="font-semibold text-primary">Core Architectural Domains Below ↓</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Group 1: Sell the Stay */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-3">DOMAIN 01</div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Sell the Stay
                  </h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Property storytelling & heritage framing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Room and suite presentation pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Responsive high-resolution image galleries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Dining, restaurants & bar showcases</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Spa, wellness & ayurvedic treatments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Activities, local excursions & experiences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Weddings, meetings & private events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Offers, seasonal specials & packages</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50 mt-4 text-xs font-semibold text-primary">
                  Emotional engagement & storytelling
                </div>
              </div>

              {/* Group 2: Support the Booking Journey */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-3">DOMAIN 02</div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Support the Booking Journey
                  </h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Persistent, clear availability CTAs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Booking-engine integration where supported</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Custom villa & group enquiry forms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Promotional package booking journeys</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Direct-booking perks & guarantee notices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Payment gateway integration where applicable</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Flexible currency display options</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50 mt-4 text-xs font-semibold text-primary">
                  Direct revenue enablement
                </div>
              </div>

              {/* Group 3: Help Guests Find You */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-3">DOMAIN 03</div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Help Guests Find You (SEO)
                  </h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>SEO-friendly website architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Search-targeted room & suite pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Location, area guide & transfer content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Descriptive metadata & Open Graph cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Structured data (Hotel, Lodging, Room schemas)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Multilingual architecture where required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Clean XML sitemaps & crawlable links</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50 mt-4 text-xs font-semibold text-primary">
                  Organic search discovery
                </div>
              </div>

              {/* Group 4: Connect Your Systems */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-3">DOMAIN 04</div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Connect Your Systems
                  </h3>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Supported third-party booking engines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>PMS integrations where APIs are supported</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Channel manager alignment where available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Guest CRM & newsletter synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Analytics, tag management & conversion pixels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Custom API endpoints & webhooks</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border/50 mt-4 text-xs font-semibold text-primary">
                  Hospitality technology alignment
                </div>
              </div>

              {/* Group 5: Perform Everywhere */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <div className="text-xs font-mono font-bold text-primary mb-3">DOMAIN 05</div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Perform Everywhere
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>Responsive design for all screens</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>Mobile-first booking journey flows</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>Next-gen WebP/AVIF image delivery</span>
                      </li>
                    </ul>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>High Core Web Vitals (LCP, CLS, INP)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>WCAG-aligned accessible navigation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>Enterprise SSL & secure implementation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50 mt-4 text-xs font-semibold text-primary">
                  Engineering rigor & mobile speed
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="rounded-full px-8 shadow-md">
                <Link href="/#contact">
                  <span>Discuss Your Project Requirements</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Section 15: From Inspiration to Booking ─────────── */}
        <section id="inspiration-to-booking" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Full-Funnel Architecture
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                From Inspiration to Booking
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Your website sits between the moment someone discovers your property and the moment they decide to book. That journey should feel connected.
              </Typography>
            </div>

            <GuestBookingJourneyVisual />
          </div>
        </section>

        {/* ── Section 16: Existing Booking Systems ─────────────── */}
        <section id="existing-booking-systems" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Integration-Minded
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Already Have a Booking Engine? Keep What Works.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                A new hotel website does not automatically mean replacing the systems your team already depends on.
                If your booking engine, property management system, channel manager or another hospitality platform provides suitable APIs, widgets, SDKs or integration methods, Mickiesoft can design the website around that existing ecosystem.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mt-3">
                The goal is to improve the guest-facing experience without replacing technology unnecessarily.
              </Typography>
            </div>

            <HospitalityIntegrationVisual />
          </div>
        </section>

        {/* ── Section 17: Mobile Experience ───────────────────── */}
        <section id="mobile-experience" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Responsive Engineering
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                The Booking Journey Should Work on Every Screen
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                A guest may discover your hotel on a phone, compare rooms later on a laptop and return to book from another device. The experience should remain clear throughout.
                A responsive hotel website should make important actions easy on smaller screens—not simply shrink the desktop layout.
              </Typography>
            </div>

            <MobileBookingFlowVisual />
          </div>
        </section>

        {/* ── Section 18: Hotel Website SEO ───────────────────── */}
        <section id="hotel-seo" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Organic Search
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                SEO Built Into the Website Structure
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Search visibility should not be something considered only after the website is finished.
                A well-structured hotel website can help search engines understand your property, accommodation, location, experiences and relevant content while keeping the experience natural for guests.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mt-3">
                Actual architecture should always be tailored to your property, destination context and target traveler search intent.
              </Typography>
            </div>

            <HotelSeoArchitectureVisual />
          </div>
        </section>

        {/* ── Section 19: Hotel Website Design in Sri Lanka ────── */}
        <section id="sri-lanka-hospitality" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary mb-4">
                  LOCAL ROOTS • GLOBAL STANDARDS
                </span>

                <Typography variant="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
                  Hotel Website Design in Sri Lanka, Built for Guests Everywhere
                </Typography>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-base sm:text-lg mb-8">
                  <p>
                    Mickiesoft is a Sri Lankan software development company working with businesses locally and internationally.
                  </p>
                  <p>
                    For hotels, resorts, villas and other accommodation providers seeking hotel website design in Sri Lanka, that means working with a technology team that understands the local business environment while designing digital experiences for the international and local guests your property wants to reach.
                  </p>
                  <p>
                    Whether you&apos;re launching a new property or modernizing an existing hotel website, we can approach the project around your guests, booking journey and technology requirements.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-md">
                    <Link href="/#contact">
                      <span>Discuss Your Hotel Website</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <Link href="/#about">
                      <span>About Mickiesoft</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden bg-card border border-border/80 shadow-2xl group">
                  {/* Photo Header */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src="/images/solutions/hotel-tea-bungalow.jpg"
                      alt="Colonial heritage tea estate hillside pool bungalow in Sri Lanka"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/20">
                        Ceylon Heritage & Villas
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1 text-[11px] text-amber-300 font-medium">
                        <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                        <span>Highland Estates & Southern Coastlines</span>
                      </div>
                      <div className="text-base font-bold font-serif leading-tight">
                        Built For Local Charm, Engineered For Global Reach
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Proof Points */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary">
                      Why Sri Lankan Hospitality Brands Choose Mickiesoft
                    </div>

                    <div className="space-y-3.5">
                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground">Direct Local Engineering Team</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Direct collaboration with senior engineers and UX designers based right here in Sri Lanka—no offshore communication disconnects.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground">Global Traveler Conversion</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Multi-currency display (USD, EUR, GBP, AUD, LKR), local & global IPG readiness, and lightning-fast loading across international mobile networks.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground">Deep Hospitality Context</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            Tailored storytelling for coastal surf retreats, tea country heritage bungalows, wildlife safaris, and boutique city hotels.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Local Technology Readiness Tags */}
                    <div className="pt-4 border-t border-border/50">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Supported Local & Global Gateways
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {["Sampath IPG", "Commercial Bank", "PayHere", "Stripe", "Dynamic FX", "Crawlable Schema"].map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-surface border border-border/60 text-[10px] font-medium text-foreground/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 20: Who We Build For ────────────────────── */}
        <section id="who-we-build-for" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Tailored Hospitality Solutions
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Websites for Different Hospitality Experiences
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Different types of hospitality businesses serve different types of guest intentions. Select your property type to explore tailored approaches.
              </Typography>
            </div>

            <HospitalityAudienceSelector />
          </div>
        </section>

        {/* ── Section 21: More Than a Design Agency ───────────── */}
        <section id="engineering-differentiator" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Commercial Depth
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                A Hotel Website Design Agency With Software Engineering Behind It
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                A hotel website can start as a marketing experience and quickly become part of a wider technology ecosystem.
                Mickiesoft combines design with software development capabilities, allowing us to look beyond the pages guests see and consider the systems, integrations and workflows behind them.
              </Typography>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: "Custom Backend Logic", icon: Server },
                { label: "High-Throughput APIs", icon: Network },
                { label: "Booking Integrations", icon: Layers },
                { label: "CRM Integrations", icon: Users },
                { label: "Payment Gateways", icon: CreditCard },
                { label: "Operational Dashboards", icon: BarChart3 },
                { label: "Internal Systems", icon: Database },
                { label: "Mobile Companion Apps", icon: Smartphone },
                { label: "Cloud Services", icon: Globe },
                { label: "Custom Hospitality Software", icon: Code2 },
              ].map((cap, i) => {
                const Icon = cap.icon
                return (
                  <div key={i} className="p-4 rounded-2xl bg-card border border-border/70 flex flex-col items-start gap-2 shadow-xs">
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground/90">{cap.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Section 22: More Than the Public Website ─────────── */}
        <section id="beyond-the-website" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Extended Ecosystem
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                When the Requirement Goes Beyond the Website
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                Some hospitality projects eventually extend beyond the public-facing website.
                If your requirements include operational workflows or custom software, Mickiesoft&apos;s broader development capabilities allow us to explore the systems surrounding the guest experience as well.
              </Typography>
            </div>

            {/* Visual Operational Flow */}
            <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-xl max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                
                <div className="w-full max-w-md p-4 rounded-2xl bg-primary/10 border border-primary/30 text-center shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block">Step 01</span>
                  <span className="text-sm font-bold text-foreground">Guest-Facing Public Website</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Brand story, room comparison & direct booking trigger</p>
                </div>

                <ArrowDown className="w-5 h-5 text-primary/60 my-2" />

                <div className="w-full max-w-md p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block">Step 02</span>
                  <span className="text-sm font-bold text-foreground">Booking & Reservations Engine</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Real-time availability, dynamic rate rules & confirmation</p>
                </div>

                <ArrowDown className="w-5 h-5 text-primary/60 my-2" />

                <div className="w-full max-w-md p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block">Step 03</span>
                  <span className="text-sm font-bold text-foreground">Custom Operations & Staff Workflows</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Housekeeping queues, concierge requests & check-in kiosks</p>
                </div>

                <ArrowDown className="w-5 h-5 text-primary/60 my-2" />

                <div className="w-full max-w-md p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block">Step 04</span>
                  <span className="text-sm font-bold text-foreground">CRM & Guest Profile Management</span>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Guest preferences, loyalty tiers & personalized communications</p>
                </div>

                <ArrowDown className="w-5 h-5 text-primary/60 my-2" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                  <div className="p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">Step 05</span>
                    <span className="text-sm font-bold text-foreground">Payments</span>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Automated settlement & billing</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface border border-border/80 text-center shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">Step 06</span>
                    <span className="text-sm font-bold text-foreground">Reporting</span>
                    <p className="text-[11px] text-muted-foreground mt-0.5">Revenue analytics & occupancy stats</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Interested in custom software or integrations alongside your hotel website?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link href="/#services">
                    <span>Explore Our Development Services</span>
                  </Link>
                </Button>
                <Button asChild className="rounded-full px-6 shadow-md">
                  <Link href="/#contact">
                    <span>Discuss Custom Requirements</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 23: Design & Development Process ─────────── */}
        <section id="process" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Structured Execution
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                From Property Story to Working Website
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                A disciplined six-stage process connecting your property&apos;s character with dependable technical delivery.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Understand",
                  desc: "Learn about the property, guests, brand, existing website, booking journey and technology environment.",
                  outcome: "Discovery briefing & technical baseline"
                },
                {
                  step: "02",
                  title: "Structure",
                  desc: "Define the website architecture around guest questions, search intent and business priorities.",
                  outcome: "Information architecture & URL blueprint"
                },
                {
                  step: "03",
                  title: "Design",
                  desc: "Create the visual and interaction experience around the property's identity and booking journey.",
                  outcome: "Responsive UI prototypes & design system"
                },
                {
                  step: "04",
                  title: "Develop",
                  desc: "Build a responsive, performant website and implement agreed integrations.",
                  outcome: "Clean, production-grade frontend & API code"
                },
                {
                  step: "05",
                  title: "Test & Launch",
                  desc: "Validate the experience across devices, links, forms, integrations and agreed functionality before deployment.",
                  outcome: "QA verification & seamless live rollout"
                },
                {
                  step: "06",
                  title: "Improve",
                  desc: "Continue improving content, functionality, integrations and user experience as the property evolves.",
                  outcome: "Post-launch tuning & feature iteration"
                },
              ].map((p, i) => (
                <div key={i} className="p-7 rounded-3xl bg-card border border-border/70 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors">
                  <div>
                    <div className="text-xs font-mono font-bold text-primary mb-3">
                      STAGE {p.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/50 text-xs text-foreground/80 font-medium">
                    Outcome: {p.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 24: Technology ──────────────────────────── */}
        <section id="technology" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Proven Stack
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Technology Chosen Around the Website
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                A hotel website should not be forced into a particular technology simply because it is fashionable.
                The implementation should reflect the content requirements, booking journey, integrations, performance needs, maintainability and future plans of the property.
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Frontend */}
              <div className="p-6 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Frontend
                </div>
                <div className="space-y-2">
                  {["React", "Next.js", "Angular", "TypeScript"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="p-6 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Backend
                </div>
                <div className="space-y-2">
                  {["Node.js", ".NET", "Java", "PHP / Laravel"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Data */}
              <div className="p-6 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Data
                </div>
                <div className="space-y-2">
                  {["MySQL", "SQL", "MongoDB"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & Infra */}
              <div className="p-6 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Cloud & Infra
                </div>
                <div className="space-y-2">
                  {["AWS", "Azure", "Docker"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="rounded-full px-7">
                <Link href="/#technologies">
                  <span>Explore Full Technology Stack</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Section 25: Why Mickiesoft ───────────────────────── */}
        <section id="why-mickiesoft" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Strategic Differentiator
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Why Hospitality Businesses Work With Mickiesoft
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                We combine hospitality UX thinking with software engineering capabilities to deliver websites that sell stays and turn interest into bookings.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Design + Development
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The visual experience and technical implementation are considered together rather than treated as disconnected activities.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Built Around the Guest Journey
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We think about what guests need to understand and do—from discovering the property to moving toward booking.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Integration-Minded
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Where suitable integration methods exist, the website can work around booking engines and other hospitality systems already in use.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Mobile From the Start
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The mobile experience is designed around actual guest tasks rather than being treated as a smaller desktop page.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-2">
                  SEO-Aware Structure
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Search intent, information architecture, performance and crawlability can be considered while the website is being designed and developed.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Software Engineering Depth
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When requirements extend beyond the public website, Mickiesoft has broader software development capabilities.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs md:col-span-2 lg:col-span-3">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Local Team, Global Outlook
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mickiesoft is based in Sri Lanka and works with businesses locally and internationally, delivering close collaboration across global time zones.
                </p>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="rounded-full px-7">
                <Link href="/#about">
                  <span>Learn More About Mickiesoft</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Implementation TODO for future verified case studies:
                TODO: Surface verified public hospitality case studies once approved for publication.
            */}
          </div>
        </section>

        {/* ── Section 27: FAQ ─────────────────────────────────── */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Questions & Answers
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Hotel Website Design FAQs
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Clear answers to common questions about our hospitality web design, booking engine integrations, and technical delivery.
              </Typography>
            </div>

            <HotelFaq />

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline" className="rounded-full px-7">
                <Link href="/#faqs">
                  <span>View General Company FAQs</span>
                </Link>
              </Button>
              <Button asChild className="rounded-full px-7 shadow-md">
                <Link href="/#contact">
                  <span>Have Questions? Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Section 28: Final Conversational Conversion ─────── */}
        <section id="get-in-touch" className="py-20 lg:py-28 section-light border-t border-border/60 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-primary/10 via-card to-background border border-primary/20 shadow-2xl relative">
              <div className="max-w-2xl">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary mb-4">
                  Start the Conversation
                </span>
                <Typography variant="h2" className="text-3xl sm:text-4xl font-extrabold text-foreground mb-5 leading-tight">
                  Your Guests Are Already Looking. Give Them a Better Place to Book.
                </Typography>
                
                <div className="space-y-3 text-muted-foreground leading-relaxed mb-8 text-base">
                  <p>Maybe you&apos;re opening a new property.</p>
                  <p>Maybe your current website no longer represents the experience guests get today.</p>
                  <p>Maybe you&apos;re getting traffic but want a clearer path toward direct booking.</p>
                  <p>Or perhaps you already have the systems you need and simply need a better website around them.</p>
                  <p className="font-medium text-foreground pt-2">
                    Tell us about your property, your current website and how guests book today.
                    We&apos;ll help you work out what the digital experience should become next.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/#contact">
                      <span>Discuss Your Hotel Website</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <a href="mailto:info@mickiesoft.lk">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>Contact Mickiesoft</span>
                    </a>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/60 text-xs text-muted-foreground flex items-center gap-2">
                  <span>Direct inquiries:</span>
                  <a href="mailto:info@mickiesoft.lk" className="font-semibold text-foreground hover:text-primary transition-colors">
                    info@mickiesoft.lk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
