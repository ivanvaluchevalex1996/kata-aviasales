import React from "react";
import classes from "./TicketItem.module.scss";

function TicketItem() {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__span}>10 000 Р</span>
        <img src="/images/S7 Logo.svg" alt="" />
      </div>
      <div className={classes.ticket__content}>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>MOW - HKT</div>
          <div className={classes.content}>01:12 - 21:46</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>В ПУТИ</div>
          <div className={classes.content}>20:34</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>2 ПЕРЕСАДКИ</div>
          <div className={classes.content}>DOH, DXB</div>
        </div>
      </div>
      <div className={classes.ticket__content}>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>MOW - HKT</div>
          <div className={classes.content}>01:12 - 21:46</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>В ПУТИ</div>
          <div className={classes.content}>20:34</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>2 ПЕРЕСАДКИ</div>
          <div className={classes.content}>DOH, DXB</div>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
