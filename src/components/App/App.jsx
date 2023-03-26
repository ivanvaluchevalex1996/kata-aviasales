import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../Aside/Aside";
import classes from "./App.module.scss";
import aviaService from "../../service/service";
import { fetchTickets } from "../../store/ticketsSlice";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Alert } from "antd";

function App() {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.tickets);
  const checkbox = useSelector((state) => state.tickets.panel);

  // получаем searchId
  useEffect(() => {
    const load = async () => {
      const data = await aviaService.getSearchId();
      localStorage.setItem("searchId", data.searchId);
      dispatch(fetchTickets());
    };
    load();
  }, []);

  const content = (
    <div className={classes.content}>
      <Header />
      <div className={classes.wrapper}>
        <Aside />
        {checkbox.every((el) => !el.isChecked) === false ? <Main /> : <h1>Мы ничего не нашли</h1>}
      </div>
    </div>
  );
  const mistake = (
    <Alert
      message="Поиск не дал результатов. Попробуйте перезагрузить страницу."
      type="error"
      showIcon
    />
  );

  return <div>{error ? mistake : content}</div>;
}

export default App;
