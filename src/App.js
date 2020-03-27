import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import CardsAndButtons from "./Pages/CardsAndButtons/CardsAndButtonsSections";
import styles from "./App.module.scss";
import PurchasePage from "./Pages/PurchasePage/PurchasePage";
import Article from "./components/Article/Article";

function App({ store }) {
  const { whiskies, articles } = store;
  return (
    <div>
      <header className={styles.header}>
        <Link to="/">
          <span>WHISKEY SELECTION</span>
        </Link>
      </header>
      <Switch>
        <Route
          path="/:uri"
          render={props => (
            <PurchasePage articles={articles} whiskies={whiskies} {...props} />
          )}
        />
        <Route
          path="/"
          render={() => (
            <>
              <CardsAndButtons whiskies={whiskies} />
              <Article article={articles[0]} />
            </>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
