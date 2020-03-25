import React, { useEffect } from "react";
import Card from "./components/Card/Card";
import whiskies from "./data/whiskies";
import cardStyles from "./components/Card/Card.module.scss";

function App() {
  useEffect(() => {
    const documentWidth = document.body.offsetWidth;
    const cards = document.getElementsByClassName(cardStyles.cardBg);
    const bottles = document.getElementsByClassName(cardStyles.bottle);
    if (documentWidth > 600) {
      Array.from(cards).forEach(card => {
        if (card.offsetWidth < 530) {
          Array.from(bottles).forEach(bottle =>
            bottle.classList.add(cardStyles.smallBottle)
          );
        }
      });
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <Card key={whiskies[0].title} liquid={whiskies[0]} />
      <Card key={whiskies[1].title} liquid={whiskies[1]} />
      <Card key={whiskies[2].title} liquid={whiskies[2]} />
    </div>
  );
}

export default App;
