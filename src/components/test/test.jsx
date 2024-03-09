import React from 'react'
import { useState } from 'react'


export const Test = () => {
    const [clicks, setClicks] = useState(0)
    const handleClick = (event) => {
        setClicks(clicks + 1)
    }

  return (
    <button onClick={handleClick}>
        {`Counter ${clicks}`}
    </button>
  )
}
