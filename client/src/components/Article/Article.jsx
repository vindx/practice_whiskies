import React from "react";
import ArticleBackground from "../../shares/styled_components/ArticleBackground";
import Title from "../../shares/styled_components/Title";
import styles from "./Article.module.scss";

export default ({ article }) => {
  const { title, teaser, img, url } = article;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ArticleBackground img={img}>
        <div className={styles.article}>
          <Title className={`big white ${styles.bigTitle}`}>{title}</Title>
          <Title className={`small white ${styles.smallTitle}`}>{teaser}</Title>
        </div>
      </ArticleBackground>
    </a>
  );
};
