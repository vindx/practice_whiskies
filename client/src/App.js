import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import * as axios from "axios";
import { setColorsByRegions } from "./shares/helpers/colorsByRegions";
import PurchasePage from "./Pages/PurchasePage";
import CardsAndButtons from "./Pages/CardsAndButtons";
import Articles from "./Pages/Articles";
import styles from "./App.module.scss";

function App() {
  const [initialized, setInitialization] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchInitializationData = async () => {
      try {
        const response = await axios.get("/api/getColors");
        setColorsByRegions(response.data);
      } catch (e) {
        setError(e.response.data.msg || "Server's troubles :(");
      }
      setInitialization(true);
    };
    fetchInitializationData();
  }, []);

  if (!initialized)
    return <div style={{ textAlign: "center" }}>LOADING...</div>;
  if (error) return <div style={{ textAlign: "center" }}>{error}</div>;
  return (
    <div>
      <header className={styles.header}>
        <Link to="/">
          <span>WHISKEY SELECTION</span>
        </Link>
      </header>
      <Switch>
        <Route path="/:uri" render={props => <PurchasePage {...props} />} />
        <Route
          path="/"
          render={() => (
            <>
              <CardsAndButtons />
              <Articles />
            </>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
