import React from "react";
import classes from "./Aside.module.scss";

function Aside() {
  return (
    <aside className={classes.panel}>
      <div className={classes.panel__wrapper}>
        <h3 className={classes.panel__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <label className={classes.panel__label} htmlFor="All">
          <span>
            <input type="checkbox" id="All" />
            Все
          </span>
        </label>
        <label className={classes.panel__label} htmlFor="Without transfers">
          <span>
            <input type="checkbox" id="Without transfers" />
            Без пересадок
          </span>
        </label>
        <label className={classes.panel__label} htmlFor="one transfer">
          <span>
            <input type="checkbox" id="one transfer" />1 пересадка
          </span>
        </label>
        <label className={classes.panel__label} htmlFor="two transfers">
          <span>
            <input type="checkbox" id="two transfers" />2 пересадки
          </span>
        </label>
        <label className={classes.panel__label} htmlFor="three transfers">
          <span>
            <input type="checkbox" id="three transfers" />3 пересадки
          </span>
        </label>
      </div>
    </aside>
  );
}

export default Aside;
