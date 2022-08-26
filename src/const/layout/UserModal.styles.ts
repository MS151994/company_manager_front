import styled from "styled-components";
import {device} from "../MediaQueries";

interface Props {
    currentColor: string;
}

export const UserModalStyles = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const UserModalContainer = styled.div<Props>`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 95%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.7)'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);

  ${device.tablet} {
    width: 70%;
    height: 70%;
  }

  ${device.desktop} {
    width: 35%;
    height: 70%;
  }

  & div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & svg {
      font-size: 3.7rem;
      color: orange;
    }
  }

  & .modalIconTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & h1 {
      font-size: 3rem;
      text-transform: capitalize;
      font-weight: 100;
      letter-spacing: 2px;
    }

    & svg {
      font-size: 3.7rem;
      color: orange;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    & label {
      width: 100%;
      padding: 5px;

      & input, select {
        padding: 10px;
        background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.7)'};
        border: 1px solid ${props => props.currentColor === "light" ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'};
        border-radius: 4px;
        width: 100%;
        margin-top: 5px;
        cursor: pointer;
      }
    }
  }

  & .closeIcon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: rotate(-180deg);
      color: orange;
    }
  }

  & .spinnerBox {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'};
  }

`