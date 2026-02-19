import React, { useState } from "react";
import { Link } from "react-router";

import { Logo_URL } from "../utils/contants";
const Header = () => {
  const [btnName, setBtnName] = useState("login");

  //style login button
  const Login = {
    border: "none",
    padding: "7px 20px ",
    background: "green",
    color: "white",
  };
  const Logout = {
    border: "none",
    padding: "7px 20px ",
    background: "yellow",
    color: "#000",
  };

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>

            <button
              onClick={() =>
                btnName === "login" ? setBtnName("logout") : setBtnName("login")
              }
              style={btnName === "login" ? Login : Logout}
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
