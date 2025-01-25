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
} from '@/components/ui/form.tsx'
import { Input } from '@/components/ui/input.tsx'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import * as v from 'valibot'

interface ContactModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const formSchema = v.object({
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
  method: v.picklist(['phone', 'text', 'whatsapp']),
})

type formSchemaType = v.InferInput<typeof formSchema>

const ContactModal: FC<ContactModalProps> = ({ open, setOpen }) => {
  const form = useForm<formSchemaType>({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      method: 'phone',
    },
  })

  const { handleSubmit, control } = form

  const onSubmit = (values: formSchemaType) => {
    console.log(values)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={control}
                      name="name"
                      rules={{
                        minLength: 1,
                        required: true,
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name
                            <Required />
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              required
                              minLength={1}
                              placeholder="John Galt"
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
                      rules={{
                        pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
                        required: true,
                        minLength: 1,
                      }}
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>
                              Phone
                              <Required />
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                required
                                minLength={1}
                                placeholder="1234567890"
                                pattern="[0-9]{10}"
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
