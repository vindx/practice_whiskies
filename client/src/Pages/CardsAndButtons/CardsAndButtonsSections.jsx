import React, { useState } from "react";
import ButtonsSection from "./ButtonsSection/ButtonsSection";
import CardsSection from "./CardsSection/CardsSection";

export default ({ whiskies }) => {
  const [whiskiesState, setWhiskiesState] = useState(whiskies);
  const [activeButton, setActiveButton] = useState("all");

  const regions = [...new Set(whiskies.map(({ region }) => region))].sort();

  const handleClick = e => {
    if (e.target.innerHTML === "all") {
      setWhiskiesState(whiskies);
    } else {
      setWhiskiesState(
        Array.from(whiskies).filter(
          ({ region }) => region === e.target.innerHTML
        )
      );
    }
    setActiveButton(e.target.innerHTML);
  };

  return (
    <>
      <ButtonsSection
        activeButton={activeButton}
        handleClick={handleClick}
        regions={regions}
      />
      <CardsSection whiskies={whiskiesState} />
    </>
  );
};
