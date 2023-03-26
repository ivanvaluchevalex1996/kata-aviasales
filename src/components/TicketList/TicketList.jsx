/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import TicketItem from "../TicketItem/TicketItem";
import classes from "./TicketList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { showMore } from "../../store/ticketsSlice";
import generateKey from "../../utils/uniqueKey";
import PropTypes from "prop-types";

function TicketList() {
  const [filteredTickets, setFilteredTickets] = useState([]);
  const tickets = useSelector((state) => state.tickets.tickets);
  const itemsPerPage = useSelector((state) => state.tickets.addTickets);
  const checkbox = useSelector((state) => state.tickets.panel);
  const dispatch = useDispatch();
  const handleShowMore = () => {
    dispatch(showMore());
  };

  const visibleTickets = filteredTickets?.slice(0, itemsPerPage);

  useEffect(() => {
    const activeFilters = checkbox.filter((el) => el.isChecked);
    const variable = tickets.filter((el) => {
      const data = el.segments[0].stops.length;
      return activeFilters.some((elem) => elem.stopsCount === data);
    });
    setFilteredTickets(variable);
  }, [checkbox, tickets]);

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
  console.log(checkbox);
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
