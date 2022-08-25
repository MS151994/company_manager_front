import styled from "styled-components";
import {device} from "../MediaQueries";

export const UserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

  & div:nth-child(1) {
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

export const UserInfoBox = styled.div`
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
  text-align: center;

  ${device.desktop}{
    max-width: 60%;
  }
  
  & > p {
    font-size: 2rem;
    font-weight: 100;
    letter-spacing: 2px;

    & > span {
      font-size: 2.4rem;
      color: orange;
      text-transform: uppercase;
    }
  }
`

export const UserEvaluationBox = styled.div`
  justify-content: space-around;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
  
  ${device.tablet}{
    flex-wrap: wrap;
    flex-direction: row;
  }
  
  ${device.desktop}{
    max-width: 60%;
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
    
    ${device.tablet}{
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
export const Form = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    background-color: red;

    & select {
      padding: 10px;
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      width: 100%;
      margin-right: 10px;

      & option {
        color: black
      }
    }

    & button {
      &:hover {
        &svg {
          color: orange;
        }
      }
    }

    & svg {
      font-size: 1.6rem;
      cursor: pointer;
      transition: 0.3s;

    }

  }



`