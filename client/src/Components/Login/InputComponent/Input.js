import React from 'react'
import "../../Css/Login.css"

function Input({ label, type = 'text', name, value, onChange }) {     
    return (
        <div>
            <label className="SG-label">{label}</label>
            <input 
            className="SG-input"
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}
export default Input

