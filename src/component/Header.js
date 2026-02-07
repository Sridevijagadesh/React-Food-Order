import React from "react";
import { Logo_URL } from "../utils/contants";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo_URL} alt="logo" width={100} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
