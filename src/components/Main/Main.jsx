import TabsSort from "../TabsSort/TabsSort";
import TicketList from "../TicketList/TicketList";
import classes from "./Main.module.scss";
import Spinner from "../Spinner/Spinner";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function Main() {
  const { status } = useSelector((state) => state.tickets);
  const loading = status === "loading" && <Spinner />;
  return (
    <main className={classes.main}>
      <TabsSort />
      {loading}
      <TicketList />
    </main>
  );
}

export default Main;
