import { FC } from 'react'

import { MessageCircleIcon, PhoneIcon } from 'lucide-react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group.tsx'
import WhatsappIcon from '@/components/whatsappIcon'
import useScreenSize from '@/hooks/useScreenSize.ts'

interface MethodToggleProps {
  onChange: (value: string) => void
  value: 'phone' | 'text' | 'whatsapp'
}

const MethodToggle: FC<MethodToggleProps> = ({ onChange, value }) => {
  const { width } = useScreenSize()
  const toggleOrientation: 'horizontal' | 'vertical' =
    width > 800 ? 'horizontal' : 'vertical'
  return (
    <ToggleGroup
      className="flex w-full flex-col items-start sm:flex-row sm:items-center"
      onValueChange={(value) => {
        if (value) onChange(value)
      }}
      orientation={toggleOrientation}
      type="single"
      value={value}
    >
      <ToggleGroupItem
        aria-label="phone"
        className="max-h-none max-w-none flex-initial rounded-full"
        value="phone"
      >
        Call me <PhoneIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        aria-label="text"
        className="max-h-none max-w-none flex-initial rounded-full"
        value="text"
      >
        Text me <MessageCircleIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        aria-label="whatsapp"
        className="max-h-none max-w-none flex-initial rounded-full"
        value="whatsapp"
      >
        Whatsapp me
        <WhatsappIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default MethodToggle
