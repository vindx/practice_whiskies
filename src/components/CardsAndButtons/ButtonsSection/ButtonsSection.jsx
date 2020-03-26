import React from "react";
import Button from "../../../shares/styled_components/Button";
import styles from "./ButtonsSection.module.scss";

export default ({ regions, handleClick, activeButton, ...props }) => {
  return (
    <section className={styles.regionButtonsContainer} {...props}>
      <Button
        onClick={handleClick}
        className={activeButton === "all" && "active"}
      >
        all
      </Button>
      {regions.map(region => (
        <Button
          key={region}
          onClick={handleClick}
          className={region === activeButton && "active"}
        >
          {region}
        </Button>
      ))}
    </section>
  );
};
