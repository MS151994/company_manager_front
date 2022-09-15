import {AiOutlineUser} from "react-icons/ai";
import {UserViewContainer} from "./OneUserView.styles";

interface Props {
    name: string,
    userRole: string
}

export const OneUserView = ({name, userRole}: Props) => {
    return (
        <UserViewContainer>
            <AiOutlineUser/>
            <p>{name}</p>
            <p className={'role'}>({userRole})</p>
        </UserViewContainer>
    )
}