import Aside from "../Aside/Aside";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import TicketList from "../TicketList/TicketList";
import classes from "./App.module.scss";

function App() {
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

// Как второй класс добавить ? если уже рассказывать так рассказать доконца может

// Можно использовать библиотеку classnames. В своих проектах я так и делаю.

// Например вот так: className={classnames(styles.firstStyle, styles.secondStyle)}
