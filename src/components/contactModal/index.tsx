import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { valibotResolver } from '@hookform/resolvers/valibot'
import * as v from 'valibot'

import MethodToggle from '@/components/methodToggle/methodToggle.tsx'
import Required from '@/components/required'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card.tsx'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input.tsx'

interface ContactModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const formSchema = v.object({
  method: v.picklist(['phone', 'text', 'whatsapp']),
  name: v.pipe(
    v.string('Your name must be a string.'),
    v.trim(),
    v.nonEmpty('Please enter your name.')
  ),
  phone: v.pipe(
    v.string(),
    v.trim(),
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
    console.log(values)
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Choose the way to communicate works best for you
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                      control={control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name
                            <Required />
                          </FormLabel>
                          <FormControl>
                            <Input
                              minLength={1}
                              placeholder="John Galt"
                              required
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                      rules={{
                        minLength: 1,
                        required: true,
                      }}
                    />
                    <FormField
                      control={control}
                      name="phone"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>
                              Phone
                              <Required />
                            </FormLabel>
                            <FormControl>
                              <Input
                                minLength={1}
                                pattern="[0-9]{10}"
                                placeholder="1234567890"
                                required
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )
                      }}
                      rules={{
                        minLength: 1,
                        pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                        required: true,
                      }}
                    />
                    <FormField
                      control={control}
                      name="method"
                      render={({ field }) => {
                        const { onChange, value } = field
                        return (
                          <FormItem>
                            <FormLabel>
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
