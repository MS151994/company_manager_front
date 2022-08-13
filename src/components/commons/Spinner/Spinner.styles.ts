import styled from "styled-components";

export const SpinnerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Loader = styled.div`
  border: 3px solid transparent;
  border-top: 3px solid orange;
  border-bottom: 3px solid orange;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`