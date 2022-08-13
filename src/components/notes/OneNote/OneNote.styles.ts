import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

interface Props {
    highPriority: string | boolean;
}

interface FormPropsBorder {
    borderColor: string
}

export const OneNoteBox = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  margin: 5px auto;
  padding: 5px;
  border: 1px solid transparent;
  border-left: 5px solid ${props => props.highPriority === "1" ? 'rgb(255,173,0)' : 'transparent'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  width: 90%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: orange;
  }

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }

  & div > div {
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    justify-content: space-between;
    align-items: center;
  }

  & div > p:nth-child(1) {
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 2px;
  }

  & div > p:nth-child(2) {
    padding: 5px;
  }
`
export const FormBox = styled.div`
  padding: 5px;
  width: 90%;
  margin: 0 auto;
  border: 1px solid orange;

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }
`

export const Form = styled.form<FormPropsBorder>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & label {
    width: 100%;
    text-align: center;
    margin-bottom: 5px;

    & input {
      width: 100%;
      padding: 5px;
      border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
      border-radius: 4px;
      background: transparent;
    }

    & textarea {
      width: 100%;
      padding: 5px;
      border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
      border-radius: 4px;
      background: transparent;
    }
`

export const CloseFormButton = styled.button`
  width: 100%;
`