import styled from "styled-components";
import {device} from "../../const/MediaQueries";

export const FilterSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & select {
    background-color: transparent;
    width: 300px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    transition: 0.3s;

    & option {
      color: black;
    }
  }

  & svg {
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: orange;
    }
  }
`

export const TaskContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

`