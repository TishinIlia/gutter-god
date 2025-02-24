import { FC } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx'
import { FAQs } from '@/utils/const.tsx'

const FAQ: FC = () => (
  <div className="mx-auto px-4 py-7 sm:max-w-3xl sm:py-10">
    <h2 className="text-accent-foreground text-sm font-bold tracking-tight sm:text-3xl">
      Frequently Asked Questions
    </h2>
    <div className="mt-5">
      <Accordion className="space-y-1" type="multiple">
        {FAQs.map((faq, index) => (
          <AccordionItem
            className="bg-accent rounded-2xl py-2 pr-2 pl-2 sm:rounded-3xl sm:pl-6"
            value={`${index}`}
          >
            <AccordionTrigger className="group flex w-full items-start justify-between p-0">
              <span className="text-accent-foreground flex-1">
                {faq.question}
              </span>
              <span className="bg-background flex size-5 items-center justify-center rounded-full sm:size-9">
                <ChevronDownIcon className="text-accent-foreground size-2 in-data-[state=open]:rotate-180 sm:size-6" />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-accent-foreground pt-3 font-light">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
)

export default FAQ
