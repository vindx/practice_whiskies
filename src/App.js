import React from "react";
import Card from "./components/Card/Card";

const liquid = {
  title: "Auchentoshan",
  image: "auchentoshan.png",
  cost: 25,
  region: "lowlands",
  tasting_notes: ["honey", "citrus", "nuttines"],
  uri: "/auchentoshan"
};

function App() {
  return (
    <>
      <Card liquid={liquid}/>
    </>
  );
}

export default App;
