import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

export const TaskBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  border: 1px solid rgba(0, 0, 0, 0.45);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.45);
  border-radius: 4px;
  margin: 5px auto;
  padding: 5px;
  transition: 0.3s;

  ${device.tablet} {
    width: 600px;
  }

  ${device.desktop} {
    width: 300px;
    cursor: pointer;

    &:hover {
      border-color: orange;
    }
  }

  .status_box {
    position: absolute;
    top: 0;
    right: 0;
  }

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

  .loading {
    position: absolute;
    top: 1px;
    bottom: 1px;
    left: 1px;
    right: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);

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

  .task_text {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .task_text p {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
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

  .buttons_box {
    display: flex;
    flex-direction: row;
    justify-content: end;
  }

  .buttons_box button {
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.45);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    transition: 0.3s;
  }

  .buttons_box button:hover {
    border-color: orange;
  }

  .notAssign {
    border-color: red;
  }


`