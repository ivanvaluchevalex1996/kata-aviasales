import Aside from "../Aside/Aside";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import TicketList from "../TicketList/TicketList";
import "./App.scss";

function App() {
  return (
    <div className="content">
      <div className="header">
        <span className="header__container">
          <img src="/images/Logo.svg" alt="logo" />
        </span>
      </div>
      <div className="wrapper">
        <Aside />
        <main className="main">
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
