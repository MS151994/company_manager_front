import styled from "styled-components";
import {device} from "../../../const/MediaQueries";


export const FormButtonBox = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 3%;
  right: 5%;
  cursor: pointer;
  font-size: 2rem;
  transition: 0.3s;

  &:hover {
    color: red;
  }

  ${device.desktop} {
    top: 15%;
    right: 28%;
  }
`

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: black;

  ${device.desktop} {
    width: 50%;
    height: 80%;
  }

  svg {
    font-size: 4rem;
    color: orange;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 2px;
    padding: 5px;
  }

  label {
    width: 80%;
    margin: 5px auto;
    text-align: center;
  }

  input,
  select,
  textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    transition: 0.3s;
    background-color: #282c34;
  }

  textarea:focus,
  input:focus {
    width: 92%;
    outline-color: orange;
  }

`

export const AddNewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid orange;
  background: transparent;
  font-size: 2rem;
  color: orange;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 165, 0, 0.8);

    & svg {
      color: white;
    }
  }
`