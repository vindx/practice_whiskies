import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 35px;
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

  width: auto;
  min-width: 420px;
  max-width: 640px;
  height: 544px;
`;
