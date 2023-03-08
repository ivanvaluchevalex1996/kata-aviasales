import React from "react";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.scss";

function TicketList() {
  return (
    <div className="all-tickets">
      <TicketItem />
      <div className="show-more">
        <button type="button" className="show-more__btn">
          Показать еще 5 билетов!
        </button>
      </div>
    </div>
  );
}

export default TicketList;
