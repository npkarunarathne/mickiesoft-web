"use client"

import React, { useState } from "react"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { 
  Rocket, 
  Cpu, 
  FlaskConical, 
  Building2, 
  Sparkles, 
  Heart, 
  Stethoscope, 
  ShieldAlert, 
  Building, 
  ClipboardCheck,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

const AUDIENCES = [
  {
    id: "startups",
    label: "Healthcare Startups",
    icon: Rocket,
    title: "Launch High-Impact MVPs & Scale Validated HealthTech Products",
    description: "Turn an early healthcare product concept into a focused MVP, validate clinical or consumer workflows, and evolve your architecture smoothly as user adoption accelerates.",
    focusPoints: [
      "Rapid prototyping and iterative MVP releases",
      "Investor-ready technical architecture and pitch roadmaps",
      "Cost-effective offshore engineering without architectural compromises",
      "Scalable infrastructure designed for rapid feature iteration"
    ],
    exampleWorkflow: "Patient engagement and telehealth MVP launched within months to prove market demand."
  },
  {
    id: "device",
    label: "Medical Device Companies",
    icon: Cpu,
    title: "Connect Hardware Devices With Modern Web & Mobile Ecosystems",
    description: "Connect supported healthcare hardware with cloud services, interactive web dashboards, companion mobile applications, and the software experiences surrounding your physical devices.",
    focusPoints: [
      "Firmware/embedded interface connectivity (BLE, Wi-Fi, Cellular)",
      "Real-time vital telemetry ingestion and time-series pipelines",
      "Clinician monitoring consoles with customizable alert thresholds",
      "Companion mobile apps for patient setup and remote telemetry"
    ],
    exampleWorkflow: "Real-time wearable monitor streaming vitals to a cloud dashboard for clinical oversight."
  },
  {
    id: "laboratories",
    label: "Laboratories & Diagnostic Centers",
    icon: FlaskConical,
    title: "Integrate Laboratory Data Into Streamlined Digital Workflows",
    description: "Connect supported laboratory information, instruments, and diagnostic reports with digital workflows, patient-facing portals, and external healthcare applications.",
    focusPoints: [
      "Automated diagnostic report generation and secure distribution",
      "Bidirectional LIMS/LIS interface development",
      "Secure patient portal for viewing lab results and historical trends",
      "Doctor alert systems for critical diagnostic values"
    ],
    exampleWorkflow: "Automated delivery of structured lab panels directly to referring clinics and patient smartphones."
  },
  {
    id: "clinics",
    label: "Clinics & Hospitals",
    icon: Building2,
    title: "Modernize Practice Management, Scheduling & Care Delivery",
    description: "Digitize day-to-day operations, appointments, patient intake, communication, and administrative documentation to reduce friction for medical staff.",
    focusPoints: [
      "Multi-provider scheduling, resource booking, and waitlist management",
      "Digital intake forms, e-signatures, and patient check-in kiosks",
      "Integrated telehealth consultation rooms with screen sharing",
      "Staff coordination and internal task delegation boards"
    ],
    exampleWorkflow: "All-in-one clinic portal combining online booking, automated reminders, and video consults."
  },
  {
    id: "healthtech",
    label: "HealthTech Scale-ups",
    icon: Sparkles,
    title: "Extend Platforms With AI, Integrations & High-Throughput APIs",
    description: "Expand existing digital health platforms with new microservices, AI-assisted detection workflows, third-party connectors, and robust multi-tenant architectures.",
    focusPoints: [
      "AI-assisted classification, text extraction, and workflow triage",
      "Public and private API development for ecosystem partners",
      "Multi-tenant SaaS partitioning and enterprise customer support",
      "Cloud performance tuning for high-concurrency patient spikes"
    ],
    exampleWorkflow: "Adding an intelligent triage engine to an existing telehealth platform without interrupting live traffic."
  },
  {
    id: "patients",
    label: "Patients & Caregivers",
    icon: Heart,
    title: "Intuitive, Compassionate Digital Experiences for Everyday Care",
    description: "Design accessible, user-friendly mobile and web experiences that empower patients and families to manage their care plans, appointments, and vitals with clarity.",
    focusPoints: [
      "Accessible UX (WCAG compliance, large touch targets, high contrast)",
      "Medication reminders, adherence logs, and refill requests",
      "Secure messaging with care teams and family member access delegation",
      "Educational libraries and symptom tracking diaries"
    ],
    exampleWorkflow: "Elderly-friendly chronic care mobile application with automated medication reminders."
  },
  {
    id: "professionals",
    label: "Healthcare Professionals",
    icon: Stethoscope,
    title: "Clinician-Centric Workflows That Reduce Administrative Fatigue",
    description: "Build interfaces tailored to the speed, accuracy, and documentation needs of doctors, nurses, and specialists—eliminating clutter and minimizing clicks.",
    focusPoints: [
      "Rapid chart review with intuitive data visualization",
      "Voice dictation and quick-template clinical notes",
      "Mobile rounds support and emergency alert notifications",
      "Customizable diagnostic summaries and decision support panels"
    ],
    exampleWorkflow: "Specialist consultation tablet app enabling fast chart reviews between patient rounds."
  },
  {
    id: "providers",
    label: "Healthcare Service Providers",
    icon: ShieldAlert,
    title: "Scalable Platforms for Specialized Health & Wellness Services",
    description: "Develop custom platforms for home healthcare, physical therapy, mental health networks, and specialized concierge medical providers.",
    focusPoints: [
      "Field staff dispatch, GPS routing, and home visit documentation",
      "Direct-to-consumer subscription models and billing automation",
      "Client goal tracking and longitudinal progress visualizers",
      "Secure telehealth and asynchronous provider chat"
    ],
    exampleWorkflow: "Home care dispatch portal matching mobile nurses with patients based on proximity and specialty."
  },
  {
    id: "enterprise",
    label: "Enterprise Organizations",
    icon: Building,
    title: "Enterprise-Grade Healthcare Portals & Secure Integrations",
    description: "Engineered for complex organizations requiring strict governance, granular role-based permissions, multi-department workflows, and legacy system coexistence.",
    focusPoints: [
      "Enterprise Single Sign-On (SSO) and centralized access management",
      "Comprehensive audit logging for institutional governance",
      "Disaster recovery, automated failover, and high-availability SLAs",
      "Custom enterprise middleware bridging on-premise and cloud infrastructure"
    ],
    exampleWorkflow: "Multi-hospital hospital network unified under a centralized administrative and reporting console."
  },
  {
    id: "operations",
    label: "Admin & Operations Teams",
    icon: ClipboardCheck,
    title: "Back-Office Automation, Billing & Operational Transparency",
    description: "Equip billing teams, practice managers, and operations staff with real-time dashboards, claims tracking, and operational automation.",
    focusPoints: [
      "Automated insurance eligibility checking and claims processing",
      "Real-time revenue cycle management (RCM) dashboards",
      "Staff scheduling, utilization metrics, and credential tracking",
      "Regulatory audit report generation and document repositories"
    ],
    exampleWorkflow: "Automated billing dashboard flagging claim errors prior to submission to reduce rejections."
  }
]

export function AudienceSelector() {
  const [selectedId, setSelectedId] = useState(AUDIENCES[0].id)
  const active = AUDIENCES.find((a) => a.id === selectedId) || AUDIENCES[0]
  const ActiveIcon = active.icon

  return (
    <div className="w-full">
      {/* Scrollable Audience Pills */}
      <div 
        className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        role="tablist"
        aria-label="Healthcare audience selector"
      >
        {AUDIENCES.map((aud) => {
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
      <div className="glass rounded-3xl p-6 md:p-10 border border-border/80 shadow-xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
              <ActiveIcon className="w-3.5 h-3.5" />
              <span>Tailored for {active.label}</span>
            </div>
            <Typography variant="h3" className="text-foreground text-2xl md:text-3xl font-bold mb-3">
              {active.title}
            </Typography>
            <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-6 max-w-2xl">
              {active.description}
            </Typography>

            <div className="p-4 rounded-2xl bg-surface/80 border border-border/60 mb-6">
              <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                Real-World Solution Scenario
              </div>
              <p className="text-sm text-foreground/90 font-medium">
                {active.exampleWorkflow}
              </p>
            </div>

            <Button asChild size="lg" className="rounded-full px-7 shadow-md">
              <Link href="/#contact">
                <span>Discuss Your Requirements</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="w-full lg:w-96 p-6 rounded-2xl bg-card border border-border/80 shrink-0">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
              Key Engineering Focus Areas
            </div>
            <ul className="space-y-3">
              {active.focusPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
