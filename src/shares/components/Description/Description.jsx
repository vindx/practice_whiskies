import React from "react";
import Title from "../../styled_components/Title";
import styles from "./Description.module.scss";

const Description = ({ title, region, cost, ...props }) => {
  return (
    <div {...props}>
      <Title className="big">{title}</Title>
      <Title className={`small ${styles.smallTitle}`}>{region} Region</Title>
      <Title className={`big ${styles.bigTitle}`}>${cost}</Title>
    </div>
  );
};

export default Description;
