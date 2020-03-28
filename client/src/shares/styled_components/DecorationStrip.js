import styled, { css } from "styled-components";

export default styled.span`
  display: block;
  height: 4px;
  width: 60px;
  
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
