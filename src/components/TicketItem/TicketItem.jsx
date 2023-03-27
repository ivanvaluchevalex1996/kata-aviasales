/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-brace-presence */
import classes from "./TicketItem.module.scss";
import { getTimeFromMins, convertDate } from "../../utils/getTimeFromMins";
import wordOfNum from "../../utils/wordOfNumber";
import PropTypes from "prop-types";

function TicketItem(props) {
  const {
    price,
    img,
    durationTuda,
    durationObratno,
    dateTuda,
    dateObratno,
    stopsTuda,
    stopsObratno,
  } = props;

  const baseUrl = "https://pics.avs.io/99/36/";

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes.ticket__span}>{price} Р</span>
        <img src={img ? `${baseUrl}${img}.png` : null} alt="logo" />
      </div>
      <div className={classes.ticket__content}>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>MOW - HKT</div>
          <div className={classes.content}>{convertDate(dateTuda, durationTuda)}</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>В ПУТИ</div>
          <div className={classes.content}>{getTimeFromMins(durationTuda)}</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>{wordOfNum(stopsTuda)}</div>
          <div className={classes.content}>{stopsTuda.join(", ")}</div>
        </div>
      </div>
      <div className={classes.ticket__content}>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>HKT - MOW</div>
          <div className={classes.content}>{convertDate(dateObratno, durationObratno)}</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>В ПУТИ</div>
          <div className={classes.content}>{getTimeFromMins(durationObratno)}</div>
        </div>
        <div className={classes.ticket__wrapper}>
          <div className={classes.head}>{wordOfNum(stopsObratno)}</div>
          <div className={classes.content}>{stopsObratno.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;

TicketItem.propTypes = {
  price: PropTypes.number.isRequired,
  img: PropTypes.string,
  durationTuda: PropTypes.number.isRequired,
  durationObratno: PropTypes.number.isRequired,
  dateTuda: PropTypes.string.isRequired,
  dateObratno: PropTypes.string.isRequired,
  stopsTuda: PropTypes.arrayOf(PropTypes.string).isRequired,
  stopsObratno: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TicketItem.defaultProps = {
  img: null,
};
