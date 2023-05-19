import React from 'react'
import './style.css'


export default function ({ label, children, type, onClick, id }) {

  return (
    <button id={ id ? id : '' }  className='Bttn_default' type={ type ? type : 'button'} onClick={onClick}>
          { !children && !label ? '' : !children && label ? label : children }
      </button>
    )
  }
