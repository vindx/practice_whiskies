import React from "react";
import classNames from "classnames";
import getColorByRegion from "../../shares/helpers/colorsByRegions/getColorsByRegion";
import CardBackground from "../../shares/styled_components/CardBackground";
import Description from "../../shares/components/Description/Description";
import TastingNotesBar from "../../shares/components/TastingNotesBar/TastingNotesBar";
import Bottle from "../../shares/components/Bottle/Bottle";
import DecorationStrip from "../../shares/styled_components/DecorationStrip";
import styles from "./Card.module.scss";

const Card = ({ liquid, className, ...props }) => {
  const { title, region, cost, tasting_notes, image } = liquid;
  const gradientColors = getColorByRegion(region);

  return (
    <CardBackground
      className={classNames([styles.cardBg, className])}
      gradientColors={gradientColors}
      {...props}
    >
      <div className={styles.descriptionBarAndTastingNotesBarContainer}>
        <Description
          className={styles.descriptionBar}
          title={title}
          region={region}
          cost={cost}
        />
        <TastingNotesBar
          tasting_notes={tasting_notes}
          gradientColors={gradientColors}
          className={styles.tastingNotesBar}
        />
      </div>
      <div className={styles.bottleContainer}>
        <Bottle image={image} className={styles.bottle} />
      </div>
      <DecorationStrip
        gradientColors={gradientColors}
        className={styles.decorationStrip}
      />
    </CardBackground>
  );
};

export default Card;
