import React from "react";
import whiskies from "./data/whiskies";
import CardsAndButtons from "./components/CardsAndButtons/CardsAndButtonsSections";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <header className={styles.header}>WHISKEY SELECTION</header>
      <CardsAndButtons whiskies={whiskies} />
    </div>
  );
}

export default App;
