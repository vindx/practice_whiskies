import styled from "styled-components";

export default styled.div`
  margin: 5%;
  background: url(${({ img }) => `assets/${img}`}) no-repeat center;
  background-size: cover;
  position: relative;
  border-radius: 5px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #333333;
    opacity: 0.7;
    border-radius: inherit;
    transition: opacity 0.5s ease;
  }
  &:hover {
    &:before {
      opacity: 0.5;
    }
  }
  &:active {
    bottom: -2px;
    right: -2px;
    &:before {
      opacity: 0.3;
    }
  }
`;
