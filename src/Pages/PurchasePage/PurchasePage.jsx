import React from "react";
import Card from "../../components/Card/Card";
import Title from "../../shares/styled_components/Title";
import Button from "../../shares/styled_components/Button";
import getColorByRegion from "../../shares/helpers/colorsByRegions/getColorsByRegion";
import styles from "./PurchasePage.module.scss";

export default ({ whiskies, articles, ...props }) => {
  const liquid = whiskies.find(
    whiskey => whiskey.uri === `/${props.match.params.uri}`
  );
  if (!liquid)
    return (
      <div className={styles.mainContainer}>
        Whiskey <Title>"{props.match.params.uri}"</Title> didn't found :(
      </div>
    );
  return (
    <div className={styles.mainContainer}>
      <Card liquid={liquid} />
      <div className={styles.buttonContainer}>
        <Button
          className={styles.purchaseButton}
          gradientColors={getColorByRegion(liquid.region)}
        >
          purchase
        </Button>
      </div>
    </div>
  );
};
