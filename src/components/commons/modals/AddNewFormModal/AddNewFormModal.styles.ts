import styled from "styled-components";
import {device} from "../../../../const/MediaQueries";

interface Props {
    currentColor: string;
}

export const FormContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.9)'};
  z-index: 2;

  .closeButton {
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 3rem;
    background-color: transparent;
    transition: 0.3s;
    cursor: pointer;

    ${device.tablet} {
      top: 10%;
      right: 20%;
    }

    &:hover {
      color: orange;
      transform: rotate(-180deg);
    }
  }

  .formIcon {
    margin-bottom: 50px;
    font-size: 5.5rem;
    color: orange;
    background: transparent;
  }

  & > h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2px;
    margin: 5px;
  }
`

export const Form = styled.form<Props>`
  display: flex;
  flex-direction: column;
  width: 90%;

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 40%;
  }

  & label {
    text-align: center;

    & input, select, textarea {
      width: 80%;
      border: 1px solid ${props => props.currentColor === "light" ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'};
      border-radius: 4px;
      padding: 5px;
      background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)'};
      margin-bottom: 5px;
      cursor: pointer;

      &:focus {
        border-color: rgba(255, 255, 255, 0.5);
      }
    }

    & select option {
      color: white;
      background: black;
    }

  }


`