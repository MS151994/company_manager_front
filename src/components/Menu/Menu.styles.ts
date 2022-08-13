import styled from "styled-components";

export const MenuBar = styled.menu`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 5px;

  a {
    display: block;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 200;
    transition: 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
      color: orange;
      border-bottom: 1px solid orange;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`