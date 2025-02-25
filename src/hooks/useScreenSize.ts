import { useState, useEffect } from 'react'

import { useThrottle } from '@/hooks/useThrottle.ts'

export interface ScreenSize {
  height: number
  width: number
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  const handleResize = () => {
    setScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  }

  const throttledResize = useThrottle(handleResize, 500)

  useEffect(() => {
    window.addEventListener('resize', throttledResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', throttledResize)
    }
  }, [throttledResize])

  return screenSize
}

export default useScreenSize
