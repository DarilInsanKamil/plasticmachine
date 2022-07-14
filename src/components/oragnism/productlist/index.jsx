import React from "react"
// import { Card } from "../../moleculs"
import './style.css'
import { getInitialData } from "../../../utils/data"
import { CardItem } from "../carditem"
export const ProductList = ({ refs }) => {
    let Data = getInitialData()
    return (
        <div className="listmachine-container" ref={refs}>
            <div className="listmachine-subcontainer">
                <h3 className="listmachine-title">Our Product</h3>
                <p className="listmachine-desc">fuhrung injection molding</p>
            </div>
            <section className="listmachine-list">
                <CardItem datas={Data} />
            </section>
        </div>
    )
}
