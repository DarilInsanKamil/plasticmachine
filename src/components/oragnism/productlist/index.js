<<<<<<< Updated upstream:src/components/oragnism/productlist/index.js
import React from 'react'
import './style.css'
import { getInitialData } from '../../../utils/data'
import { CardItem } from '../carditem'

export const ProductList = () => {
=======
import React from "react"
// import { Card } from "../../moleculs"
import './listmachine.css'
import { getInitialData } from "../../../utils/data"
import { CardItem } from "../carditem"
export const ListMachine = ({refs}) => {
>>>>>>> Stashed changes:src/components/oragnism/ListMachine/index.js
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
