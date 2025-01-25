import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'
import WhatsappIcon from '@/components/whatsappIcon'
import { MessageCircleIcon, PhoneIcon } from 'lucide-react'
import { FC } from 'react'

interface MethodToggleProps {
  value: 'phone' | 'text' | 'whatsapp'
  onChange: (value: string) => void
}

const MethodToggle: FC<MethodToggleProps> = ({ value, onChange }) => {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) onChange(value)
      }}
      className="flex w-full items-center"
    >
      <ToggleGroupItem value="phone" className="max-h-none max-w-none flex-1">
        Call me <PhoneIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="text" className="max-h-none max-w-none flex-1">
        Text me <MessageCircleIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="whatsapp"
        className="max-h-none max-w-none flex-1"
      >
        Whatsapp me
        <WhatsappIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default MethodToggle
