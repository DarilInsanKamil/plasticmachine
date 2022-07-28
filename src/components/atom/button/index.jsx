import React from 'react'
import './style.css'

export const Button = ({ txt, ...rest }) => {
    return (
        <button className="buttonstyle" {...rest}>
            {txt}
        </button>
    )
}