import React from 'react'
import './IconSwitch.css'

export function IconSwitch({ iconType, onSwitch }) {

    const handleClick = (event) => {
        event.preventDefault()
        onSwitch()
      }
    

    return (
      <div className='switchButton'>
        <span class="material-icons" onClick={onSwitch}>
            { iconType }
        </span>
      </div>
    );
  }
