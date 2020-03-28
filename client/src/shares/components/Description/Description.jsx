import React from "react";
import Title from "../../styled_components/Title";
import styles from "./Description.module.scss";

const Description = ({ title, region, cost, ...props }) => {
  return (
    <div {...props}>
      <Title className="big white">{title}</Title>
      <Title className={`small white ${styles.smallTitle}`}>
        {region} Region
      </Title>
      <Title className={`big white ${styles.bigTitle}`}>${cost}</Title>
    </div>
  );
};

export default Description;
