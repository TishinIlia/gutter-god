import { useRef } from 'react'

export const useThrottle = (cb: () => void, limit: number) => {
  const lastRun = useRef(Date.now())

  return () => {
    if (Date.now() - lastRun.current >= limit) {
      cb()
      lastRun.current = Date.now()
    }
  }
}
