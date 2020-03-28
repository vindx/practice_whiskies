import styled from "styled-components";

export default styled.span`
  display: block;
  &:first-letter {
    text-transform: uppercase;
  }

  &.white {
    color: #ffffff;
  }
  &.big {
    font-size: 36px;
    line-height: 36px;
    font-weight: 500;

    @media (max-width: 500px) {
      font-size: 34px;
      line-height: 34px;
    }
  }
  &.small {
    font-size: 18px;
    line-height: 18px;
    opacity: 0.6;
  }
`;
