import React from "react";
import TabsSort from "../TabsSort/TabsSort";
import TicketList from "../TicketList/TicketList";
import classes from "./Main.module.scss";

function Main() {
  return (
    <main className={classes.main}>
      <TabsSort />
      <TicketList />
    </main>
  );
}

export default Main;
