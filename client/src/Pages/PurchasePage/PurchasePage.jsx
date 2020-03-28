import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../shares/styled_components/Button";
import { getColorsByRegion } from "../../shares/helpers/colorsByRegions";
import styles from "./PurchasePage.module.scss";

export default ({ whiskey }) => (
  <div className={styles.mainContainer}>
    <Card liquid={whiskey} />
    <div className={styles.buttonContainer}>
      <Button
        className={styles.purchaseButton}
        gradientColors={getColorsByRegion(whiskey.region)}
      >
        purchase
      </Button>
    </div>
  </div>
);
