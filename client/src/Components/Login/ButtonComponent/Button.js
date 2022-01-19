import React from 'react'
import '../Login.css'

function Button({onClick, button}) {
    return (
        <div>
            <button
                className='A-submit'
                onClick={onClick}
            >{button}</button>
        </div>
    )
}

export default Button
