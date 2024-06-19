import React from "react";
import headerLogo from "../images/header_logo.svg";

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="header__menu-title">
          <img src={headerLogo} alt="logo" />
          <h1>English Study Cards</h1>
        </div>
      </header>
    </React.Fragment>
  );
}
export default Header;
