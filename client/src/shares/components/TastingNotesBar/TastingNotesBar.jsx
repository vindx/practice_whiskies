import React from "react";
import TastingNotesContainer from "../../styled_components/TastingNotesContainer";
import Title from "../../styled_components/Title";
import styles from "./TastingNotesBar.module.scss";

const TastingNotesBar = ({ tasting_notes, gradientColors, ...props }) => {
  return (
    <TastingNotesContainer gradientColors={gradientColors} {...props}>
      {tasting_notes.map(note => (
        <Title className={styles.tastingNote} key={note}>
          {note}
        </Title>
      ))}
    </TastingNotesContainer>
  );
};

export default TastingNotesBar;
