import styled from "styled-components";
import {device} from "../../../../const/MediaQueries";

interface Props {
    currentColor: string;
}


export const SearchContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'};

  & .closeSearchButton {
    position: absolute;
    top: 0;
    right: 5%;
    font-size: 3rem;
    background-color: transparent;
    transition: 0.3s;
    cursor: pointer;

    ${device.tablet} {
      top: 10px;
      right: 20%;
    }

    &:hover {
      color: orange;
      transform: rotate(-180deg);
    }
  }

`

export const SearchBox = styled.div`
  width: 100%;
  margin: 50px auto 0;

  ${device.tablet} {
    width: 70%
  }

  ${device.desktop} {
    width: 50%;
  }
`

export const Form = styled.form<Props>`
  width: 100%;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.45);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);


  & label {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'};

    & div {
      width: 20px;

      & svg {
        font-size: 1.5rem;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          color: red;
        }
      }
    }
  }

  & input {
    background: transparent;
    width: 80%;
    border: 1px solid ${props => props.currentColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
    border-radius: 4px;
    padding: 5px;

    &:focus {
      outline-color: orange;
    }
  }
`
export const ButtonSearch = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.3s;
  font-size: 1.2rem;

  &:hover {
    color: orange;
  }
`

export const FoundedTasks = styled.div<Props>`
  width: 100%;
  margin: 20px auto;
  padding: 5px;
  background-color: ${props => props.currentColor === "light" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.5)'};

  ${device.tablet} {
    width: 70%;
  }

  ${device.desktop} {
    width: 50%;
  }

  & p.searchFor {
    padding: 5px;
    font-style: italic;
    font-weight: 200;

    & span {
      color: orange;
    }
  }
`