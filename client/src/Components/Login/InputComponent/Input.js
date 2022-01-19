import React from 'react'
import "../Login.css"

function Input({ label, type = 'text', name, value, onChange }) {    
      
    
      
    return (
        <div>
            <label className="A-label">{label}</label>
            <input 
            className="A-input"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Input

