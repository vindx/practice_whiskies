import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card/Card";
import cardStyles from "../../../components/Card/Card.module.scss";
import styles from "./CardsSection.module.scss";

export default ({ whiskies, ...props }) => {
  useEffect(() => {
    const documentWidth = document.body.offsetWidth;
    const cards = document.getElementsByClassName(cardStyles.cardBg);
    const bottles = document.getElementsByClassName(cardStyles.bottle);
    if (documentWidth > 600) {
      Array.from(cards).forEach(card => {
        if (card.offsetWidth < 600) {
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
        <Link key={whiskey.title} to={whiskey.uri}>
          <Card liquid={whiskey} className={styles.card} />
        </Link>
      ))}
    </section>
  );
};
