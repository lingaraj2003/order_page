import React from "react";
import "./Header.css";
import adaptnxt from "./adaptnxt.png";

const Header = () => {
  return (
    <div className="header">
      <img id="logo" src={adaptnxt} alt="Logo" />
      <div className="header1">
        <img src="jj.png" />
      </div>
    </div>
  );
};

export default Header;
