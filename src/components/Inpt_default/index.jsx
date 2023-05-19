
import React from 'react'
import './style.css'
import keyPress from './inpt.js'

export default function ({type, value, label, onKeyPress, minLength, maxLength}) {
    return (
        <div className="Inpt-default">
            <input type={type} value={value} name="" required="" onKeyUpCapture={ Event => onKeyPress ? keyPress(Event) : false} minLength={minLength} maxLength={maxLength}/>
            <label>{label}</label>
        </div>
    )
}