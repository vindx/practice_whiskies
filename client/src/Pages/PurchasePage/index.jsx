import React, { useEffect, useState } from "react";
import * as axios from "axios";
import PurchasePage from "./PurchasePage";

export default props => {
  const [loading, setLoading] = useState(true);
  const [whiskey, setWhiskey] = useState();
  const [error, setError] = useState();
  const uri = props.match.params.uri;

  useEffect(() => {
    const fetchWhiskey = async () => {
      try {
        const response = await axios.post("/api/getWhiskey", { title: uri });
        setWhiskey(response.data);
      } catch (e) {
        setError(e.response.data.msg || "Server's troubles :(");
      }
      setLoading(false);
    };
    fetchWhiskey();
  }, [uri]);

  if (loading) return <div style={{ textAlign: "center" }}>LOADING...</div>;
  if (!whiskey) return <div style={{ textAlign: "center" }}>{error}</div>;
  return <PurchasePage whiskey={whiskey} />;
};
