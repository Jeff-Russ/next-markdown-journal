// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
// https://github.com/n8tb1t/use-scroll-position/tree/52f48fa80b461fd1cfbf5c8535560c3c41237d50

import { useRef, useLayoutEffect } from 'react'

// helper function:
function getScrollPosition({ element, useWindow }) {
  /* To support SSR and prevent bugs, check if the DOM is ready, 
  and the window context exists: */
  if (typeof window === `undefined`) return { x: 0, y: 0 }

  /* The modern and the most mobile-friendly ways to get the current scroll 
  position are  window.scroll and target.getBoundingClientRect(). They slightly 
  differ in performance and each one has its uses, so we'll let the user decide 
  which implementation they want to use with the useWindow parameter. */

  if (useWindow) return { x: window.scrollX, y: window.scrollY }

  /* Check if the user requested the scroll  position of the 
  entire page or any specific element within it: */
  const target = element ? element.current : document.body
  /* `element` is passed to this function by its reference created with 
  the useRef hook. */

  const position = target.getBoundingClientRect()

  return { x: position.left, y: position.top }
}

// A custom hook:
export function useScrollPosition(effect, deps, element, useWindow, wait) {
  /* Using useRef rather than useState gives us a a stateful value that 
  won't trigger re-render on each state change. */
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  /* Because our hook is tightly bound to DOM we need to implement it inside an
  Effect hook. By default, effects run after every completed render, but you can 
  choose to fire it only when certain values have changed.

  React currently supports two types of Effect hooks: useEffect and useLayoutEffect.

  We choose would be useLayoutEffect because it runs synchronously immediately 
  after React has performed all DOM mutations. It's useful if you need to make 
  DOM measurements like this and then make DOM mutations or trigger a synchronous 
  re-render by updating the state. 
  
  As far as scheduling, this works the same way as componentDidMount and 
  componentDidUpdate. Your code runs immediately after the DOM has been updated, 
  but before the browser has had a chance to "paint" those changes.*/

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
  /* We will use the deps parameter to pass an array of custom dependencies 
  into our hook, forcing it to re-render on their state change and preventing 
  any unnecessary renders. */
}
