import {MdPublishedWithChanges} from "react-icons/md";
import {SyntheticEvent, useState} from "react";
import {ChangeStatusContainer, ChangeStatusForm} from "./UserChangeStatus.styles";
import {AiOutlineClose} from "react-icons/ai";
import {FormButton} from "../../commons/buttons/FormButon";

interface Props {
    isOpen: (arg: boolean) => void
    userId: string
}

export const UserChangeStatus = ({isOpen, userId}: Props) => {
    const [userStatus, setUserStatus] = useState('free')
    const handleUserStatus = (value: string) => setUserStatus(value)

    const handleSubmitStatus = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(userStatus)
    };
    return (
        <ChangeStatusContainer>
            <ChangeStatusForm onSubmit={handleSubmitStatus}>
                <div>
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
            </ChangeStatusForm>
        </ChangeStatusContainer>
    )
}