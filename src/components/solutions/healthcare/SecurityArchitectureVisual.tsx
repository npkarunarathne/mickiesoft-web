"use client"

import React from "react"
import { 
  Lock, 
  KeyRound, 
  ShieldCheck, 
  Database, 
  ArrowRight,
  CheckCircle2
} from "lucide-react"

export function SecurityArchitectureVisual() {
  const tiers = [
    {
      step: "01",
      title: "Authentication Layer",
      subtitle: "Verified Identity Entry",
      icon: KeyRound,
      items: [
        "Multi-Factor Authentication (MFA)",
        "Single Sign-On (SSO / OAuth2 / SAML)",
        "Secure Session & Token Expiry",
        "Brute Force & Rate Limit Protection"
      ]
    },
    {
      step: "02",
      title: "Authorization & Permissions",
      subtitle: "Access Boundary Control",
      icon: Lock,
      items: [
        "Role-Based Access Control (RBAC)",
        "Principle of Least Privilege",
        "Row-Level Data Partitioning",
        "Granular Patient Record Visibility"
      ]
    },
    {
      step: "03",
      title: "Application & Services",
      subtitle: "Auditable Processing Logic",
      icon: ShieldCheck,
      items: [
        "Immutable Audit Trails & Access Logs",
        "Strict Input Sanitization & Validation",
        "Separation of PHI & Metadata",
        "Isolated API Gateways & Zero-Trust Mesh"
      ]
    },
    {
      step: "04",
      title: "Protected Data Layer",
      subtitle: "Storage & Transport Security",
      icon: Database,
      items: [
        "AES-256 Encryption at Rest",
        "TLS 1.3 Encryption in Transit",
        "Automated Encrypted Backups",
        "Secure Key Management Infrastructure"
      ]
    }
  ]

  return (
    <div 
      className="w-full max-w-5xl mx-auto p-6 md:p-10 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 shadow-2xl"
      role="img"
      aria-label="Healthcare application security architecture with authentication, permissions and protected data access"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiers.map((tier, idx) => {
          const Icon = tier.icon
          return (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-surface border border-border/70 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-muted-foreground/60">
                    Tier {tier.step}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-foreground mb-0.5">
                  {tier.title}
                </h4>
                <div className="text-xs text-primary font-medium mb-3">
                  {tier.subtitle}
                </div>
                <ul className="space-y-2 mt-2 pt-2 border-t border-border/50">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-6 pt-4 border-t border-border/60 text-center text-xs text-muted-foreground">
        Applications are engineered around your specific regulatory, privacy and institutional security specifications identified during product discovery.
      </div>
    </div>
  )
}
