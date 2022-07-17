import styled from "styled-components";
import {device} from "../../const/MediaQueries";

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