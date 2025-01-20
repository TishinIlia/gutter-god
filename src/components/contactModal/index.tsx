import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog.tsx'
import { FC } from 'react'

interface ContactModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const ContactModal: FC<ContactModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Appointment details</DialogTitle>
            <DialogDescription>
              Choose the way to communicate works best for you
            </DialogDescription>
          </DialogHeader>
          <div></div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ContactModal
