import React, { useEffect } from "react";
import Card from "../../Card/Card";
import cardStyles from "../../Card/Card.module.scss";
import styles from "./CardsSection.module.scss";

export default ({ whiskies, ...props }) => {
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
  }, [whiskies]);

  return (
    <section className={styles.cardsContainer} {...props}>
      {whiskies.map(whiskey => (
        <Card key={whiskey.title} liquid={whiskey} />
      ))}
    </section>
  );
};
