import styled from "styled-components";
import {device} from '../../const/MediaQueries';

interface Props {
    borderColor: string;
}

export const NavigationBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.45);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 10px;

  ${device.mobile} {
    flex-direction: column-reverse;
    justify-content: center;;
  }

  ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
  }
`

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LoggedUserInfo = styled.p`
  margin-right: 5px;
  margin-left: 5px;
  font-style: italic;

  span {
    text-transform: capitalize;
    color: orange;
    margin-left: 5px;
  }
`
export const LogOutButton = styled.button<Props>`
  background: transparent;
  border: 1px solid ${props => props.borderColor === "light" ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.45)'};
  border-radius: 4px;
  padding: 2px 10px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s;

  &:hover {
    color: orange;
    border-color: orange;
  }
`