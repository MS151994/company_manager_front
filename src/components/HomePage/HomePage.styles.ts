import styled from "styled-components";
import {device} from "../../const/MediaQueries";

interface Props {
    currentColor: string
}

export const SearchBox = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 300px;
  margin: 0 auto;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;

  & input {
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid ${props => props.currentColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
    border-radius: 4px;
  }
`

export const TaskBox = styled.div`
  width: 100%;
  margin: 10px auto 50px;
  padding: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }

  & p.box_title {
    font-size: 1.6rem;
    font-weight: 200;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;

    & span {
      text-transform: lowercase;
      font-size: 1rem;
      font-style: italic;
      color: orange;
    }
  }
`