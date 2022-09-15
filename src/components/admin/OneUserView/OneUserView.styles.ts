import styled from "styled-components";

export const UserViewContainer = styled.div`

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  width: 80%;

  & svg {
    font-size: 1.7rem;
    color: orange;
    margin-right: 5px;
  }

  & p {
    font-size: 1.5rem;
    margin-right: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .role {
    font-style: italic;
    font-size: 1rem;
  }
`