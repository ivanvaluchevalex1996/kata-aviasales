/* eslint-disable react/no-array-index-key */
import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import classes from "./TicketList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showMore } from "../../store/ticketsSlice";
import generateKey from "../../utils/uniqueKey";

function TicketList() {
  // const tickets = useSelector((state) => state.tickets.tickets.tickets);
  const tickets = useSelector((state) => state.tickets.tickets);
  const itemsPerPage = useSelector((state) => state.tickets.addTickets);
  const dispatch = useDispatch();
  const handleShowMore = () => {
    dispatch(showMore());
  };
  // console.log(tickets);
  const visibleTickets = tickets?.slice(0, itemsPerPage);

  // чтобы пропустить undefined использую опциональную ц-ку

  const elem = visibleTickets?.map((item) => (
    <TicketItem
      key={generateKey()}
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
        <button type="button" className={classes["show-more__btn"]} onClick={handleShowMore}>
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default TicketList;
