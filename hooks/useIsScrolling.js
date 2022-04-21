import { useEffect, useState } from 'react'

// A custom hook:
const useIsScrolling = (timeout_ms) => {
  const [isScrolling, setIsScrolling] = useState(false)

  let timer = null
  const onScroll = () => {
    setIsScrolling(true)
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      setIsScrolling(false)
    }, timeout_ms ?? 1500)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  return isScrolling
}

export default useIsScrolling

export function DisplayIfScrolling({ children, timeout_ms, display }) {
  const isScrolling = useIsScrolling(timeout_ms)

  return <div className={`${!isScrolling ? 'hidden' : display ?? ''}`}>{children}</div>
}

export function VisibleIfScrolling({ children, timeout_ms }) {
  const isScrolling = useIsScrolling(timeout_ms)

  return <div className={`${!isScrolling ? 'hidden' : 'visible'}`}>{children}</div>
}