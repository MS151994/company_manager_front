import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

export const TasksContainer = styled.section`
  display: flex;
  flex-direction: column;

  ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const SelectedFilter = styled.section`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;

  & select {
    width: 300px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    transition: 0.1s;

    &:focus {
      background-color: #282c34;
      outline: orange;
      color: white;
    }
  }
`