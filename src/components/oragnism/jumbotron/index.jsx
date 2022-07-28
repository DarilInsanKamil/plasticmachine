import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../..";
import { LandingImage } from "../../../assets";
import "./style.css";
import React from 'react'

export const Jumbotron = () => {
  let navigate = useNavigate()
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
          <Button txt="Hubungi Saya" />
          <Gap width="10px" />
          <div className="button-product">
            <Button
              txt="List Product"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #3B82F6",
                color: "#3B82F6",
              }}
              onClick={() => navigate('productlist')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}