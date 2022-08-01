import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.45);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  & label {
    font-size: 0.8rem;
    width: 100%;
    padding: 5px;

    & input {
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      padding: 10px;
      outline-color: orange;
      margin-top: 5px;
      width: 100%;
    }

    & .checkBox {
      padding: 3px;
      width: 20px;
      margin-left: 5px;
    }
`