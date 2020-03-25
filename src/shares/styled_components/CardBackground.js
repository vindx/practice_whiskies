import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 50px 35px;
  border-radius: 10px;
  background: linear-gradient(
      45deg,
      transparent,
      rgba(51, 51, 51, 0.9),
      transparent
    ),
    url("assets/card-bg.svg") no-repeat center;
  background-color: #040707;
  background-size: cover;

  min-width: fit-content;
  height: 544px;

  @media screen and (max-width: 500px) {
    height: 400px;
  }

  @media screen and (max-height: 500px) {
    height: 300px;
  }
`;
