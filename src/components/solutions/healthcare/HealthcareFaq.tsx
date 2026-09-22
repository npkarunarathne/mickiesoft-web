"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const HEALTHCARE_FAQS = [
  {
    id: "faq-1",
    question: "Can Mickiesoft help if we only have a healthcare app idea?",
    answer: "Yes. You don't need a finished technical specification. We can start by understanding the users, problem, workflows and business requirements before defining the product scope and technical approach."
  },
  {
    id: "faq-2",
    question: "Do you provide custom healthcare app development services?",
    answer: "Yes. Mickiesoft develops healthcare software around the specific users, workflows, integrations and business requirements of the product rather than forcing every project into the same predefined structure."
  },
  {
    id: "faq-3",
    question: "Can you build both healthcare web and mobile applications?",
    answer: "Yes. Depending on the product requirements, a solution can include web applications, mobile applications, administrative portals, backend services and shared integrations."
  },
  {
    id: "faq-4",
    question: "Can Mickiesoft take over or improve an existing healthcare application?",
    answer: "Yes. A project does not need to start from scratch. Depending on the existing product, we can help add functionality, improve the user experience, introduce integrations, modernize parts of the technology stack or plan a broader migration."
  },
  {
    id: "faq-5",
    question: "Can you build an MVP for a healthcare startup?",
    answer: "Yes. We can help identify the essential users and workflows, define an initial scope, design the experience and develop an MVP that can evolve as the product is validated."
  },
  {
    id: "faq-6",
    question: "Can you integrate healthcare devices with an application?",
    answer: "Where suitable interfaces, SDKs, APIs or communication methods are available, supported devices can potentially be integrated with backend services, cloud platforms, web applications and mobile experiences."
  },
  {
    id: "faq-7",
    question: "Can you integrate laboratory reports or healthcare data?",
    answer: "Where the relevant systems provide supported integration methods, laboratory results, reports or other healthcare information can be incorporated into appropriate application workflows."
  },
  {
    id: "faq-8",
    question: "Can you add AI to an existing healthcare product?",
    answer: "Yes, where there is an appropriate use case. AI can be introduced into specific workflows such as supported analysis, classification, information processing or automation without requiring the entire product to be rebuilt around AI."
  },
  {
    id: "faq-9",
    question: "Do you provide healthcare software migration and modernization?",
    answer: "Yes. We can assess existing applications and help plan improvements to the user experience, architecture, technology, infrastructure or integrations based on the product's current state and future requirements."
  },
  {
    id: "faq-10",
    question: "What does healthcare app development cost?",
    answer: "Cost depends on factors such as product scope, user roles, platforms, integrations, device connectivity, AI requirements, security requirements and the state of any existing software. A more accurate estimate can be prepared after understanding the requirements."
  },
  {
    id: "faq-11",
    question: "How long does healthcare app development take?",
    answer: "The timeline depends on the product. A focused MVP and an established multi-platform healthcare ecosystem have very different scopes. The expected delivery approach and timeline should be defined after discovery."
  }
]

export function HealthcareFaq() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-3">
        {HEALTHCARE_FAQS.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="rounded-2xl border border-border/80 bg-card px-5 py-2 shadow-xs transition-all data-[state=open]:border-primary/40 data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-3">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
