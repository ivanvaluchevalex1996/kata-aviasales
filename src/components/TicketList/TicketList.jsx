/* eslint-disable react/no-array-index-key */
import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import classes from "./TicketList.module.scss";
import { useSelector } from "react-redux";

function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets.tickets);
  // console.log(tickets);
  // чтобы пропустить undefined использую опциональную ц-ку
  const elem = tickets?.map((item, i) => (
    <TicketItem
      key={`${item.destination}_${i}`}
      price={item.price}
      img={item.carrier}
      durationTuda={item.segments[0].duration}
      durationObratno={item.segments[1]?.duration}
      dateTuda={item.segments[0].date}
      dateObratno={item.segments[1].date}
      stopsTuda={item.segments[0].stops}
      stopsObratno={item.segments[1].stops}
    />
  ));
  return (
    <div className={classes["all-tickets"]}>
      {elem}
      <div className={classes["show-more"]}>
        <button type="button" className={classes["show-more__btn"]}>
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default TicketList;
