import React from "react"
import './style.css'
export const MenuBar = () => {
    return  (
        <div className="menu-wrapper">
            <ul className="menu-listing">
                <li className="menu-item">Molding</li>
                <li className="menu-item">Chiller</li>
                <li className="menu-item">Blowing</li>
                <li className="menu-item">Dryer</li>
            </ul>
        </div>
    )
}