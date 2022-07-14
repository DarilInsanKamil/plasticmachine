import React from 'react'
import { Button, Gap } from '../..'
import { LandingImage } from '../../../assets'
import './style.css'

export const Jumbotron = () => {
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
          <Gap width='10px' />
          <div className="button-product">
            <Button value="List Product" style={{ backgroundColor: 'transparent', border: '1px solid black', color: 'black' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
