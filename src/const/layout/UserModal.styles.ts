import styled from "styled-components";

export const UserModalStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

`

export const UserModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 95%;
  height: 95%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);

  & div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & svg {
      font-size: 3.7rem;
      color: orange;
    }
  }

  & h1 {
    font-size: 3rem;
    text-transform: capitalize;
    font-weight: 100;
    letter-spacing: 2px;
  }

  & div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & label {
      width: 100%;
      padding: 5px;

      & input {
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        width: 100%;
        margin-top: 5px;
      }
    }
  }

  & .closeIcon {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: rotate(-180deg);
      color: orange;
    }
  }
`