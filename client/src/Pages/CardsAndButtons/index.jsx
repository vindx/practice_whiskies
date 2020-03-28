import React, { useEffect, useState } from "react";
import * as axios from "axios";
import CardsAndButtonsSections from "./CardsAndButtonsSections";

export default () => {
  const [loading, setLoading] = useState(true);
  const [whiskies, setWhiskies] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchWhiskies = async () => {
      try {
        const response = await axios.get("/api/getWhiskies");
        setWhiskies(response.data);
      } catch (e) {
        setError(e.response.data.msg || "Server's troubles :(");
      }
      setLoading(false);
    };
    fetchWhiskies();
  }, []);

  if (loading)
    return <div style={{ textAlign: "center" }}>LOADING WHISKIES...</div>;
  if (!whiskies) return <div style={{ textAlign: "center" }}>{error}</div>;
  return <CardsAndButtonsSections whiskies={whiskies} />;
};
