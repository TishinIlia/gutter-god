import { FC } from 'react'

import { MessageCircleIcon, PhoneIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'
import WhatsappIcon from '@/components/whatsappIcon'

interface MethodToggleProps {
  onChange: (value: string) => void
  value: 'phone' | 'text' | 'whatsapp'
}

const MethodToggle: FC<MethodToggleProps> = ({ onChange, value }) => {
  return (
    <ToggleGroup
      className="flex w-full items-center"
      onValueChange={(value) => {
        if (value) onChange(value)
      }}
      type="single"
      value={value}
    >
      <ToggleGroupItem className="max-h-none max-w-none flex-1" value="phone">
        Call me <PhoneIcon />
      </ToggleGroupItem>
      <ToggleGroupItem className="max-h-none max-w-none flex-1" value="text">
        Text me <MessageCircleIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="max-h-none max-w-none flex-1"
        value="whatsapp"
      >
        Whatsapp me
        <WhatsappIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default MethodToggle
