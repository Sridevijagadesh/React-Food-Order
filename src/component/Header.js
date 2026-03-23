import React, { useState } from "react";
import { Link } from "react-router";

import { Logo_URL } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus";
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

  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo_URL} alt="logo" width={100} />
        </div>
        <div className="nav-items">
          <ul>
            <li>onlineStatus :{onlineStatus === true ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
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
