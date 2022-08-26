import {MdPublishedWithChanges} from "react-icons/md";
import {SyntheticEvent, useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {FormButton} from "../../commons/buttons/FormButon";
import {config} from "../../config/config";
import {Spinner} from "../../commons/Spinner/Spinner";
import {UserModalContainer, UserModalStyles} from "../../../const/layout/UserModal.styles";
import {useColorMode} from "@chakra-ui/react";

interface Props {
    isOpen: (arg: boolean) => void
    userId: string
    status: string
    refreshData: () => void
}

export const UserChangeStatus = ({isOpen, userId, refreshData, status}: Props) => {
    const [userStatus, setUserStatus] = useState(status)
    const [loading, setLoading] = useState<boolean>(false)
    const handleUserStatus = (value: string) => setUserStatus(value)
    const {colorMode} = useColorMode()

    const handleSubmitStatus = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true)
            await fetch(`${config.api}/user/changestatus`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: userId,
                    userStatus: userStatus
                })
            })
        } finally {
            setLoading(false);
            await refreshData();
            isOpen(false);
        }
    };
    return (
        <UserModalStyles currentColor={colorMode}>
            <UserModalContainer currentColor={colorMode}>
                <form onSubmit={handleSubmitStatus}>
                    <div className={'modalIconTitle'}>
                        <MdPublishedWithChanges/>
                        <h1> change status</h1>
                    </div>
                    <label htmlFor="userStatus">
                        <select
                            name="userStatus"
                            id="userStatus"
                            onChange={(e) => handleUserStatus(e.target.value)}
                            value={userStatus}
                        >
                            <option value="free">free</option>
                            <option value="busy">busy</option>
                            <option value="vacation">vacation</option>
                            <option value="doNotDisturb">do not disturb</option>
                        </select>
                    </label>
                    <FormButton buttonName={'change'}/>
                    <AiOutlineClose onClick={() => isOpen(false)} className={'closeIcon'}/>
                    {loading && <div className={'spinnerBox'}>
                        <Spinner/>
                    </div>}
                </form>
            </UserModalContainer>
        </UserModalStyles>
    )
}