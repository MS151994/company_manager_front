import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

interface Props {
    borderColor: string;
}

export const Form = styled.form<Props>`
  width: 100%;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.45);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  ${device.tablet} {
    width: 70%
  }

  ${device.desktop} {
    width: 50%;
  }

  & label {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & input {
      background: transparent;
      width: 80%;
      border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
      border-radius: 4px;
      padding: 5px;

      &:focus {
        outline-color: orange;
      }
    }
`
export const ButtonSearch = styled.button`
  margin-left: 10px;
  transition: 0.3s;
  font-size: 1.2rem;

  &:hover {
    color: orange;
  }
`

export const FoundedTasks = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 5px;

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }

  & p.searchFor {
    padding: 5px;
    font-style: italic;
    font-weight: 200;

    & span {
      color: orange;
    }
  }
`