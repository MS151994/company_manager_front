import styled from "styled-components";

interface Props {
    highPriority?: boolean | string;
    isDone: boolean | string;
}

export const TodoBox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid transparent;
  border-left: 5px solid ${props => props.highPriority === "1" ? 'rgb(255,173,0)' : 'transparent'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border-left-width: ${props => props.highPriority === "1" ? '5px' : '1px'};
    border-color: orange;
  }

  & div > div {
    display: flex;
    flex-direction: row;
    padding: 2px;

    & p:nth-child(1) {
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 10px;
    }
  }

  & .oneTodo_dateBox {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    margin-left: 5px;
    text-decoration: ${props => props.isDone === "0" ? 'line-through' : ''};
  }
`
export const Button = styled.button<Props>`
  padding: 10px;
  font-size: 1.2rem;
  background: transparent;
  border-color: transparent;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.isDone === "1" ? 'green' : 'red'};
  }
`