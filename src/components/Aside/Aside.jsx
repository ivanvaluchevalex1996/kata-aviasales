import React, { useState, useEffect } from "react";
import classes from "./Aside.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheck, checkAll } from "../../store/checkSlice";

function Aside() {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const arrCheck = useSelector((state) => state.checkbox.panel);

  const checkItem = (id) => {
    dispatch(toggleCheck(id));
  };
  const checkAllItems = () => {
    dispatch(checkAll(!active));
  };
  // когда все 4 чекбокса будут тру, active тоже станет тру, и чекбокс все станет активным
  useEffect(() => {
    setActive(arrCheck.every((el) => el.isChecked === true));
  }, [arrCheck]);

  return (
    <aside className={classes.panel}>
      <div className={classes.panel__wrapper}>
        <h3 className={classes.panel__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        <label key={4} className={classes.panel__label} htmlFor={4}>
          <span>
            <input onChange={() => checkAllItems()} type="checkbox" id={4} checked={active} />
            Все
          </span>
        </label>
        {arrCheck.map((el) => (
          <label key={el.id} className={classes.panel__label} htmlFor={el.id}>
            <span>
              <input
                type="checkbox"
                onChange={() => checkItem(el.id)}
                id={el.id}
                checked={el.isChecked}
              />
              {el.label}
            </span>
          </label>
        ))}
      </div>
    </aside>
  );
}

export default Aside;
