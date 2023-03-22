// import React, { useState } from "react";
// import classes from "./TabsSort.module.scss";
// import { useDispatch, useSelector } from "react-redux";
// import { sortTicketByPrice } from "../../store/ticketsSlice";

// function TabsSort() {
//   const [activeButton, setActiveButton] = useState("");
//   const dispatch = useDispatch();
//   // const arrTickets = useSelector((state) => state.tickets.tickets.tickets);
//   const buttons = useSelector((state) => state.tickets.buttons);

//   const btn = buttons.map(({ name, label }) => (
//     <button
//       className={classes.buttons__item}
//       type="button"
//       key={name}
//       onClick={() => {
//         dispatch(sortTicketByPrice());
//       }}
//     >
//       {label}
//     </button>
//   ));

//   return <div className={classes.buttons}>{btn}</div>;
// }

// export default TabsSort;
import React, { useState } from "react";
import classes from "./TabsSort.module.scss";
import { sortTicketByPrice } from "../../store/ticketsSlice";
import { useDispatch } from "react-redux";

function TabsSort() {
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("");

  const btn = [
    { label: "Самый дешевый", name: "cheap" },
    { label: "Самый быстрый", name: "fast" },
  ];

  const onSortChange = (name) => {
    setActiveButton(name);
  };

  const buttons = btn.map(({ name, label }) => {
    const isActive = activeButton === name;
    const clazz = isActive ? classes.buttons__itemActive : classes.buttons__item;

    return (
      <button
        className={`${clazz}`}
        type="button"
        key={name}
        onClick={() => {
          onSortChange(name);
          dispatch(sortTicketByPrice());
        }}
      >
        {label}
      </button>
    );
  });

  return <div className={classes.buttons}>{buttons}</div>;
}

export default TabsSort;
