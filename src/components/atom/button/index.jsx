import React from "react"
import './index.css'
export const Button = ({ value, ...rest }) => {
    return (
        <button className="buttonstyle" {...rest}>
            {value}
        </button>
    )
}