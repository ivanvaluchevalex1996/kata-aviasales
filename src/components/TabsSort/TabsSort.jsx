/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import classes from "./TabsSort.module.scss";
import { sortTicketByPrice, sortTicketByCheap } from "../../store/ticketsSlice";
import { useDispatch } from "react-redux";

function TabsSort() {
  const [cheapTabActive, setCheapTabActive] = useState(false);
  const [fastTabActive, setFastTabActive] = useState(false);
  const dispatch = useDispatch();

  let classCheap = classes.buttons__item;
  if (cheapTabActive) {
    classCheap = classes["buttons__item--active"];
  } else classCheap = classes.buttons__item;

  let classFast = classes.buttons__item;
  if (fastTabActive) {
    classFast = classes["buttons__item--active"];
  } else classFast = classes.buttons__item;

  return (
    <div className={classes.buttons}>
      <button
        type="button"
        className={classCheap}
        onClick={() => {
          setFastTabActive(false);
          setCheapTabActive(true);
          dispatch(sortTicketByPrice());
        }}
      >
        Самый дешевый
      </button>
      <button
        type="button"
        className={classFast}
        onClick={() => {
          setCheapTabActive(false);
          setFastTabActive(true);
          dispatch(sortTicketByCheap());
        }}
      >
        Самый быстрый
      </button>
    </div>
  );
}

export default TabsSort;
