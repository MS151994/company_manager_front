import styled from "styled-components";
import {device} from "../../const/MediaQueries";

export const Form = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  width: 90vw;
  height: 90vh;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;

  ${device.tablet} {
    width: 60vw;
    height: 70vh;
  }

  ${device.desktop} {
    width: 30vw;
  }


  & > h1 {
    font-size: 30px;
    font-weight: 100;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }

  & label {
    margin-top: 5px;
    width: 100%;
    background-color: transparent;


    & input {
      width: 90%;
      border: 1px solid rgba(0, 0, 0, 0.45);
      border-radius: 4px;
      padding: 10px;
      outline-color: orange;
      transition: 0.3s;
      background-color: transparent;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &:focus {
      outline-color: orange;
    }
  }

  & .login_button {
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    padding: 2px 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 200;
    transition: 0.3s;

    &:hover {
      background: orange;
      color: white;
    }
  }

  .errorMsg,
  .account_info {
    font-weight: 200;
    font-style: italic;
    padding: 3px;
    margin-bottom: 10px;
  }

  .account_info {
    margin-top: 20px;
    font-size: 1.1rem;

    & > a {
      color: orange;
    }

  }

  .title,
  .success {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 2px;
  }

  & svg {
    position: absolute;
    top: 5%;
    right: 50%;
    transform: translateX(50%);
    font-size: 55px;

  }
`