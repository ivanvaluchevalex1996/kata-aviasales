import React from "react";
import classes from "./ButtonFilter.module.scss";

function ButtonFilter() {
  return (
    <div className={classes.buttons}>
      <button type="button" className={classes.buttons__item}>
        Самый дешевый
      </button>
      <button type="button" className={classes.buttons__item}>
        Самый быстрый
      </button>
      <button type="button" className={classes.buttons__item}>
        Самый оптимальный
      </button>
    </div>
  );
}

export default ButtonFilter;
