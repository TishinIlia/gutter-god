import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { isPossiblePhoneNumber } from 'react-phone-number-input'

import { valibotResolver } from '@hookform/resolvers/valibot'
import * as v from 'valibot'

import MethodToggle from '@/components/methodToggle/methodToggle'
import Required from '@/components/required'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface ContactModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const formSchema = v.object({
  method: v.picklist(
    ['phone', 'text', 'whatsapp'],
    'Please select callback method.'
  ),
  name: v.pipe(v.string(), v.trim(), v.nonEmpty('Please enter your name.')),
  phone: v.pipe(
    v.string(),
    v.trim(),
    v.nonEmpty('Please enter your phone.'),
    v.check(isPossiblePhoneNumber, 'Invalid phone number'),
    v.digits('The string contains something other than digits.')
  ),
})

type formSchemaType = v.InferInput<typeof formSchema>

const ContactModal: FC<ContactModalProps> = ({ open, setOpen }) => {
  const form = useForm<formSchemaType>({
    defaultValues: {
      method: 'phone',
      name: '',
      phone: '',
    },
    resolver: valibotResolver(formSchema),
  })

  const { control, handleSubmit } = form

  const onSubmit = (values: formSchemaType) => {
    setOpen(false)
    console.log(values)
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogPortal>
        <DialogContent
          aria-describedby={undefined}
          className="p-2 sm:max-w-xl sm:p-6"
        >
          <DialogHeader className="px-3">
            <DialogTitle className="text-accent-foreground max-w-xl text-sm font-bold sm:text-xl">
              Choose the way to communicate works best for you
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4">
            <Card className="py-2">
              <CardContent className="px-2 pt-2 sm:px-6 sm:pt-6">
                <Form {...form}>
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-accent-foreground">
                            Name
                            <Required />
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Galt"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={control}
                      name="phone"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel className="text-accent-foreground">
                              Phone
                              <Required />
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="1234567890"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )
                      }}
                    />
                    <FormField
                      control={control}
                      name="method"
                      render={({ field }) => {
                        const { onChange, value } = field
                        return (
                          <FormItem>
                            <FormLabel className="text-accent-foreground">
                              Preferred communication method
                              <Required />
                            </FormLabel>
                            <FormControl>
                              <MethodToggle onChange={onChange} value={value} />
                            </FormControl>
                          </FormItem>
                        )
                      }}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ContactModal
