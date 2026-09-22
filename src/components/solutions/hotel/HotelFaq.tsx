"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const HOTEL_FAQS = [
  {
    id: "faq-1",
    question: "Does Mickiesoft design websites specifically for hotels and hospitality businesses?",
    answer: "Mickiesoft designs and develops websites around the needs of the individual property and its guests. This can include hotels, resorts, villas, guesthouses, serviced accommodation and other hospitality businesses."
  },
  {
    id: "faq-2",
    question: "Can you redesign our existing hotel website?",
    answer: "Yes. A project does not need to start from scratch. We can review the existing website, retain what still works and improve areas such as structure, visual design, mobile usability, performance, room presentation, booking journeys and technical implementation."
  },
  {
    id: "faq-3",
    question: "Can you integrate our existing booking engine?",
    answer: "Where the booking platform provides suitable APIs, widgets, SDKs or other supported integration methods, the website can be designed around the existing booking environment rather than replacing it unnecessarily."
  },
  {
    id: "faq-4",
    question: "Do you provide hotel website design in Sri Lanka?",
    answer: "Yes. Mickiesoft is based in Sri Lanka and works with businesses locally and internationally. We can design and develop hotel and hospitality websites for Sri Lankan properties while building the experience around both local and international guests."
  },
  {
    id: "faq-5",
    question: "Will the hotel website work properly on mobile devices?",
    answer: "Yes. Responsive design is treated as part of the core experience. Important journeys such as exploring rooms, understanding the property, selecting dates and moving toward booking should remain clear across mobile, tablet and desktop devices."
  },
  {
    id: "faq-6",
    question: "Can you help with hotel website SEO?",
    answer: "SEO considerations can be incorporated into the website architecture, including page structure, search intent, metadata, internal linking, performance, mobile usability, image optimization and relevant structured data. Search performance also depends on factors beyond website development, so rankings should not be guaranteed."
  },
  {
    id: "faq-7",
    question: "Can Mickiesoft integrate a PMS or channel manager?",
    answer: "Potentially, where the relevant platform provides suitable APIs or supported integration methods. The technical feasibility should be assessed based on the specific system and requirements."
  },
  {
    id: "faq-8",
    question: "Can you build websites for resorts and villas as well as hotels?",
    answer: "Yes. The experience can be designed around the type of property, its accommodation, facilities, experiences, location and booking process rather than applying the same structure to every hospitality business."
  },
  {
    id: "faq-9",
    question: "Can Mickiesoft build custom software beyond the hotel website?",
    answer: "Yes. Mickiesoft is a software development company, so where a hospitality requirement extends beyond the public website, we can assess custom applications, APIs, integrations, dashboards, mobile experiences or operational software based on the project's needs."
  },
  {
    id: "faq-10",
    question: "How much does a hotel website cost?",
    answer: "The cost depends on factors such as the size of the website, custom design requirements, content structure, number of properties, booking integrations, third-party systems, multilingual requirements and any custom functionality. A more accurate estimate can be prepared after understanding the property and requirements."
  },
  {
    id: "faq-11",
    question: "How long does it take to design and develop a hotel website?",
    answer: "The timeline depends on the scope. A focused website for a single property and a multi-property hospitality platform with several integrations have very different requirements. The delivery approach and timeline should be defined after discovery."
  }
]

export function HotelFaq() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-3">
        {HOTEL_FAQS.map((faq) => (
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
