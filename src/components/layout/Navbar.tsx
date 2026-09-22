"use client"

import { useState, useEffect } from "react"
import { Link, usePathname } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/store"
import { useScrollSpy } from "@/hooks"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Typography } from "@/components/typography/Typography"
import { Menu, ChevronDown, HeartPulse, Hotel } from "lucide-react"

type NavItemChild = {
  id: string
  labelKey: any
  path: string
  descKey?: any
  icon?: any
}

type NavItem = {
  id: string
  labelKey: any
  path?: string
  children?: NavItemChild[]
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", labelKey: "home" },
  { id: "about", labelKey: "about" },
  { id: "services", labelKey: "services" },
  {
    id: "solutions",
    labelKey: "solutions",
    children: [
      {
        id: "healthcare",
        labelKey: "healthcareAppDevelopment",
        path: "/solutions/healthcare-app-development",
        descKey: "healthcareAppDevelopmentDesc",
        icon: HeartPulse,
      },
      {
        id: "hotel",
        labelKey: "hotelWebsiteDesign",
        path: "/solutions/hotel-website-design",
        descKey: "hotelWebsiteDesignDesc",
        icon: Hotel,
      },
    ],
  },
  { id: "technologies", labelKey: "technologies" },
  { id: "blog", labelKey: "blog", path: "/blog" },
  { id: "contact", labelKey: "contact" },
]

export function Navbar() {
  const t = useTranslations("nav")
  const activeSection = useAppStore((s) => s.activeSection)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useScrollSpy()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleHashScroll = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const id = window.location.hash.replace("#", "")
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    const timer1 = setTimeout(handleHashScroll, 100)
    const timer2 = setTimeout(handleHashScroll, 500)
    window.addEventListener("hashchange", handleHashScroll)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [pathname])

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setMobileOpen(false)
    }
  }

  function handleNavClick(e: React.MouseEvent, id: string) {
    if (pathname === "/") {
      e.preventDefault()
      scrollToSection(id)
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300  backdrop-blur-md",
        scrolled
          ? "glass shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Typography
            variant="h4"
            as="span"
            className={cn(
              "font-bold tracking-tight transition-colors",
              scrolled ? "text-foreground" : "text-foreground"
            )}
          >
            Mickiesoft
          </Typography>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              const isChildActive = item.children.some((c) => pathname.startsWith(c.path))
              return (
                <div key={item.id} className="relative group/dropdown">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer",
                      isChildActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    <span>{t(item.labelKey)}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/dropdown:rotate-180 group-focus-within/dropdown:rotate-180" />
                  </button>

                  <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none translate-y-1 group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0 group-focus-within/dropdown:opacity-100 group-focus-within/dropdown:pointer-events-auto group-focus-within/dropdown:translate-y-0 transition-all duration-200 z-50">
                    <div className="w-80 rounded-2xl p-2 bg-popover/95 backdrop-blur-xl border border-border shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon || HeartPulse
                        return (
                          <Link
                            key={child.id}
                            href={child.path as any}
                            className={cn(
                              "flex items-start gap-3 p-3 rounded-xl transition-all duration-150 hover:bg-accent/50 group/item",
                              pathname.startsWith(child.path) && "bg-primary/10"
                            )}
                          >
                            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                              <ChildIcon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-semibold text-foreground leading-tight">
                                {t(child.labelKey)}
                              </div>
                              {child.descKey && (
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                  {t(child.descKey)}
                                </p>
                              )}
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.id}
                href={item.path ? (item.path as any) : (pathname === "/" ? `#${item.id}` : `/#${item.id}`)}
                onClick={(e) => {
                  if (item.path) {
                    setMobileOpen(false)
                  } else {
                    handleNavClick(e, item.id)
                  }
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                  item.path ? (pathname.startsWith(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent/50")
                    : activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {t(item.labelKey)}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            className="rounded-full px-6"
            size="sm"
            asChild
          >
            <Link
              href={pathname === "/" ? "#about" : "/#about"}
              onClick={(e) => handleNavClick(e, "about")}
            >
              {t("getStarted")}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-2 mt-8">
                {NAV_ITEMS.map((item) => {
                  if (item.children) {
                    return (
                      <div key={item.id} className="flex flex-col py-1">
                        <div className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {t(item.labelKey)}
                        </div>
                        <div className="flex flex-col gap-1 pl-2">
                          {item.children.map((child) => {
                            const ChildIcon = child.icon || HeartPulse
                            return (
                              <Link
                                key={child.id}
                                href={child.path as any}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                  "flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors",
                                  pathname.startsWith(child.path)
                                    ? "text-primary bg-primary/10 font-semibold"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                              >
                                <ChildIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                  <span className="font-medium text-foreground">{t(child.labelKey)}</span>
                                  {child.descKey && (
                                    <span className="text-xs text-muted-foreground line-clamp-1">{t(child.descKey)}</span>
                                  )}
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.id}
                      href={item.path ? (item.path as any) : (pathname === "/" ? `#${item.id}` : `/#${item.id}`)}
                      onClick={(e) => {
                        if (item.path) {
                          setMobileOpen(false)
                        } else {
                          handleNavClick(e, item.id)
                        }
                      }}
                      className={cn(
                        "px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors",
                        item.path ? (pathname.startsWith(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-accent/50")
                          : activeSection === item.id
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {t(item.labelKey)}
                    </Link>
                  )
                })}
                <Button
                  className="rounded-full mt-4"
                  asChild
                >
                  <Link
                    href={pathname === "/" ? "#about" : "/#about"}
                    onClick={(e) => handleNavClick(e, "about")}
                  >
                    {t("getStarted")}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
