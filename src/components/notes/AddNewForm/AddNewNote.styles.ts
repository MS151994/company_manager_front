import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

interface Props {
    borderColor: string
}

export const Form = styled.form<Props>`
  display: flex;
  flex-direction: column;
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

  & label {
    width: 100%;
    padding: 5px;

    & input {
      width: 100%;
      padding: 5px;
      border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
      border-radius: 4px;
      background: transparent;

      &:focus {
        outline-color: orange;
      }
    }

    & textarea {
      width: 100%;
      padding: 5px;
      border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
      border-radius: 4px;
      background: transparent;

      &:focus {
        outline-color: orange;
      }
    }

    & input.checkBox {
      width: 30px;
    }
  }
`