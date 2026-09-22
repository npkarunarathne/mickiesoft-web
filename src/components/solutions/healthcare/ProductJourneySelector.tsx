"use client"

import React, { useState } from "react"
import { Link } from "@/i18n/navigation"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { 
  Lightbulb, 
  Rocket, 
  Layers, 
  RefreshCw, 
  ArrowRightLeft, 
  Network, 
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

const JOURNEY_STAGES = [
  {
    id: "idea",
    title: "I Have an Idea",
    shortLabel: "Idea",
    icon: Lightbulb,
    headline: "Have a healthcare product concept but not sure how to turn it into software?",
    description: "We can help clarify the users, workflows, requirements, architecture and initial product scope before moving into UX and development.",
    bullets: [
      "User role mapping (patients, physicians, administrators)",
      "Regulatory & compliance requirement discovery",
      "Technical feasibility & architectural blueprint",
      "Interactive UX wireframes & clickable prototypes"
    ],
    ctaText: "Explore Product Discovery",
    ctaHash: "/#contact"
  },
  {
    id: "mvp",
    title: "We're Building an MVP",
    shortLabel: "MVP",
    icon: Rocket,
    headline: "Need to get the first useful version into users' hands?",
    description: "We can help define the essential workflows, design the experience and build an MVP that gives the product room to evolve.",
    bullets: [
      "Prioritization of high-impact clinical workflows",
      "Rapid web and mobile frontend development",
      "Scalable cloud backend with audit-ready security",
      "Feedback loops to measure user adoption and iteration"
    ],
    ctaText: "Build Your MVP",
    ctaHash: "/#contact"
  },
  {
    id: "existing",
    title: "We Already Have a Product",
    shortLabel: "Live Product",
    icon: Layers,
    headline: "Your product is live, but you need more from it.",
    description: "Add new features, mobile experiences, integrations, dashboards, AI capabilities or operational workflows without rebuilding everything unnecessarily.",
    bullets: [
      "Adding native iOS and Android patient/doctor apps",
      "Developing administrative and operational dashboards",
      "Integrating AI-assisted analysis and automation",
      "Strengthening backend throughput and concurrency"
    ],
    ctaText: "Extend Your Product",
    ctaHash: "/#contact"
  },
  {
    id: "modernization",
    title: "Our Platform Needs Modernization",
    shortLabel: "Modernize",
    icon: RefreshCw,
    headline: "Working with an older interface, architecture or technology stack?",
    description: "We can help modernize the product while protecting the workflows and functionality your users already depend on.",
    bullets: [
      "Modern UI/UX redesign tailored to healthcare workflows",
      "Decoupling legacy monoliths into clean microservices/APIs",
      "Upgrading obsolete dependencies and frameworks",
      "Zero-downtime transition preserving sensitive patient data"
    ],
    ctaText: "Modernize Your Platform",
    ctaHash: "/#contact"
  },
  {
    id: "migration",
    title: "We Need to Migrate",
    shortLabel: "Migrate",
    icon: ArrowRightLeft,
    headline: "Moving applications, infrastructure or data requires more than simply copying software into another environment.",
    description: "We can help assess dependencies, integrations and product requirements before planning the migration.",
    bullets: [
      "Cloud migration to HIPAA-eligible AWS or Azure environments",
      "Database refactoring, optimization, and secure transfer",
      "API and third-party dependency realignment",
      "Continuous data verification and rollback contingency"
    ],
    ctaText: "Discuss Migration",
    ctaHash: "/#contact"
  },
  {
    id: "integrations",
    title: "We Need Integrations",
    shortLabel: "Integrations",
    icon: Network,
    headline: "Need your healthcare product to communicate with devices, laboratories, third-party platforms or other systems?",
    description: "We can design the integration layer around the interfaces, SDKs and APIs available.",
    bullets: [
      "Laboratory Information Management System (LIMS) sync",
      "Medical device communication and telemetry ingestion",
      "Electronic Health Record (EHR/EMR) API connectors",
      "Payment, billing, and identity provider integrations"
    ],
    ctaText: "Explore Integrations",
    ctaHash: "/#contact"
  }
]

export function ProductJourneySelector() {
  const [activeStage, setActiveStage] = useState(JOURNEY_STAGES[0].id)
  const current = JOURNEY_STAGES.find((s) => s.id === activeStage) || JOURNEY_STAGES[0]
  const Icon = current.icon

  return (
    <div className="w-full">
      {/* Visual Lifecycle Ribbon */}
      <div 
        className="mb-8 p-3 rounded-2xl bg-surface border border-border/80 overflow-x-auto"
        role="region"
        aria-label="Healthcare product journey from idea and MVP through modernization and growth"
      >
        <div className="flex items-center justify-between min-w-[620px] gap-2">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isSelected = activeStage === stage.id
            const StageIcon = stage.icon
            return (
              <React.Fragment key={stage.id}>
                <button
                  type="button"
                  onClick={() => setActiveStage(stage.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-102"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  <StageIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{stage.shortLabel}</span>
                </button>
                {idx < JOURNEY_STAGES.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" aria-hidden="true" />
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
                <span>Stage: {current.title}</span>
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
                <Link href={current.ctaHash as any}>
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-card/80 p-6 rounded-2xl border border-border/70">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              How Mickiesoft Steps In
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
