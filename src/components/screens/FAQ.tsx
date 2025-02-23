import { FC } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx'
import { FAQs } from '@/utils/const.tsx'

const FAQ: FC = () => (
  <div className="bg-background px-6 py-24 sm:py-32 lg:px-8">
    <div className="mx-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-foreground text-5xl font-semibold tracking-tight sm:text-7xl">
          Frequently asked questions
        </h2>
        <div className="divide-foreground/10 mt-10 space-y-6 divide-y">
          <Accordion className="pt-6" type="multiple">
            {FAQs.map((faq, index) => (
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>
                  <span className="text-foreground text-base/7 font-semibold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground text-base/7">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </div>
)

export default FAQ
