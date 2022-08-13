import styled from "styled-components";

interface Props {
    isDone?: string | boolean
}

export const OneItemBox = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid ${props => props.isDone === "1" ? 'rgba(0,255,0,0.45)' : 'rgba(255,255,255,0)'};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 1px solid orange;
  }

  & a {
    transition: 0.3s;
  }

  & a:hover {
    color: orange;
  }

  & div {
    display: flex;
    flex-direction: row;

    & p:nth-child(1) {
      text-transform: uppercase;
      font-weight: 200;
      letter-spacing: 2px;
      margin-right: 5px;
    }

    & p:nth-child(2) {
      font-style: italic;
    }

    & p:nth-child(3) {
      color: rgba(0, 0, 0, 0.5);
      color: orange;
      margin-left: 5px;
    }
  }
`