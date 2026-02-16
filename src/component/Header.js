import React, { useState } from "react";

import { Logo_URL } from "../utils/contants";
const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const handleEvent = () => {
    if (btnName === "login") {
      setBtnName("logout");
    } else {
      setBtnName("login");
    }
  };
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

            <button
              onClick={() =>
                btnName === "login" ? setBtnName("logout") : setBtnName("login")
              }
              style={{ background: btnName === "login" ? "  green" : "yellow" }}
              className="Login-btn"
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
