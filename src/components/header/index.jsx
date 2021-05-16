import React from "react";
import "./styles.scss";

const Header = (props) => {
  return (
    <header data-test="headerComponent" className="headerComponent">
      <div className="wrap">
        <div data-test="logo" className="logo">
          LOGO
        </div>
      </div>
    </header>
  );
};

export default Header;
