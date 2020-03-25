import styled, { css } from "styled-components";

export default styled.div`
  width: fit-content;
  height: 60px;
  padding: 0 18px;
  margin: 0 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transform: skew(-10deg);

  ${({ gradientColors }) =>
    gradientColors &&
    css`
      background: linear-gradient(
        90deg,
        ${gradientColors[0]},
        ${gradientColors[1]}
      );
    `}
`;
