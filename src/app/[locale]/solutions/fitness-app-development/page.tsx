import type { Metadata } from "next"
import { Link } from "@/i18n/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Users,
  Dumbbell,
  Apple,
  Brain,
  Watch,
  Utensils,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Layers,
  Code2,
  FlaskConical,
  Settings,
  RefreshCw,
  Globe,
  Eye,
  Target,
  Cpu,
  ShieldCheck,
  Clock,
  Zap,
  Star,
} from "lucide-react"

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = "Fitness App Development Company | Custom Fitness Apps | Mickiesoft"
  const description =
    "Fitness app development company for custom workout, gym, wellness and AI fitness solutions. From idea and UI/UX to development, integration and launch."
  const canonicalUrl =
    locale === "en"
      ? "https://mickiesoft.lk/solutions/fitness-app-development"
      : `https://mickiesoft.lk/${locale}/solutions/fitness-app-development`

  return {
    title,
    description,
    keywords: [
      "fitness app development company",
      "fitness app development services",
      "health and fitness app development company",
      "fitness mobile app development company",
      "fitness app design and development company",
      "fitness app developers",
      "custom fitness app development",
      "AI fitness app development",
      "gym app development",
      "personal trainer app development",
      "fitness tracking app development",
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
          alt: "Fitness App Development Company — Mickiesoft",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// ─── FAQ Data ──────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What does a fitness app development company do?",
    a: "A fitness app development company designs and develops software for fitness and wellness businesses. Depending on the project, this can include workout apps, personal training platforms, gym applications, activity tracking, wearable integrations, nutrition features and AI-powered functionality.",
  },
  {
    q: "Can Mickiesoft build a fitness app from just an idea?",
    a: "Yes. You do not need a complete technical specification to start the conversation. We can begin with the problem or product idea and work through the requirements, user experience, design and technical direction before development.",
  },
  {
    q: "Can you develop both mobile and web fitness applications?",
    a: "Mickiesoft develops web and mobile software. The platforms required for your fitness product should be determined based on your users and business requirements.",
  },
  {
    q: "Can you integrate wearables with a fitness app?",
    a: "Where the required device or platform provides suitable integration capabilities, wearable or health-platform integrations can be considered. The available data and functionality depend on the APIs, permissions and technical requirements of each platform.",
  },
  {
    q: "Can you add AI to an existing fitness app?",
    a: "AI functionality can be added where it is technically feasible and provides useful value. The existing application, available data, intended AI feature and integration requirements should first be reviewed.",
  },
  {
    q: "Can you build an app for a gym or personal trainer?",
    a: "Yes. The application can be designed around the specific workflows of a gym, fitness studio, coach or personal training business rather than relying on a fixed set of features.",
  },
  {
    q: "Do I need to know exactly what features I want?",
    a: "No. A rough idea or clearly defined business problem is enough to start the discussion. Product requirements and possible features can be explored before development begins.",
  },
  {
    q: "Can you improve an existing fitness application?",
    a: "Yes. If you already have an application, the existing product and required changes can be reviewed to determine whether you need new features, design improvements, integrations, AI functionality, maintenance or other development work.",
  },
  {
    q: "How much does fitness app development cost?",
    a: "The cost depends on the product scope, platforms, integrations, technical complexity, design requirements and development effort. Share your requirements and expected budget so the appropriate approach can be discussed.",
  },
  {
    q: "How do I start?",
    a: "Tell us what you want to build, who it is for, the problem it should solve, any features you already have in mind, your expected budget and target timeline. If you only have the initial idea, that is enough to begin.",
  },
]

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function FitnessAppDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  await params

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://mickiesoft.lk" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: "https://mickiesoft.lk/#services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fitness App Development",
            item: "https://mickiesoft.lk/solutions/fitness-app-development",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Fitness App Development",
        description:
          "Custom fitness and wellness app development — workout apps, gym platforms, personal trainer apps, wearable integrations and AI fitness products.",
        provider: {
          "@type": "Organization",
          name: "Mickiesoft (Pvt) Ltd",
          url: "https://mickiesoft.lk",
          logo: "https://mickiesoft.lk/images/logo.png",
        },
        serviceType: "Fitness App Development",
        areaServed: { "@type": "Place", name: "Global" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  }

  return (
    <>
      <Navbar />

      <main className="flex-1 overflow-hidden pt-24">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ── Breadcrumb ───────────────────────────────────────── */}
        <div className="container mx-auto px-4 max-w-7xl pt-4 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-muted-foreground">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">Fitness App Development</span>
          </nav>
        </div>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative py-14 lg:py-24 overflow-hidden">
          {/* Subtle background blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
            <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-5">
                  FITNESS APP DEVELOPMENT
                </span>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-5">
                  Fitness App{" "}
                  <span className="text-primary">Development Company</span>
                </h1>

                <Typography variant="large" className="text-foreground/90 font-semibold mb-4 text-lg sm:text-xl leading-snug">
                  Have a fitness app idea but not sure how to turn it into a product?
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-3 text-base sm:text-lg">
                  Or already know exactly what you want and need a development team to build it?
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-3 text-base sm:text-lg">
                  Mickiesoft is a <strong className="text-foreground">fitness app development company</strong> that
                  helps businesses turn fitness and wellness ideas into mobile and web products. We can work from a
                  detailed specification, an existing product, or simply an idea.
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
                  From workout and personal training apps to gym management platforms, wearable-connected experiences
                  and AI-powered fitness products, we help you define, design, build and refine the solution around
                  your business.
                </Typography>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/#contact">
                      <span>Discuss Your Fitness App Idea</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <Link href="#fitness-apps-we-build">
                      <span>See What We Build</span>
                    </Link>
                  </Button>
                </div>

                <div className="pt-6 mt-6 border-t border-border/70 w-full">
                  <p className="text-xs font-semibold text-muted-foreground tracking-wide">
                    Workout Apps • Gym Platforms • Personal Trainer Apps • Wearable Integration • AI Fitness • Nutrition
                  </p>
                </div>
              </div>

              {/* Right – visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/50 dark:to-teal-900/30 p-10 flex flex-col items-center justify-center gap-6 border border-emerald-200/60 dark:border-emerald-800/40 shadow-xl">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-emerald-400 dark:border-emerald-600 opacity-30 animate-[spin_12s_linear_infinite]" />
                      <div className="absolute inset-[-24px] rounded-full border border-dashed border-emerald-300 dark:border-emerald-700 opacity-15 animate-[spin_20s_linear_infinite_reverse]" />
                      <div className="w-[86px] h-[86px] rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
                        <Dumbbell className="w-11 h-11 text-white" strokeWidth={1.6} />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-bold text-foreground mb-1">Idea to Product</p>
                      <p className="text-xs text-muted-foreground">Design, build and launch your fitness application</p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2">
                      {[
                        { label: "Custom Builds", icon: Code2 },
                        { label: "AI Fitness", icon: Brain },
                        { label: "Wearables", icon: Watch },
                        { label: "Gym Apps", icon: Dumbbell },
                        { label: "Trainer Apps", icon: Users },
                        { label: "Nutrition", icon: Apple },
                      ].map(({ label, icon: Icon }) => (
                        <div key={label} className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-white/70 dark:bg-white/5 border border-emerald-200/50 dark:border-emerald-700/30">
                          <Icon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="text-xs font-medium text-foreground/80">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Idea to Product Process ───────────────────────────── */}
        <section className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                From Concept to Launch
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                You Bring the Idea. We Help Turn It Into a Product.
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                You do not need to arrive with every feature, screen and technical decision already defined. Tell us
                the problem you want to solve.
              </Typography>
            </div>

            {/* Idea examples */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
              {[
                { icon: Users, text: "Personal trainers need to manage more clients." },
                { icon: Dumbbell, text: "Your gym needs a better member experience." },
                { icon: Brain, text: "You want to build an AI fitness startup." },
                { icon: Lightbulb, text: "You've identified a gap in the fitness market." },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="p-5 rounded-2xl bg-card border border-border/70 flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* 5-step process */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  icon: MessageSquare,
                  title: "Start With the Concept",
                  desc: "We discuss your users, business model, problem, goals and initial feature ideas.",
                },
                {
                  step: "02",
                  icon: Eye,
                  title: "Turn It Into a User Experience",
                  desc: "We map journeys and convert the concept into interfaces and interactive designs before full development.",
                },
                {
                  step: "03",
                  icon: RefreshCw,
                  title: "Review and Refine",
                  desc: "We review the experience with you, challenge assumptions and refine workflows based on your requirements.",
                },
                {
                  step: "04",
                  icon: Code2,
                  title: "Build the Product",
                  desc: "Our development team turns the approved product experience into the required web or mobile application.",
                },
                {
                  step: "05",
                  icon: Zap,
                  title: "Test, Launch and Improve",
                  desc: "We can continue working with you as the product grows, requirements change and new capabilities are introduced.",
                },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.step} className="relative flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border/70 shadow-xs">
                    <div className="relative w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.6} />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Fitness Apps We Can Build ─────────────────────────── */}
        <section id="fitness-apps-we-build" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Product Types
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Fitness Apps We Can Build
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Different fitness businesses solve different problems. We develop solutions around your requirements
                rather than forcing your idea into a predefined product.
              </Typography>
            </div>

            <div className="flex flex-col gap-8">

              {/* Workout & Tracking */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border/70 shadow-xs">
                <div className="lg:col-span-4 bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/50 dark:to-teal-900/30 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <BarChart3 className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                      Fitness Tracking
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10 bg-card flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Workout and Fitness Tracking Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Build applications that help users follow workouts, record activity, monitor progress and stay
                    engaged with their fitness goals.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Workout libraries", "Exercise instructions", "Workout scheduling", "Progress tracking", "Goal setting", "Activity history", "Personal records", "Reminders & notifications", "Progress dashboards"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Trainer */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border/70 shadow-xs">
                <div className="lg:col-span-8 p-8 lg:p-10 bg-card flex flex-col justify-center lg:order-1 order-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Personal Trainer and Coaching Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Give trainers a digital platform for working with clients beyond face-to-face sessions. Designed
                    around the way your coaching business actually works.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Client profiles", "Personalized workout plans", "Exercise assignments", "Progress monitoring", "Trainer-client messaging", "Check-ins", "Scheduling", "Progress photos", "Subscription access", "Trainer dashboards"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-sky-950/50 dark:to-blue-900/30 flex items-center justify-center p-12 lg:order-2 order-1">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-sky-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300">
                      Coaching
                    </span>
                  </div>
                </div>
              </div>

              {/* Gym Apps */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border/70 shadow-xs">
                <div className="lg:col-span-4 bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950/50 dark:to-purple-900/30 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-violet-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Dumbbell className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-300">
                      Gym App
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10 bg-card flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Gym and Fitness Club Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Create a digital experience around your physical fitness business. The exact system can be designed
                    around the way your gym or fitness operation works.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Membership management", "Class schedules", "Session booking", "Trainer booking", "Member profiles", "Attendance", "Notifications", "Payments", "Offers", "Workout programs", "Member engagement"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nutrition & Wellness */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border/70 shadow-xs">
                <div className="lg:col-span-8 p-8 lg:p-10 bg-card flex flex-col justify-center lg:order-1 order-2">
                  <h3 className="text-xl font-bold text-foreground mb-3">Nutrition and Wellness Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Fitness products often extend beyond workouts. Where a feature involves health-related
                    recommendations or sensitive health information, its requirements, data handling and appropriate
                    safeguards should be considered as part of product design.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Meal planning", "Nutrition tracking", "Goal management", "Habit tracking", "Wellness programs", "Progress monitoring", "Personalized recommendations"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-4 bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-950/50 dark:to-amber-900/30 flex items-center justify-center p-12 lg:order-2 order-1">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Apple className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-orange-100 dark:bg-orange-950/60 text-orange-800 dark:text-orange-300">
                      Nutrition
                    </span>
                  </div>
                </div>
              </div>

              {/* Wearables */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-border/70 shadow-xs">
                <div className="lg:col-span-4 bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-950/50 dark:to-pink-900/30 flex items-center justify-center p-12">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-rose-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Watch className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300">
                      Wearables
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8 p-8 lg:p-10 bg-card flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Wearable-Connected Fitness Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    If your product needs data from supported wearables or health platforms, integration can be
                    considered as part of the technical solution. The exact capabilities depend on the devices,
                    platforms and APIs your product needs to support.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Steps & Activity", "Heart rate", "Calories", "Workout sessions", "Sleep data", "Supported fitness metrics"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── AI in Fitness ─────────────────────────────────────── */}
        <section id="ai-fitness" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Artificial Intelligence
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Build AI Into Your Fitness Product
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-2">
                AI does not need to be added simply because it is popular. It should solve a useful problem for the
                user or the business.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                If AI makes sense for your fitness product, we can explore how it can be incorporated into the
                experience.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Dumbbell,
                  color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                  title: "AI Workout Generation",
                  desc: "Create workout programs based on the information and rules available to your system. Supports fitness products that need to generate or adapt workout plans at scale.",
                  tag: "Workout AI",
                },
                {
                  icon: MessageSquare,
                  color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
                  title: "AI Fitness Assistants",
                  desc: "Build conversational experiences that help users navigate the product, understand available information or interact with fitness features through natural language.",
                  tag: "Conversational AI",
                },
                {
                  icon: Eye,
                  color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
                  title: "Computer Vision Experiences",
                  desc: "For suitable use cases, computer vision can be explored for experiences involving movement, exercise recognition or form-related visual analysis.",
                  tag: "Vision AI",
                },
                {
                  icon: Star,
                  color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                  title: "Personalized Experiences",
                  desc: "AI can support personalization based on appropriate user and product data, helping adapt content or experiences to different users.",
                  tag: "Personalization",
                },
                {
                  icon: Settings,
                  color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
                  title: "AI for Gym Operations",
                  desc: "Fitness businesses can explore AI-supported capabilities around operational data, member engagement, reporting, internal workflows and other business processes.",
                  tag: "Operations",
                },
                {
                  icon: Sparkles,
                  color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
                  title: "Problem-First AI",
                  desc: "We first identify the problem and then determine whether AI is actually the right solution — rather than applying it to every feature by default.",
                  tag: "Our Approach",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className={`h-11 w-11 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary/10 text-primary mb-3">
                      {item.tag}
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Gym / Startup split ───────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Gym / Fitness Business */}
              <div className="rounded-3xl border border-border/70 overflow-hidden shadow-xs">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/40 dark:to-teal-900/20 p-8 flex items-center gap-4 border-b border-border/60">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-0.5">For Gym Owners</p>
                    <h3 className="text-lg font-bold text-foreground">Already Running a Gym or Fitness Business?</h3>
                  </div>
                </div>
                <div className="p-8 bg-card">
                  <Typography variant="p" className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    You do not necessarily need to become a software company to introduce technology into your
                    business. Talk to us about the operational problem you are trying to solve.
                  </Typography>
                  <div className="space-y-3 mb-6">
                    {[
                      "We want members to book classes from their phones.",
                      "Our trainers need one place to manage their clients.",
                      "We want to give members personalized workout programs.",
                      "We have data but don't have an easy way to understand it.",
                      "We want our own branded fitness application.",
                    ].map((ex) => (
                      <div key={ex} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/30">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-foreground font-medium">&quot;{ex}&quot;</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-5">
                    Start with the problem. We can help determine what kind of software solution could address it.
                  </p>
                  <Button asChild className="rounded-full w-full" variant="outline">
                    <Link href="/#contact">
                      <span>Talk to Us About Your Gym</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Startup */}
              <div className="rounded-3xl border border-border/70 overflow-hidden shadow-xs">
                <div className="bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-indigo-950/40 dark:to-violet-900/20 p-8 flex items-center gap-4 border-b border-border/60">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-500 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-700 dark:text-indigo-400 mb-0.5">For Startups</p>
                    <h3 className="text-lg font-bold text-foreground">Building a Fitness Startup?</h3>
                  </div>
                </div>
                <div className="p-8 bg-card">
                  <Typography variant="p" className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    You do not need a complete technical specification before talking to us. Bring us what you have
                    and we can use that starting point to help define the product.
                  </Typography>
                  <div className="space-y-2.5 mb-6">
                    {[
                      { label: "Your idea", icon: Lightbulb },
                      { label: "The problem you want to solve", icon: Target },
                      { label: "Who you think will use it", icon: Users },
                      { label: "Competitors or products that inspired you", icon: Star },
                      { label: "Features you already have in mind", icon: CheckCircle2 },
                      { label: "Your expected budget and target timeline", icon: Clock },
                    ].map(({ label, icon: Icon }) => (
                      <div key={label} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/50 dark:border-indigo-800/30">
                        <Icon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                        <p className="text-xs text-foreground font-medium">{label}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="rounded-full w-full" variant="outline">
                    <Link href="/#contact">
                      <span>Bring Us Your Startup Idea</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Custom vs Reusable ────────────────────────────────── */}
        <section className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Development Approach
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Custom Development or Reusable Components?
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Not every fitness business needs to build everything from zero. The right approach depends on how
                unique your requirements are.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Custom Fitness App Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  When your product requires its own workflows, user experience, integrations or business logic, we
                  can design and develop a custom solution around those requirements. This gives you greater control
                  over how the product works and evolves.
                </p>
                <ul className="space-y-2">
                  {["Unique user experience", "Custom business logic", "Purpose-built integrations", "Full product ownership"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-border/70 shadow-xs">
                <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Reusable and Pre-Built Components</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Where appropriate, existing or reusable components can reduce the amount of functionality that
                  needs to be developed from the beginning. Rather than automatically recommending custom development
                  for every feature, we discuss where customization creates value and where reuse makes more sense.
                </p>
                <ul className="space-y-2">
                  {["Faster time to market", "Reduced development cost", "Proven functionality", "Customizable where needed"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Design First ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-4">
                  Design-First Process
                </span>
                <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-5">
                  From Rough Idea to Interactive Design
                </Typography>
                <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-4">
                  One of the biggest risks in software development is building the wrong product. That is why we do
                  not need to jump directly from an idea into development.
                </Typography>
                <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-6">
                  We can first turn the concept into a visual product experience — giving you something tangible to
                  evaluate before committing significant development effort to the wrong direction.
                </Typography>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["User journeys", "Navigation", "Screens", "Workflows", "Feature interactions", "Key product states"].map((item) => (
                    <div key={item} className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/70">
                      <Eye className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-xs font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full px-7">
                  <Link href="/#contact">
                    <span>Start With the Design</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col gap-3">
                {["Tell us what works.", "Tell us what doesn't.", "Change the flow.", "Remove unnecessary features.", "Add what is missing.", "Refine the experience before committing significant development effort."].map((step, i) => (
                  <div key={step} className={`p-5 rounded-2xl border flex items-start gap-3 transition-all ${i < 2 ? "border-primary/30 bg-primary/5" : "border-border/70 bg-card"}`}>
                    <div className="h-6 w-6 shrink-0 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Full Dev Process ─────────────────────────────────── */}
        <section id="our-process" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Development Process
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Our Fitness App Development Process
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  n: "1",
                  icon: MessageSquare,
                  title: "Tell Us Your Idea or Requirement",
                  desc: "Come with a complete specification or simply explain the problem you want to solve. Both are valid starting points.",
                },
                {
                  n: "2",
                  icon: Target,
                  title: "Define the Product",
                  desc: "We work through users, functionality, business requirements, integrations and technical considerations.",
                },
                {
                  n: "3",
                  icon: Eye,
                  title: "Design the Experience",
                  desc: "The concept is converted into user flows, interfaces and prototypes that can be reviewed before development.",
                },
                {
                  n: "4",
                  icon: RefreshCw,
                  title: "Refine It With You",
                  desc: "You review the product direction and provide feedback. We iterate until there is a clear direction.",
                },
                {
                  n: "5",
                  icon: Code2,
                  title: "Develop the Application",
                  desc: "Our development team builds the agreed mobile, web, backend and integration requirements.",
                },
                {
                  n: "6",
                  icon: FlaskConical,
                  title: "Test and Prepare for Launch",
                  desc: "The application is tested against the agreed requirements and prepared for release.",
                },
                {
                  n: "7",
                  icon: Zap,
                  title: "Improve and Expand",
                  desc: "After launch, the product can continue evolving based on actual business needs and user feedback.",
                },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.n} className="p-6 rounded-3xl bg-card border border-border/70 shadow-xs relative">
                    <div className="absolute top-5 right-5 text-4xl font-black text-border/40">{s.n}</div>
                    <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-2 pr-8">{s.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Existing Fitness App ──────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Sparkles, label: "New Features" },
                    { icon: Eye, label: "UI/UX Improvements" },
                    { icon: Smartphone, label: "Mobile Development" },
                    { icon: Globe, label: "Web Development" },
                    { icon: Settings, label: "API Development" },
                    { icon: Layers, label: "Third-Party Integrations" },
                    { icon: Brain, label: "AI Capabilities" },
                    { icon: Zap, label: "Performance Improvements" },
                    { icon: RefreshCw, label: "Ongoing Maintenance" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 p-4 rounded-2xl bg-card border border-border/70 hover:border-primary/30 transition-colors">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs font-semibold text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-4">
                  Existing Applications
                </span>
                <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-5">
                  Have an Existing Fitness App?
                </Typography>
                <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-4">
                  You do not necessarily need to start again. If you already have a fitness application, talk to us
                  about what is not working or what you want to add.
                </Typography>
                <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-8">
                  We can first review the requirement and determine what work is appropriate before making any
                  recommendations.
                </Typography>
                <Button asChild className="rounded-full px-7 shadow-lg shadow-primary/20">
                  <Link href="/#contact">
                    <span>Discuss Your Existing App</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Mickiesoft ────────────────────────────────────── */}
        <section className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Why Mickiesoft
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Why Work With Mickiesoft?
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base mb-3">
                We are a software development company, not a pre-packaged fitness platform. That distinction matters.
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Our job is not to sell you the same fitness application we sell everyone else. We work with you to
                understand what you want to build and develop the solution around those requirements.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Lightbulb,
                  title: "Idea or Spec — Both Work",
                  desc: "If you have a detailed product specification, bring it to us. If you only have the idea, bring that instead.",
                },
                {
                  icon: Code2,
                  title: "Built Around Your Requirements",
                  desc: "From concept to design, from design to development, and from development toward launch — shaped around your business.",
                },
                {
                  icon: RefreshCw,
                  title: "Continues After Launch",
                  desc: "Development does not have to end at first release. We can continue as the product grows and requirements change.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs">
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/30 dark:via-slate-950 dark:to-teal-950/30 border border-emerald-200/50 dark:border-emerald-800/30 p-10 lg:p-16 text-center shadow-sm">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-5">
                Let&apos;s Build
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Let&apos;s Build Your Fitness Product
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto mb-4">
                Your idea does not need to be technically complete before you talk to us.
              </Typography>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8 text-left">
                {[
                  "A simple workout application",
                  "Software for an existing gym",
                  "A wearable-connected experience",
                  "An idea that doesn't fit any category",
                ].map((idea) => (
                  <div key={idea} className="flex items-start gap-2 p-3 rounded-xl bg-white/70 dark:bg-white/5 border border-emerald-200/40 dark:border-emerald-800/30">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{idea}</span>
                  </div>
                ))}
              </div>
              <Typography variant="p" className="text-muted-foreground text-sm mb-8">
                <strong className="text-foreground">Tell us what you want to create.</strong> We will discuss the
                idea with you, understand the business requirement, and determine how we can turn it into a real
                product.
              </Typography>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-10 shadow-lg shadow-primary/20">
                  <Link href="/#contact">
                    <span>Talk to Us About Your Fitness App</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="/#services">
                    <span>Explore All Services</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section id="faq" className="py-20 lg:py-28 section-light border-t border-border/60">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                FAQ
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                Common questions about fitness app development with Mickiesoft.
              </Typography>
            </div>

            <Accordion type="multiple" defaultValue={["faq-0", "faq-1"]} className="w-full space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border/70 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
