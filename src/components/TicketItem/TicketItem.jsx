import React from "react";
import "./TicketItem.scss";

function TicketItem() {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <span className="ticket__span">10 000 Р</span>
        <img src="/images/S7 Logo.svg" alt="" />
      </div>
      <div className="ticket__content">
        <div className="ticket__wrapper">
          <div className="head">MOW - HKT</div>
          <div className="content">01:12 - 21:46</div>
        </div>
        <div className="ticket__wrapper">
          <div className="head">В ПУТИ</div>
          <div className="content">20:34</div>
        </div>
        <div className="ticket__wrapper">
          <div className="head">2 ПЕРЕСАДКИ</div>
          <div className="content">DOH, DXB</div>
        </div>
      </div>
      <div className="ticket__content">
        <div className="ticket__wrapper">
          <div className="head">MOW - HKT</div>
          <div className="content">01:12 - 21:46</div>
        </div>
        <div className="ticket__wrapper">
          <div className="head">В ПУТИ</div>
          <div className="content">20:34</div>
        </div>
        <div className="ticket__wrapper">
          <div className="head">2 ПЕРЕСАДКИ</div>
          <div className="content">DOH, DXB</div>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
