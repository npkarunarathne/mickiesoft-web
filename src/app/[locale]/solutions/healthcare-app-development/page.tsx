import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Activity, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Calendar, 
  Layers, 
  Database, 
  Cpu, 
  ShieldCheck, 
  RefreshCw, 
  Clock, 
  Server, 
  Lock, 
  FlaskConical, 
  FileText, 
  BarChart3, 
  Network,
  Users,
  Code2,
  HardDrive
} from "lucide-react"

import { HealthcareHeroVisual } from "@/components/solutions/healthcare/HealthcareHeroVisual"
import { ProductJourneySelector } from "@/components/solutions/healthcare/ProductJourneySelector"
import { HealthcareArchitectureVisual } from "@/components/solutions/healthcare/HealthcareArchitectureVisual"
import { DeviceArchitectureVisual } from "@/components/solutions/healthcare/DeviceArchitectureVisual"
import { SecurityArchitectureVisual } from "@/components/solutions/healthcare/SecurityArchitectureVisual"
import { AudienceSelector } from "@/components/solutions/healthcare/AudienceSelector"
import { HealthcareFaq } from "@/components/solutions/healthcare/HealthcareFaq"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = "Healthcare App Development Company | Mickiesoft"
  const description =
    "Build, modernize and scale healthcare software with Mickiesoft. From web and mobile apps to AI, device integrations, embedded software and healthcare platforms."
  const canonicalUrl =
    locale === "en"
      ? "https://mickiesoft.lk/solutions/healthcare-app-development"
      : `https://mickiesoft.lk/${locale}/solutions/healthcare-app-development`

  return {
    title,
    description,
    keywords: [
      "healthcare app development company",
      "healthcare app development services",
      "healthcare app development",
      "healthcare mobile app development",
      "custom healthcare app development",
      "healthcare software development",
      "telemedicine applications",
      "patient portals",
      "healthcare SaaS",
      "medical device integration",
      "health data integration",
      "healthcare software modernization",
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
          alt: "Healthcare App Development Company — Mickiesoft",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function HealthcareAppDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

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
            item: "https://mickiesoft.lk/solutions/healthcare-app-development",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthcare App Development",
            item: "https://mickiesoft.lk/solutions/healthcare-app-development",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Healthcare App Development Services",
        description:
          "Custom healthcare software and application development across web, mobile, cloud, AI, embedded systems and connected healthcare devices.",
        provider: {
          "@type": "Organization",
          name: "Mickiesoft (Pvt) Ltd",
          url: "https://mickiesoft.lk",
          logo: "https://mickiesoft.lk/images/logo.png",
        },
        serviceType: "Healthcare Software Development",
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
              Healthcare App Development
            </span>
          </nav>
        </div>

        {/* ── Section 8: Hero ─────────────────────────────────── */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Context & Copy */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary mb-4">
                  HEALTHCARE SOFTWARE DEVELOPMENT
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-5">
                  Healthcare App Development Company
                </h1>

                <Typography variant="large" className="text-foreground/90 font-semibold mb-4 text-lg sm:text-xl leading-snug">
                  Build, improve and scale healthcare software around the way your product actually works.
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
                  We provide custom healthcare app development services across web, mobile, cloud, AI, and connected devices — meeting your product at any stage from initial MVP to enterprise modernization and global scale.
                </Typography>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/#contact">
                      <span>Discuss Your Healthcare Product</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <Link href="/#services">
                      <span>Explore Our Services</span>
                    </Link>
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/70 w-full text-xs font-semibold text-muted-foreground tracking-wide">
                  Web • Mobile • AI • Cloud • Embedded • Device Integrations
                </div>
              </div>

              {/* Right Column: Hero Graphic */}
              <div className="lg:col-span-6 flex justify-center">
                <HealthcareHeroVisual />
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 10: Global Credibility ──────────────────── */}
        <section className="py-16 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <Typography variant="caption" className="uppercase tracking-widest font-bold text-primary mb-2 block">
                Global Delivery
              </Typography>
              <Typography variant="h2" className="text-2xl sm:text-3xl font-bold mb-4">
                Healthcare Software Built for Products Serving Global Markets
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Mickiesoft is a Sri Lankan software development company working with businesses beyond Sri Lanka, including healthcare organizations and HealthTech teams serving international users. We collaborate remotely across product discovery, design, engineering, integrations, testing and ongoing development.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Time-Zone Aligned Collaboration
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Smooth remote collaboration and active communication windows across North American, European, Australian, and Asian working hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Complete IP & Code Ownership
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From day one, you retain full ownership of intellectual property, repository access, application architecture, and operational code.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Senior Engineering Standards
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Direct engagement with senior software engineers, solution architects, and UX specialists dedicated to the longevity of your product.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline" className="rounded-full px-7">
                <Link href="/#about">
                  <span>Learn More About Our Team & Company</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Section 11: Product Journey (High Priority) ──────── */}
        <section id="product-journey" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Lifecycle Engagement
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Where Are You With Your Healthcare Product Today?
              </Typography>
              <Typography variant="lead" className="text-muted-foreground max-w-2xl mx-auto">
                You don&apos;t need to arrive with a finished specification. Start with where your product is today.
              </Typography>
            </div>

            <ProductJourneySelector />
          </div>
        </section>

        {/* ── Section 12: Applications We Can Build ────────────── */}
        <section id="applications-we-build" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Product Architecture
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Healthcare Applications We Can Build
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Healthcare software serves different people, workflows and business models. We design each product around its actual users and requirements rather than forcing every project into the same structure.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Patient Portals */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Patient Portals
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Create patient-facing experiences for accessing relevant healthcare services, appointments, information, documents and communication.
                  </p>
                </div>
                <div className="text-xs font-semibold text-primary flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Self-service care access</span>
                </div>
              </div>

              {/* Card 2: Telemedicine Applications */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Telemedicine Applications
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Build web and mobile experiences supporting remote healthcare workflows, scheduling, communication and supported consultation services.
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Virtual care delivery</span>
                </div>
              </div>

              {/* Card 3: Appointment & Scheduling Systems */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Appointment & Scheduling Systems
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Design scheduling experiences for patients, healthcare professionals and administrative teams.
                  </p>
                </div>
                <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Multi-calendar coordination</span>
                </div>
              </div>

              {/* Card 4: Healthcare Operations Software */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Healthcare Operations Software
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Digitize internal workflows, records, approvals, administration, reporting and operational processes.
                  </p>
                </div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Administrative automation</span>
                </div>
              </div>

              {/* Card 5: Healthcare Mobile Applications */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Healthcare Mobile Applications
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Create mobile experiences for patients, healthcare teams, field users or connected healthcare products.
                  </p>
                </div>
                <div className="text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>iOS & Android mHealth</span>
                </div>
              </div>

              {/* Card 6: Healthcare SaaS Products */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Healthcare SaaS Products
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Develop scalable healthcare platforms supporting multiple organizations, user types, permissions, subscriptions and administrative workflows.
                  </p>
                </div>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Multi-tenant architecture</span>
                </div>
              </div>

              {/* Card 7: Health Data Platforms */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Health Data Platforms
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Build applications that collect, organize, display or process supported healthcare and device-generated information.
                  </p>
                </div>
                <div className="text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Aggregated telemetry & records</span>
                </div>
              </div>

              {/* Card 8: Medical / Healthcare Device Software */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Medical / Healthcare Device Software
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Create software experiences that work with supported healthcare hardware and connected devices.
                  </p>
                </div>
                <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5 pt-4 border-t border-border/50">
                  <span>Connected hardware interfaces</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Explore how these experiences link together into your broader technical infrastructure or explore all our development services.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link href="#beyond-the-app">
                    <span>See How the Ecosystem Connects</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild className="rounded-full px-6 shadow-md">
                  <Link href="/#services">
                    <span>Explore All Mickiesoft Services</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 13: Healthcare Software Beyond the App ───── */}
        <section id="beyond-the-app" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                System Integration
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Healthcare Software Goes Beyond the App
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Modern healthcare products rarely exist as a single application. A patient may use a mobile app while healthcare professionals work through a web platform. Laboratory results may arrive from another system. Connected devices may generate additional health information. AI services may support analysis or operational workflows behind the scenes.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mt-3">
                Mickiesoft can help engineer the software layers that connect these experiences.
              </Typography>
            </div>

            <HealthcareArchitectureVisual />
          </div>
        </section>

        {/* ── Section 14: Device + Hardware + Embedded Software ── */}
        <section id="devices-and-hardware" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Connected Hardware
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                From Healthcare Device to Web and Mobile Experience
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Some healthcare products extend beyond the browser or smartphone. When software needs to communicate with supported healthcare hardware or connected devices, we can work across the relevant software layers—from device interfaces and embedded software through backend services, APIs, cloud platforms, dashboards and mobile applications.
              </Typography>
            </div>

            <DeviceArchitectureVisual />

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: "Supported Hardware Integrations", icon: HardDrive },
                { label: "Embedded Software & Firmware", icon: Cpu },
                { label: "Device Communication & Protocols", icon: Network },
                { label: "Real-Time Data Synchronization", icon: RefreshCw },
                { label: "Secure API Development", icon: Code2 },
                { label: "Backend Cloud Connectivity", icon: Server },
                { label: "Web Clinical Dashboards", icon: Globe },
                { label: "Companion Mobile Apps", icon: Smartphone },
                { label: "Vitals Data Visualization", icon: BarChart3 },
                { label: "Device Health & Alert Feeds", icon: Activity },
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

        {/* ── Section 15: Laboratory + Health Data Integrations ── */}
        <section id="laboratory-integrations" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Data Interoperability
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Bring Laboratory and Health Data Into the Product Experience
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Healthcare information can come from many places. Where supported interfaces are available, Mickiesoft can integrate laboratory systems, healthcare platforms, connected devices and other data sources into the workflows your application needs.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    Laboratory Report Integrations
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bring supported laboratory reports and results into relevant healthcare workflows instead of relying entirely on disconnected manual processes.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-purple-600 dark:text-purple-400">
                  LIMS / LIS Connections
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    Device-Generated Health Data
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Receive supported information from connected healthcare devices and make it available to appropriate application workflows.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-sky-600 dark:text-sky-400">
                  Telemetry Pipelines
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    External Healthcare Systems
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Exchange supported information with other healthcare or business platforms through available APIs and integration interfaces.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Third-Party APIs & Connectors
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    Reporting & Visualization
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Turn integrated information into dashboards, timelines, reports or workflow inputs appropriate to the product.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/50 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Actionable Clinical Views
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 16: AI for Healthcare Products ──────────── */}
        <section id="ai-capabilities" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Practical Intelligence
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Add AI Capabilities to Your Healthcare Product
              </Typography>
              <Typography variant="lead" className="text-muted-foreground mb-3">
                AI does not need to become the entire product to be useful.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                It can be introduced into specific workflows where it provides meaningful value. We engineer intelligent capabilities designed around your exact workflows, prioritizing system transparency and appropriate human review.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  AI-Assisted Detection & Analysis
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integrate appropriate AI models into supported detection, classification or analysis workflows with clinical oversight safeguards.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Document & Report Processing
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Extract, structure or process information from relevant healthcare documents, scan receipts, and diagnostic reports where appropriate.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  AI-Assisted Workflows
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Use AI to support information-heavy or repetitive workflows while allowing appropriate human review and verification before action.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Existing Model Integration
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integrate suitable third-party or existing AI models into production environments instead of unnecessarily building everything from scratch.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs md:col-span-2 lg:col-span-2">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Custom AI Features Designed Around Real Workflows
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Design AI-assisted functionality around a specific healthcare product and workflow—such as intelligent appointment triaging, smart text summaries, and automated patient check-in questionnaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 17: Who Are You Building For? ────────────── */}
        <section id="who-are-you-building-for" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Target Stakeholders
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Who Are You Building For?
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Different healthcare buyers and users require fundamentally different technical foundations. Select your audience to see tailored solution pathways.
              </Typography>
            </div>

            <AudienceSelector />
          </div>
        </section>

        {/* ── Section 18: Capabilities Matrix ──────────────────── */}
        <section id="capabilities" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Full-Stack Capabilities
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Capabilities for Modern Healthcare Products
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                From responsive patient-facing interfaces to resilient backend clusters and connected medical devices.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Domain 1: Product Experiences */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Domain 01
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Product Experiences
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Web Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Mobile Applications (iOS & Android)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Patient & Caregiver Portals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Administrative & Clinical Portals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Scheduling & Consultation Calendars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Push, Email & SMS Notifications</span>
                  </li>
                </ul>
              </div>

              {/* Domain 2: Platform & Data */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Domain 02
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Platform & Data
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Scalable Backend Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Cloud Infrastructure Engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Clinical & Operational Dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Automated Reporting Engines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Health Data Visualization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Fast Indexing, Search & Filtering</span>
                  </li>
                </ul>
              </div>

              {/* Domain 3: Integrations */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Domain 03
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Integrations
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>API Design & Protocol Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Third-Party Healthcare Connectors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Healthcare Device Telemetry Links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Laboratory LIMS/LIS Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Medical Billing & Payment Gateways</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>External Healthcare EHR/EMR Feeds</span>
                  </li>
                </ul>
              </div>

              {/* Domain 4: AI & Devices */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Domain 04
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  AI & Devices
                </h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>AI Model Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>AI-Assisted Workflow Triage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Embedded Device Software</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Device Communication Bridges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Device-Generated Data Capture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Edge Processing & Buffering</span>
                  </li>
                </ul>
              </div>

              {/* Domain 5: Operations & Security */}
              <div className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs md:col-span-2 lg:col-span-2">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Domain 05
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Operations & Security Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Multi-Factor Authentication (MFA)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Role-Based Access Control (RBAC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Immutable Audit Trails & Logs</span>
                    </li>
                  </ul>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Document Storage & E-Signatures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Workflow Automation & State Machines</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Encryption At Rest & In Transit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 19: Security, Privacy & Architecture ─────── */}
        <section id="security-and-privacy" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Risk Management
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Security and Privacy Considered From the Start
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Healthcare products can handle sensitive information, making security, privacy and access control important considerations throughout product design and development.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mt-3">
                Depending on the application and its requirements, this can include secure authentication, role-based permissions, encryption, controlled access, auditability, secure infrastructure and appropriate data-handling practices. If a product needs to meet specific healthcare, privacy or regional regulatory requirements, those requirements should be identified during discovery and incorporated into the technical and operational scope.
              </Typography>
            </div>

            <SecurityArchitectureVisual />
          </div>
        </section>

        {/* ── Section 20: Modernization & Migration ───────────── */}
        <section id="modernization" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Platform Evolution
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Already Have Healthcare Software? You Don&apos;t Need to Start Again.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Not every healthcare project begins with a blank screen. You may already have users, workflows, integrations and years of product knowledge inside an existing application. Mickiesoft can help assess what should be retained, improved, replaced or migrated.
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Modernize the Experience
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Improve outdated UX/UI while preserving important clinical and patient workflows that users already trust.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Modernize the Technology
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Move away from difficult-to-maintain or limiting legacy codebases toward modern, supported frameworks.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Migrate Apps or Infrastructure
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Plan cloud and database migrations around product dependencies, third-party integrations and continuity requirements.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  Extend the Existing Product
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Add mobile experiences, integrations, AI capabilities, dashboards or new workflows without unnecessary rebuilding.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-foreground">
                  Have an existing healthcare codebase or platform?
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  We can conduct an architectural assessment and outline practical modernization steps.
                </p>
              </div>
              <Button asChild size="lg" className="rounded-full px-7 shrink-0">
                <Link href="/#contact">
                  <span>Talk to Us About Your Existing Platform</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Section 21: Development Process ─────────────────── */}
        <section id="development-process" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Structured Execution
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                From Healthcare Product Idea to Working Software
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                A disciplined six-stage development process designed to deliver clinical utility, maintainability, and clean architecture.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Understand",
                  desc: "We start with the users, business problem, workflows, existing technology and objectives.",
                  deliverable: "Stakeholder mapping & problem definition"
                },
                {
                  step: "02",
                  title: "Define",
                  desc: "Translate requirements into user journeys, functionality, architecture, integrations and practical scope.",
                  deliverable: "Product scope & technical specification"
                },
                {
                  step: "03",
                  title: "Design",
                  desc: "Create experiences around the people who will actually use the product.",
                  deliverable: "Wireframes, UI designs & user flows"
                },
                {
                  step: "04",
                  title: "Build",
                  desc: "Develop the web, mobile, backend, embedded or integration components required by the solution.",
                  deliverable: "Clean, production-tested software code"
                },
                {
                  step: "05",
                  title: "Validate & Launch",
                  desc: "Test the agreed functionality and prepare the product for deployment.",
                  deliverable: "Quality assurance & deployment rollout"
                },
                {
                  step: "06",
                  title: "Evolve",
                  desc: "Continue adding features, integrations and improvements as the product and its users grow.",
                  deliverable: "Continuous enhancement & roadmap delivery"
                },
              ].map((process, i) => (
                <div key={i} className="p-7 rounded-3xl bg-surface border border-border/70 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors">
                  <div>
                    <div className="text-xs font-mono font-bold text-primary mb-3">
                      STAGE {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {process.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {process.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/50 text-xs text-foreground/80 font-medium">
                    Outcome: {process.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 22: Technology Stack ─────────────────────── */}
        <section id="technology-stack" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Proven Stack
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Technology Chosen Around the Product
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Healthcare products have different technical requirements. The technology stack should be selected based on architecture, user experience, integrations, scalability, maintainability and the existing product environment—not simply because one framework is currently popular.
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Frontend
                </div>
                <div className="space-y-2 mt-3">
                  {["React", "Next.js", "Angular", "TypeScript"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Backend
                </div>
                <div className="space-y-2 mt-3">
                  {["Node.js", ".NET", "Java", "PHP / Laravel"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Mobile
                </div>
                <div className="space-y-2 mt-3">
                  {["Flutter", "Kotlin"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Data
                </div>
                <div className="space-y-2 mt-3">
                  {["MySQL", "SQL Server", "MongoDB"].map((t) => (
                    <div key={t} className="text-sm font-semibold text-foreground py-1 border-b border-border/40 last:border-none">
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  Cloud & Infra
                </div>
                <div className="space-y-2 mt-3">
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

        {/* ── Section 23: Why Mickiesoft ───────────────────────── */}
        <section id="why-mickiesoft" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Strategic Partner
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Why Healthcare Teams Work With Mickiesoft
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                We combine product thinking with dependable engineering discipline to help healthcare companies build lasting software.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  We Can Join at Any Stage
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Idea, MVP, existing product, modernization, migration or scale—we don&apos;t require every project to begin from zero.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Product + Engineering Thinking
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We look at the users, workflows and business problem before jumping into implementation, ensuring what we build solves the real challenge.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Web, Mobile & Beyond
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our work can extend across web, mobile, backend, cloud, integrations, AI, devices and embedded software where the product requires it.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Integration-Minded
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We consider how the healthcare product needs to communicate with the systems, devices and services around it.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Built to Evolve
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Products change. Architecture and implementation should allow sensible evolution rather than making every future requirement a rebuild.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-surface border border-border/70 shadow-xs">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Global Collaboration
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mickiesoft is based in Sri Lanka and works with international teams and products, delivering high-touch collaboration across global time zones.
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
                TODO: Surface verified public healthcare case studies once approved for publication.
            */}
          </div>
        </section>

        {/* ── Section 25: FAQs ─────────────────────────────────── */}
        <section id="faq" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Questions & Answers
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Healthcare App Development FAQs
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Find answers to common questions about our healthcare software capabilities, engagement models, and delivery process.
              </Typography>
            </div>

            <HealthcareFaq />

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

        {/* ── Section 26: Final Conversational Conversion ─────── */}
        <section id="get-in-touch" className="py-20 lg:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-primary/10 via-card to-background border border-primary/20 shadow-2xl relative">
              <div className="max-w-2xl">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/15 text-primary mb-4">
                  Let&apos;s Build Together
                </span>
                <Typography variant="h2" className="text-3xl sm:text-4xl font-extrabold text-foreground mb-5 leading-tight">
                  Wherever You Are With Your Healthcare Product, Let&apos;s Talk.
                </Typography>
                
                <div className="space-y-3 text-muted-foreground leading-relaxed mb-8 text-base">
                  <p>Maybe you have an idea on paper.</p>
                  <p>Maybe you&apos;re trying to launch your first MVP.</p>
                  <p>Maybe users already depend on your application and you need to improve what&apos;s there.</p>
                  <p>Or perhaps you need to connect healthcare devices, integrate laboratory data, introduce AI, modernize an older platform or move the product to a new environment.</p>
                  <p className="font-medium text-foreground pt-2">
                    Tell us where you are today and what you&apos;re trying to achieve. We&apos;ll help you work out what comes next.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/#contact">
                      <span>Discuss Your Healthcare Product</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <Link href="/#about">
                      <span>Learn More About Mickiesoft</span>
                    </Link>
                  </Button>
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
