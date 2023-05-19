import React from 'react'
import './style.css'

export default function Bttn_neon (props) {
  return (
    <button  className='bttn-neon'>
          { props.label }
          <span className='top'></span>
          <span className='left'></span>
          <span className='bottom'></span>
          <span className='right'></span>
      </button>
    )
  }
