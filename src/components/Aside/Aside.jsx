import React from "react";
import "./Aside.scss";

function Aside() {
  return (
    <aside className="panel">
      <div className="panel__wrapper">
        <h3 className="panel__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <label className="panel__label" htmlFor="All">
          <span>
            <input type="checkbox" id="All" />
            Все
          </span>
        </label>
        <label className="panel__label" htmlFor="Without transfers">
          <span>
            <input type="checkbox" id="Without transfers" />
            Без пересадок
          </span>
        </label>
        <label className="panel__label" htmlFor="one transfer">
          <span>
            <input type="checkbox" id="one transfer" />1 пересадка
          </span>
        </label>
        <label className="panel__label" htmlFor="two transfers">
          <span>
            <input type="checkbox" id="two transfers" />2 пересадки
          </span>
        </label>
        <label className="panel__label" htmlFor="three transfers">
          <span>
            <input type="checkbox" id="three transfers" />3 пересадки
          </span>
        </label>
      </div>
    </aside>
  );
}

export default Aside;
