import { FC, useEffect, useState } from 'react'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import { useParams } from 'react-router'

import * as amplitude from '@amplitude/analytics-browser'
import { CircleAlertIcon } from 'lucide-react'

import { PHONE } from '@/utils/const.tsx'

interface Customer {
  address?: string
  email?: string
  name: string
  phone: string
}

const Schedule: FC = () => {
  const { customerId } = useParams()
  useCalendlyEventListener({
    onEventTypeViewed: (event) => console.log(event),
  })
  const [customer, setCustomer] = useState<Customer | null>(null)

  useEffect(() => {
    if (customerId) {
      const url = `/aaa/api/v4/contacts/${customerId}`
      const options = {
        method: 'GET',
      }

      fetch(url, { ...options })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          const customer: Customer = {
            address: data?.custom_fields_values[2]?.values
              .map((item: { value: string }) => item?.value)
              .join(', '),
            email: data?.custom_fields_values[1]?.values[0]?.value,
            name: data?.name,
            phone: data?.custom_fields_values[0]?.values[0]?.value,
          }
          setCustomer(customer)
        })
        .catch((err) => console.error(err))
    }
  }, [customerId])

  console.log(customer)

  if (!customerId || !customer) {
    return (
      <div className="flex h-screen w-screen">
        <div className="flex w-full grow items-center justify-center">
          <div className="p-4">
            <div className="flex w-full justify-center">
              <CircleAlertIcon className="text-destructive fill-destructive-foreground mb-2 size-6 sm:mb-6 sm:size-14" />
            </div>
            <h1 className="text-accent-foreground mb-4 text-center text-5xl font-medium">
              Something went wrong!
            </h1>
            <p className="mb-4 text-center text-xl">
              Please&nbsp;
              <a
                className="text-muted-foreground hover:text-muted-foreground/90 underline"
                href={`tel:${PHONE}`}
                onClick={() =>
                  amplitude.track('Call Button Clicked', {
                    buttonName: 'schedule_error',
                  })
                }
              >
                reach out to our team
              </a>
              &nbsp;to schedule appointment
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <InlineWidget
      pageSettings={{
        primaryColor: '273517',
        textColor: '525b20',
      }}
      prefill={{
        customAnswers: {
          a1: customer?.address,
        },
        email: customer?.email,
        location: customer?.address,
        name: customer?.name,
        smsReminderNumber: customer?.phone,
      }}
      styles={{
        height: '100vh',
        width: '100%',
      }}
      url="https://calendly.com/itishin/roseville-gutter"
    />
  )
}

export default Schedule
