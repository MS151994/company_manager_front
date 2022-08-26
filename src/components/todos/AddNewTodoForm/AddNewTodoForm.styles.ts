import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10px auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & label {
    font-size: 0.8rem;
    width: 100%;
    padding: 5px;

    & input {
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      padding: 10px;
      outline-color: orange;
      margin-top: 5px;
      width: 100%;
      cursor: pointer;
    }

    & .checkBox {
      padding: 3px;
      width: 20px;
      margin-left: 5px;
    }
`