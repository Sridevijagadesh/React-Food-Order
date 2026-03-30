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
      <div className="flex justify-between bg-green-200 items-center h-28">
        <div className="logo">
          <img className="w-56" src={Logo_URL} alt="logo" />
        </div>
        <div className="nav-items">
          <ul className="flex">
            <li className="m-4">
              onlineStatus :{onlineStatus === true ? "🟢" : "🔴"}
            </li>
            <li className="m-4">
              <Link to="/">Home</Link>
            </li>
            <li className="m-4">
              <Link to="/about"> About Us</Link>
            </li>
            <li className="m-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="m-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="m-4">Cart</li>

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
