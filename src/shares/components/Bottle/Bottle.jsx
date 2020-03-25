import React from "react";
import styles from "./Bottle.module.scss";

const Bottle = ({ image, ...props }) => {
  return (
    <div {...props}>
      <img
        className={styles.bottle}
        src={`/assets/${image}`}
        alt="bottle_with_liquid"
      />
    </div>
  );
};

export default Bottle;
