import styled from "styled-components";
import {device} from "../../../const/MediaQueries";

interface Props {
    highPriority: string | boolean;
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