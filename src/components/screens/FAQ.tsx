import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.tsx'
import { FAQs } from '@/utils/const.tsx'
import { FC } from 'react'

const FAQ: FC = () => (
  <div className="bg-background px-6 py-24 sm:py-32  lg:px-8">
    <div className="mx-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-foreground/10">
          <Accordion type="multiple" className="pt-6">
            {FAQs.map((faq, index) => (
              <AccordionItem value={`${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-base/7 text-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </dl>
      </div>
    </div>
  </div>
)

export default FAQ
