import React, { useState } from "react";
import "./homepage.css";
import logo from "../../assets/images/logoIcon/icon.svg";
import { Link } from "react-router-dom";

function Homepage() {
  const [input, setInput] = useState("");
  return (
    <div className="homepage d-flex flex-column align-items-center container">
      <div className="heading-container d-flex align-items-center">
        <img src={logo} className="logo-icon" alt="" />
        <h1 className="c4 heading">LamaNews</h1>
      </div>
      <div className="search-box-container d-flex align-items-center">
        <input className="input c4" type="text" onChange={(event) => {}} />
        <Link to="/">
          <img src="https://img.icons8.com/ios-glyphs/30/00ADB5/search--v1.png" />
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
