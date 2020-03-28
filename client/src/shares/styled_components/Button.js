import styled, { css } from "styled-components";

export default styled.button`
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  padding: 10px 20px;
  border: 1px black solid;
  border-radius: 25px;
  margin: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  outline: none;
  font-size: 18px;
  opacity: 0.6;
  ${({ gradientColors }) =>
    gradientColors &&
    css`
      background: linear-gradient(
        90deg,
        ${gradientColors[0]},
        ${gradientColors[1]}
      );
    `}

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.4;
  }

  &.active {
    opacity: 1;
    background-color: #f2f3f3;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    margin: 2px;
  }
`;
