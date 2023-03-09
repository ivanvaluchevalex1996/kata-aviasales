import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import classes from "./TicketList.module.scss";

function TicketList() {
  return (
    <div className={classes["all-tickets"]}>
      <TicketItem />
      <div className={classes["show-more"]}>
        <button type="button" className={classes["show-more__btn"]}>
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default TicketList;
