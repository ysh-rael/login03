import React from 'react'
import './style.css'
import toggle from'./animation.js';



export default function() {
    return (
        <div className='Bttn_turnDarkMode'>
            <label className="switch">
            <input type="checkbox" id="checkbox" onClick={toggle} />
            <span className="slider"></span>
        </label>
        </div>
    )
}