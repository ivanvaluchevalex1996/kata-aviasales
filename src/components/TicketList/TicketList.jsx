import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import classes from "./TicketList.module.scss";
import { useSelector } from "react-redux";

function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets);
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
