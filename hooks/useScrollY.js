import { useEffect, useState } from 'react'

// based on: https://designcode.io/react-hooks-handbook-usescrollposition-hook

export const useScrollY = (timeout_ms) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  let timer = null

  useEffect(() => {
    const onScroll = () => {
      const positionY = window.scrollY
      if (scrollPosition !== positionY) {
        setScrollPosition(positionY)
        if (!isScrolling) {
          clearTimeout(timer)
          setIsScrolling(true)

          timer = setTimeout(() => {
            setIsScrolling(false)
          }, timeout_ms ?? 4000)
        }
      }
      // console.log(window.scrollY)
    }
    document.addEventListener('scroll', onScroll) // or window.?
    if ('ontouchstart' in window) {
      // console.log('touch screen found')
      document.addEventListener('touchStart', onScroll)
      document.addEventListener('touchMove', onScroll)
      document.addEventListener('touchEnd', onScroll)
    }
    // else console.log('no touch screen')

    onScroll()
    return () => {
      document.removeEventListener('scroll', onScroll) // or window.?
      if ('ontouchstart' in window) {
        document.removeEventListener('touchStart', onScroll)
        document.removeEventListener('touchMove', onScroll)
        document.removeEventListener('touchEnd', onScroll)
      }
    }
  }, [])

  return { isScrolling, scrollPosition }
}

export default useScrollY

export function DisplayIfScrolling({ children, timeout_ms, display }) {
  const { isScrolling } = useScrollY(timeout_ms)

  return <div className={`${!isScrolling ? 'hidden' : display ?? ''}`}>{children}</div>
}

export function VisibleIfScrolling({ children, timeout_ms }) {
  const { isScrolling } = useScrollY(timeout_ms)

  return <div className={`${!isScrolling ? 'hidden' : 'visible'}`}>{children}</div>
}
