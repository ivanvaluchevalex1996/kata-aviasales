import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.header}>
      <span className={classes.header__container}>
        <img src="/images/Logo.svg" alt="logo" />
      </span>
    </div>
  );
}

export default Header;
