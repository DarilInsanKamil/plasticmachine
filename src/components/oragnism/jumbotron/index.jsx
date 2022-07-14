<<<<<<< Updated upstream:src/components/oragnism/jumbotron/index.jsx
import React from 'react'
import { Button, Gap } from '../..'
import { LandingImage } from '../../../assets'
import './style.css'

export const Jumbotron = () => {
=======
import { Button, Gap } from "../..";
import { LandingImage } from "../../../assets";
import "./landingpage.css";

export const LandingPage = ({ Scroll }) => {
>>>>>>> Stashed changes:src/components/oragnism/LandingPage/index.jsx
  return (
    <div className="landingpage-container">
      <img
        src={LandingImage}
        alt="img-components"
        draggable="false"
        className="landingpage-img"
      />
      <div className="landingpage-subcontainer">
        <h1 className="landingpage-title">Jual Injection Machine Plastic</h1>
        <p className="landingpage-desc">
          Kami menjual berbagai jenis mesin plastik
        </p>
        <Gap height="16px" />
        <div className="button-container">
          <Button value="Hubungi Saya" />
<<<<<<< Updated upstream:src/components/oragnism/jumbotron/index.jsx
          <Gap width='10px' />
          <div className="button-product">
            <Button value="List Product" style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black' }} />
=======
          <Gap width="10px" />
          <div className="button-product">
            <Button
              value="List Product"
              style={{
                backgroundColor: "transparent",
                border: "1px solid black",
                color: "black",
              }}
              onClick={Scroll}
            />
>>>>>>> Stashed changes:src/components/oragnism/LandingPage/index.jsx
          </div>
        </div>
      </div>
    </div>
  )
}
