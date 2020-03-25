import styled from "styled-components";

export default styled.span`
  display: block;
  color: #ffffff;
  &:first-letter {
    text-transform: uppercase;
  }

  &.big {
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;
  }
  &.small {
    font-size: 18px;
    line-height: 18px;
    opacity: 0.6;
  }
`;
