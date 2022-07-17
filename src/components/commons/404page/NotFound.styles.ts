import styled from "styled-components";

export const NotFoundPage = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 2rem;
  text-transform: uppercase;

  & h1 {
    font-size: 3rem;
    padding: 5px;
    color: orange;
  }

`