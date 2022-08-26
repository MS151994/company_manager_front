import styled from "styled-components";
import {device} from "../MediaQueries";

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  & .userInfo {
    width: 100%;
    justify-content: center;
    align-items: center;

    ${device.tablet} {
      width: 70%;
    }

    & div {
      margin-left: 10px;
    }

    & .otherInfo {
      font-size: 0.8rem;
    }

    & .otherInfoSpan {
      color: orange;
    }

    & div > p {
      font-size: 1.5rem;
      font-weight: 100;
      letter-spacing: 2px;

      & > span {
        color: orange;
        text-transform: uppercase;
      }
    }

    & svg {
      font-size: 5rem;
      color: orange;
    }
  }

  & > div {
    display: flex;
    margin: 5px auto;
    padding: 5px;
    border-radius: 4px;
  }
`
export const UserEvaluationBox = styled.div`
  justify-content: space-around;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;

  ${device.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
  }

  ${device.desktop} {
    max-width: 50%;
  }

  & > .box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
    margin: 10px 5px;
    padding: 5px;
    border-radius: 4px;
    transition: 0.3s;
    cursor: pointer;

    ${device.tablet} {
      height: 200px;
      width: 200px;
    }

    & .arrow {
      font-size: 1.2rem;
      transition: 0.3s;
    }

    &:hover {
      border-color: orange;

      & .arrow {
        margin-left: 120px;
        color: orange;
      }
    }

    & > svg:nth-child(1) {
      font-size: 3rem;
      color: orange;
    }

    & > div {
      text-transform: capitalize;
      letter-spacing: 2px;
      font-size: 1rem;
      font-weight: 100;

      & p:nth-child(2) {
        color: orange;
        font-weight: 500;
      }
    }
  }
`
