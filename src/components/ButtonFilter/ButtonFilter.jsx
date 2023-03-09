import React from "react";
import classes from "./ButtonFilter.module.scss";

function ButtonFilter() {
  return (
    <div className={classes.buttons}>
      <buttons type="button" className={classes.buttons__item}>
        Самый дешевый
      </buttons>
      <buttons type="button" className={classes.buttons__item}>
        Самый быстрый
      </buttons>
      <buttons type="button" className={classes.buttons__item}>
        Самый оптимальный
      </buttons>
    </div>
  );
}

export default ButtonFilter;
