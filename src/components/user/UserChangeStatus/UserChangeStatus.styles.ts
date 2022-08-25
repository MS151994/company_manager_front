import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

export const ChangeStatusContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChangeStatusForm = styled.form`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 98%;
  height: 98%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);
  
  ${device.tablet}{
    width: 70%;
    height: 75%;
  }

  ${device.desktop}{
    width: 50%;
    height: 75%;
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

  & h1 {
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 100;
    letter-spacing: 2px;
  }

  & label {
    width: 60%;
    padding: 5px;

    & select {
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      width: 100%;
      margin-top: 5px;
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
`