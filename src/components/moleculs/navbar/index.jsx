import { useNavigate } from "react-router-dom";
import { Button, Gap } from "../../atom";
import "./style.css";
import React from "react";

export const Navbar = () => {
  const navigation = useNavigate()
  return (
    <nav className="navbar-container">
      <h1 className="navabar-title" onClick={() => navigation('/')}>Jual Mesin</h1>
      <ul className="navbar-buttonlist">
        <Gap width="20px" />
        <li className="navbar-list">
          <Button
            txt="Contact"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #3b82f6",
              color: "#3B82F6",
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
