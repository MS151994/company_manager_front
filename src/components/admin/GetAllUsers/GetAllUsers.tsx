import {UserModalContainer, UserModalStyles} from "../../../const/layout/UserModal.styles"
import {useColorMode} from "@chakra-ui/react";
import {AiOutlineClose} from "react-icons/ai";
import {useEffect, useState} from "react";
import {config} from "../../config/config";
import {UserInterface} from "types";
import {Spinner} from "../../commons/Spinner/Spinner";
import {FaUsers} from "react-icons/fa";
import {OneUserView} from "../OneUserView/OneUserView";

interface Props {
    close: (arg: boolean) => void
}

export const GetAllUsers = ({close}: Props) => {
    const {colorMode} = useColorMode();
    const [users, setUsers] = useState<UserInterface[]>([])
    const [loading, setLoading] = useState(false)

    const refreshUsers = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${config.api}/user/getalluser`)
            const data = await res.json()
            await setUsers(data)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        refreshUsers()
    }, [])

    return (
        <UserModalStyles currentColor={colorMode}>
            <UserModalContainer currentColor={colorMode}>
                <div className={'modalIconTitle'}>
                    <FaUsers/>
                    <h1> all user</h1>
                </div>
                {users.map((user: UserInterface) =>
                    <OneUserView
                        key={user.id}
                        name={user.name}
                        userRole={user.userRole}
                    />)}
                <AiOutlineClose onClick={() => close(false)} className={'closeIcon'}/>
                {loading && <div className={'spinnerBox'}>
                    <Spinner/>
                </div>}
            </UserModalContainer>
        </UserModalStyles>
    )
}