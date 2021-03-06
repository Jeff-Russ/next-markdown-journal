import { useEffect, useState } from 'react'

// A custom hook:
const useIsScrolling = (timeout_ms) => {
  const [isScrolling, setIsScrolling] = useState(false)

  let timer = null
  const onScroll = () => {
    clearTimeout(timer)
    setIsScrolling(true)
    // if (timer !== null) {
    //   clearTimeout(timer)
    //   console.log("clearing timeout")
    // }
    timer = setTimeout(() => {
      setIsScrolling(false)
    }, timeout_ms ?? 4000)
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll) // or window.?
    if ('ontouchstart' in window) {
      // console.log('touch screen found')
      document.addEventListener('touchStart', onScroll)
      document.addEventListener('touchMove', onScroll)
      document.addEventListener('touchEnd', onScroll)
    }
    return () => {
      document.removeEventListener('scroll', onScroll) // or window.?
      if ('ontouchstart' in window) {
        // console.log('touch screen found'
        document.removeEventListener('touchStart', onScroll)
        document.removeEventListener('touchMove', onScroll)
        document.removeEventListener('touchEnd', onScroll)
      }
    }
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
