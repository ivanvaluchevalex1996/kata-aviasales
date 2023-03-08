import React from "react";
import "./ButtonFilter.scss";

function ButtonFilter() {
  return (
    <div className="buttons">
      <buttons type="button" className="buttons__item">
        Самый дешевый
      </buttons>
      <buttons type="button" className="buttons__item">
        Самый быстрый
      </buttons>
      <buttons type="button" className="buttons__item">
        Самый оптимальный
      </buttons>
    </div>
  );
}

export default ButtonFilter;
