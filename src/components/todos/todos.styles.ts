import styled from "styled-components";
import {device} from "../../const/MediaQueries";

export const TodosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }
`

export const Separator = styled.div`
  font-size: 1.7rem;
  font-weight: 100;
  letter-spacing: 2px;
  padding: 5px;
  text-transform: uppercase;

  & span {
    font-size: 1rem;
    font-style: italic;
    text-transform: lowercase;
    color: orange;
  }
`