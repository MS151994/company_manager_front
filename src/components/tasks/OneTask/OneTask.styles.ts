import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

interface Props {
    userId: string | null;
}

export const TaskBox = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  margin: 5px auto;
  border: 1px solid ${props => !props.userId ? 'red' : 'transparent'};
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border-color: ${props => !props.userId ? 'red' : 'orange'};
  }

  ${device.tablet} {
    width: 80%;
  }

  ${device.desktop} {
    width: 300px;
    margin: 5px;
  }


  .task__box div {
    padding: 5px;
  }

  .task_title p:nth-child(1) {
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
  }

  .task_title p:nth-child(2) {
    font-size: 0.7rem;
  }

  & .task_text {
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .task_text p {
    font-size: 0.9rem;
    text-transform: lowercase;
    font-style: italic;
  }

  .task_client_id p,
  .task_assign_person p,
  .task_client_number p {
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .task_client_id p span,
  .task_assign_person p span,
  .task_client_number p span {
    font-weight: 600;
  }
`

export const StatusBox = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;


  .waiting,
  .progress,
  .done {
    background: orange;
    padding: 3px;
    border-radius: 4px;
    color: white;
  }

  .waiting {
    background: red;
    color: white;
  }

  .done {
    background: green;
  }
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;


  & button {
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      border-color: orange;
    }
  }

`