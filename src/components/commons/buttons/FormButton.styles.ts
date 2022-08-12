import styled from "styled-components";

interface Props {
    borderColor: string;
}

export const ButtonForm = styled.button<Props>`
  padding: 5px 10px;
  margin: 10px auto;
  border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
  border-radius: 4px;
  background: transparent;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
  width: 30%;


  &:hover {
    background: orange;
  }
`