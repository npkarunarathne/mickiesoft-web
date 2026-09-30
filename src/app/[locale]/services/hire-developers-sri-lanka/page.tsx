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
  UsersRound,
  UserCheck,
  Briefcase,
  Wrench,
  Clock,
  ShieldCheck,
  DollarSign,
  MessageSquare,
  Layers,
  Code2,
  Smartphone,
  Globe,
  Server,
  Database,
  FlaskConical,
} from "lucide-react"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const title = "Hire Developers Sri Lanka | Remote Developers | Mickiesoft"
  const description =
    "Hire developers Sri Lanka with Mickiesoft. Choose developers based on your technical needs and budget, build a complete team, and start with a trial."
  const canonicalUrl =
    locale === "en"
      ? "https://mickiesoft.lk/services/hire-developers-sri-lanka"
      : `https://mickiesoft.lk/${locale}/services/hire-developers-sri-lanka`

  return {
    title,
    description,
    keywords: [
      "hire developers sri lanka",
      "hire developers in sri lanka",
      "hire remote developers sri lanka",
      "hire remote developers in sri lanka",
      "sri lanka developers for hire",
      "dedicated developers sri lanka",
      "dedicated development team sri lanka",
      "remote development team sri lanka",
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
          alt: "Hire Developers Sri Lanka — Mickiesoft",
        },
      ],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

export default async function HireDevelopersSriLankaPage({
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mickiesoft.lk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://mickiesoft.lk/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hire Developers Sri Lanka",
            item: "https://mickiesoft.lk/services/hire-developers-sri-lanka",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Hire Developers Sri Lanka",
        description:
          "Hire dedicated developers and remote development teams from Sri Lanka through Mickiesoft. Choose based on technical expertise and budget, with a trial period option.",
        provider: {
          "@type": "Organization",
          name: "Mickiesoft (Pvt) Ltd",
          url: "https://mickiesoft.lk",
          logo: "https://mickiesoft.lk/images/logo.png",
        },
        serviceType: "Remote Software Development Staffing",
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

        {/* ── Breadcrumb ─────────────────────────────────────── */}
        <div className="container mx-auto px-4 max-w-7xl pt-4 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" aria-hidden="true" />
            <Link href="/#services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">
              Hire Developers Sri Lanka
            </span>
          </nav>
        </div>

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative py-14 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left: Copy */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-5">
                  HIRE A DEDICATED TEAM
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15] mb-5">
                  Hire Developers Sri Lanka –{" "}
                  <span className="text-primary">Build the Right Remote Team</span>
                </h1>

                <Typography variant="large" className="text-foreground/90 font-semibold mb-4 text-lg sm:text-xl leading-snug">
                  Looking to hire developers in Sri Lanka for your business?
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg">
                  Whether you need an experienced developer for complex technical work, someone who can be trained to
                  maintain an existing system, additional developers for your current team, or an entire remote
                  operation, Mickiesoft can help you build the team around your actual requirements.
                </Typography>

                <Typography variant="p" className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
                  We understand that both <strong className="text-foreground">technical expertise and budget
                  matter</strong>. Not every role needs the same experience level, and not every business needs
                  the same team structure. Tell us what you need, the expertise required, and your expected budget.
                </Typography>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                    <Link href="/#contact">
                      <span>Discuss Your Requirements</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                    <Link href="#how-it-works">
                      <span>How It Works</span>
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/50 dark:to-violet-900/30 p-10 flex flex-col items-center justify-center gap-6 border border-violet-200/60 dark:border-violet-800/40 shadow-xl">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      <div className="absolute inset-[-12px] rounded-full border-2 border-dashed border-violet-400 dark:border-violet-600 opacity-30 animate-[spin_12s_linear_infinite]" />
                      <div className="absolute inset-[-24px] rounded-full border border-dashed border-violet-300 dark:border-violet-700 opacity-15 animate-[spin_20s_linear_infinite_reverse]" />
                      <div className="w-[86px] h-[86px] rounded-full bg-violet-500 flex items-center justify-center shadow-lg">
                        <UsersRound className="w-11 h-11 text-white" strokeWidth={1.6} />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-bold text-foreground mb-1">Dedicated Remote Teams</p>
                      <p className="text-xs text-muted-foreground">Sri Lanka-based developers working as your extended team</p>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2 text-center">
                      {[
                        { label: "Trial Period", icon: Clock },
                        { label: "Full IP Ownership", icon: ShieldCheck },
                        { label: "Flexible Budget", icon: DollarSign },
                        { label: "Direct Access", icon: MessageSquare },
                      ].map(({ label, icon: Icon }) => (
                        <div key={label} className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/5 border border-violet-200/50 dark:border-violet-700/30">
                          <Icon className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
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

        {/* ── Trial Period Callout ────────────────────────────── */}
        <section className="py-10 border-y border-border/60 section-light">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-base font-bold text-foreground mb-1">Start With a Trial Period</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Where suitable, you can start with an agreed trial period — evaluate how the developer or team works
                  with your organisation, and move forward with a longer-term engagement when the fit is confirmed.
                </p>
              </div>
              <Button asChild className="rounded-full px-7 shrink-0" variant="outline">
                <Link href="/#contact">
                  <span>Ask About a Trial</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Who This Is For ────────────────────────────────── */}
        <section id="who-this-is-for" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Who This Is For
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                What Kind of Team Do You Need?
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Not every business has the same requirement. Whether you&apos;re looking for a single specialist or an
                entire offshore operation, we can work with you to establish the right structure.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: UserCheck,
                  color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
                  title: "A Single Experienced Developer",
                  desc: "Need one strong developer for complex technical work? We can match you with a senior or mid-level developer aligned with your stack and requirements.",
                  tag: "Individual Hire",
                  tagColor: "bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300",
                },
                {
                  icon: Wrench,
                  color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                  title: "A Developer to Maintain an Existing System",
                  desc: "Have a system that needs ongoing support or a developer who can be trained to maintain it? We can prepare or train people around your specific setup.",
                  tag: "Maintenance & Support",
                  tagColor: "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300",
                },
                {
                  icon: Layers,
                  color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                  title: "Developers to Extend Your Existing Team",
                  desc: "Want to add capacity to your current development team? We can provide developers who integrate directly into your existing workflows and processes.",
                  tag: "Team Extension",
                  tagColor: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300",
                },
                {
                  icon: UsersRound,
                  color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
                  title: "A Complete Remote Development Operation",
                  desc: "Looking to build an entire remote team in Sri Lanka? We can help you establish a fully staffed development operation tailored to your business.",
                  tag: "Full Remote Team",
                  tagColor: "bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-300",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="group p-8 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/30 hover:shadow-lg transition-all"
                  >
                    <div className={`h-12 w-12 rounded-2xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`inline-flex text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${item.tagColor} mb-4`}>
                      {item.tag}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ───────────────────────────────────── */}
        <section id="how-it-works" className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                The Process
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                How Hiring Through Mickiesoft Works
              </Typography>
              <Typography variant="lead" className="text-muted-foreground">
                A straightforward process designed around your actual requirements and budget.
              </Typography>
            </div>

            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden lg:block absolute top-10 left-[calc(100%/10)] right-[calc(100%/10)] h-px bg-border/60" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {[
                  {
                    step: "01",
                    title: "Tell Us What You Need",
                    desc: "Share your technical requirements, the experience level you need, and your budget range.",
                    icon: MessageSquare,
                  },
                  {
                    step: "02",
                    title: "We Discuss Options",
                    desc: "We review what's available and discuss suitable candidates or team structures that match your needs.",
                    icon: Briefcase,
                  },
                  {
                    step: "03",
                    title: "Prepare & Train Where Needed",
                    desc: "Where appropriate, we prepare or train developers specifically for your system or stack.",
                    icon: Code2,
                  },
                  {
                    step: "04",
                    title: "Start With a Trial",
                    desc: "Begin with an agreed trial period to evaluate how the developer or team integrates with your organisation.",
                    icon: Clock,
                  },
                  {
                    step: "05",
                    title: "Move to Long-Term Engagement",
                    desc: "Once the fit is confirmed, transition to a longer-term working arrangement on terms that suit both sides.",
                    icon: CheckCircle2,
                  },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div key={s.step} className="relative flex flex-col items-center text-center">
                      <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-5 shadow-sm">
                        <Icon className="w-8 h-8 text-primary" strokeWidth={1.6} />
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

            <div className="mt-14 text-center">
              <Button asChild size="lg" className="rounded-full px-10 shadow-lg shadow-primary/20">
                <Link href="/#contact">
                  <span>Start the Conversation</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── Skills & Roles ─────────────────────────────────── */}
        <section id="skills-roles" className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Skills & Roles
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Developer Roles We Can Fill
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                From front-end specialists to full-stack engineers, mobile developers and QA — we can discuss what
                roles are available and which best match your technical requirements and budget.
              </Typography>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Globe,
                  color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                  title: "Frontend Developers",
                  skills: ["React / Next.js", "Vue.js / Angular", "TypeScript", "UI/UX Implementation"],
                },
                {
                  icon: Server,
                  color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                  title: "Backend Developers",
                  skills: ["Node.js / Python", ".NET / Java / PHP", "REST & GraphQL APIs", "Microservices"],
                },
                {
                  icon: Smartphone,
                  color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                  title: "Mobile Developers",
                  skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
                },
                {
                  icon: Code2,
                  color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
                  title: "Full-Stack Developers",
                  skills: ["End-to-end feature work", "Frontend + Backend", "System design", "Code reviews"],
                },
                {
                  icon: Database,
                  color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
                  title: "Database & Cloud Engineers",
                  skills: ["PostgreSQL / MySQL", "MongoDB / Redis", "AWS / Azure / GCP", "DevOps & CI/CD"],
                },
                {
                  icon: FlaskConical,
                  color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
                  title: "QA & Test Engineers",
                  skills: ["Manual Testing", "Automated Testing", "Cypress / Playwright", "API Testing"],
                },
              ].map((role) => {
                const Icon = role.icon
                return (
                  <div key={role.title} className="p-7 rounded-3xl bg-card border border-border/70 shadow-xs hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className={`h-11 w-11 rounded-2xl ${role.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-4">{role.title}</h3>
                    <ul className="space-y-2">
                      {role.skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Don&apos;t see the exact role you need?{" "}
              <Link href="/#contact" className="text-primary font-semibold hover:underline">
                Tell us what you&apos;re looking for
              </Link>{" "}
              and we&apos;ll discuss what&apos;s possible.
            </p>
          </div>
        </section>

        {/* ── Why Sri Lanka Developers ────────────────────────── */}
        <section className="py-20 lg:py-28 section-light border-y border-border/60">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                Why Sri Lanka
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Why Hire Developers in Sri Lanka?
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base">
                Sri Lanka has an established software development industry with English-speaking engineers, strong
                technical education and competitive cost structures — making it a practical choice for businesses
                looking to hire remote developers without sacrificing quality.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Cost-Effective Without Compromising Quality",
                  desc: "Sri Lanka offers competitive developer rates compared to Western markets, allowing you to build capable teams within a sensible budget.",
                },
                {
                  icon: MessageSquare,
                  title: "English-Speaking Engineers",
                  desc: "Sri Lankan developers are generally fluent in English, making communication, documentation and collaboration straightforward for international teams.",
                },
                {
                  icon: Clock,
                  title: "Workable Time-Zone Overlap",
                  desc: "Sri Lanka (GMT+5:30) offers reasonable overlap with European, Middle Eastern and Australian working hours, enabling effective remote collaboration.",
                },
                {
                  icon: ShieldCheck,
                  title: "Full IP & Code Ownership",
                  desc: "From day one, you retain full ownership of all intellectual property, source code and architecture produced by your hired team.",
                },
                {
                  icon: Code2,
                  title: "Strong Technical Foundations",
                  desc: "Sri Lanka's engineering graduates are well-grounded in computer science fundamentals, with practical experience across modern web, mobile and cloud technologies.",
                },
                {
                  icon: UsersRound,
                  title: "Direct Team Integration",
                  desc: "Developers hired through Mickiesoft work as your extended team — adapting to your processes, tools, communication style and delivery cadence.",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="p-6 rounded-2xl bg-card border border-border/70 shadow-xs">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="rounded-3xl bg-gradient-to-br from-violet-50 via-white to-sky-50 dark:from-violet-950/30 dark:via-slate-950 dark:to-sky-950/30 border border-violet-200/50 dark:border-violet-800/30 p-10 lg:p-16 text-center shadow-sm">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary mb-5">
                Get Started
              </span>
              <Typography variant="h2" className="text-3xl sm:text-4xl font-bold mb-4">
                Tell Us What You Need
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed text-base max-w-2xl mx-auto mb-8">
                We can discuss suitable options, prepare or train people where appropriate, and establish a working
                arrangement that fits your business. No obligation — just a conversation about what&apos;s possible.
              </Typography>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-10 shadow-lg shadow-primary/20">
                  <Link href="/#contact">
                    <span>Discuss Your Requirements</span>
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
      </main>

      <Footer />
    </>
  )
}
