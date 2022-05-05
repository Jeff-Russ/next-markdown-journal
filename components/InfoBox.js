// https://blog.logrocket.com/detect-click-outside-react-component-how-to/
import { useEffect, useRef } from 'react'

export function InfoBox(props) {
  const ref = useRef(null)
  const { onClickOutside } = props

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside])

  if (!props.show) return null

  return (
    <div ref={ref} className="info-box">
      {props.message}
    </div>
  )
}

/* Usage:

import { useState } from 'react';
import { InfoBox } from '@/components/InfoBox.js';

export default function infoBoxTest() {
  let [showInfo1, setShowInfo1] = useState(false);
  return (
    <div className="container">
      <div className="info-box-wrapper">
        <button onClick={() => {setShowInfo1(true)}} style={{marginRight: '4px'}}>Show InfoBox Functional</button>
        <InfoBox show={showInfo1} onClickOutside={() => {setShowInfo1(false)}} message="Click outside to close this"/>
      </div>
    </div>
  );
}

*/

/* example css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container {
  display: flex;
  justify-content: center;
  padding-top: 40vh;
}
.container .info-box-wrapper {
  position: relative;
}
.container .info-box {
  user-select: none;
  width: 300px;
  background: #ffc00d;
  font-size: 14px;
  padding: 12px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  top: 20px;
  position: absolute;
}
*/
