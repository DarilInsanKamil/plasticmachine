import React from 'react'
import './style.css'

export const Button = ({ value, ...rest }) => {
    return (
        <button className="buttonstyle" {...rest}>
            {value}
        </button>
    )
}