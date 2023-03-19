import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../Aside/Aside";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import TicketList from "../TicketList/TicketList";
import classes from "./App.module.scss";
import aviaService from "../../service/service";
import { fetchTickets } from "../../store/ticketsSlice";

function App() {
  const dispatch = useDispatch();
  // получаем searchId
  useEffect(() => {
    const load = async () => {
      const data = await aviaService.getSearchId();
      localStorage.setItem("searchId", data.searchId);
    };

    load();
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <span className={classes.header__container}>
          <img src="/images/Logo.svg" alt="logo" />
        </span>
      </div>
      <div className={classes.wrapper}>
        <Aside />
        <main className={classes.main}>
          <ButtonFilter />
          <TicketList />
        </main>
      </div>
    </div>
  );
}

export default App;
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Aside from "../Aside/Aside";
// import ButtonFilter from "../ButtonFilter/ButtonFilter";
// import TicketList from "../TicketList/TicketList";
// import classes from "./App.module.scss";

// function App() {
//   const dispatch = useDispatch();
//   // useSelector = помогает полуыить текущее состояние, внутрь передается колбек, который принимает текущий стейт
//   // useSelector((state) => state."пишем состоярние редюсера, затем переменную, которую хотим получить");
//   const value = useSelector((state) => state.cashReducer.cash);
//   const customer = useSelector((state) => state.customerReducer.customers);

//   const addCash = (p) => {
//     dispatch({ type: "ADD_CASH", payload: p });
//   };

// const addUser = (name) => {
//   const customerData = {
//     name,
//     id: Date.now(),
//   };
//   dispatch({ type: "ADD_USER", payload: customerData });
// };
//   const deleteUser = (custom) => {
//     dispatch({ type: "DELETE_USER", payload: custom.id });
//     // console.log(custom);
//   };

//   return (
// <div className={classes.content}>
//   {value}
//   <button type="button" onClick={() => addCash(13)}>
//     Пополнить cash
//   </button>
// {customer.length > 0 ? (
//   <div>
//     {customer.map((el) => (
//       // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
//       <div key={el.id} onClick={() => deleteUser(el)}>
//         {el.name}
//       </div>
//     ))}
//   </div>
// ) : (
//   <div>Пустой</div>
// )}
// <button type="button" onClick={() => addUser(prompt())}>
//   Добавить пользователя
// </button>
//   <div className={classes.header}>
//     <span className={classes.header__container}>
//       <img src="/images/Logo.svg" alt="logo" />
//     </span>
//   </div>
//   <div className={classes.wrapper}>
//     <Aside />
//     <main className={classes.main}>
//       <ButtonFilter />
//       <TicketList />
//     </main>
//   </div>
// </div>
//   );
// }

// export default App;
