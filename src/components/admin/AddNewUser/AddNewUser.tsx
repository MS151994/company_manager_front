import {UserModalContainer, UserModalStyles} from "../../../const/layout/UserModal.styles";
import {FormButton} from "../../commons/buttons/FormButon";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import {FiUserPlus} from "react-icons/fi";

interface Props {
    close: (arg: boolean) => void
}

export const AddNewUser = ({close}: Props) => {

    const [form, setForm] = useState({
        userName: '',
        password: '',
    })

    const updateForm = (key: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [key]: value
        }))
    };

    return (
        <UserModalStyles>
            <UserModalContainer>
                <div>
                    <FiUserPlus/>
                    <h1> Add user</h1>
                </div>
                <div>
                    <label>
                        <input
                            type="text"
                            placeholder={'user name'}
                            required
                            value={form.userName}
                            onChange={(e) => updateForm('userName', e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder={'password'}
                            required
                            value={form.password}
                            onChange={(e) => updateForm('password', e.target.value)}
                        />
                    </label>
                </div>
                <FormButton buttonName={'change'}/>
                <AiOutlineClose onClick={() => close(false)} className={'closeIcon'}/>
            </UserModalContainer>
        </UserModalStyles>
    )
}