import React from 'react'
import '../../Css/Login.css'

function Button({onClick, button}) {
    return (
        <div>
            <button
                className='SG-submit'
                onClick={onClick}
            >{button}</button>
        </div>
    )
}

export default Button
