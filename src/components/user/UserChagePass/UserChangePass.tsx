import {ChangePassContainer, ChangePassForm} from "./UserChangePass.styles";
import {FormButton} from "../../commons/buttons/FormButon";
import {AiOutlineClose} from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import {SyntheticEvent, useState} from "react";

interface Props {
    isActive: (arg: boolean) => void
    userId: string
}

export const UserChangePass = ({isActive}: Props) => {
    const [form, setForm] = useState({
        oldPass: '',
        newPass: '',
    })

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(form)
    };

    return (
        <ChangePassContainer>
            <ChangePassForm onSubmit={handleSubmit}>
                <div>
                    <FaUserEdit/>
                    <h1> change pass</h1>
                </div>
                <div>
                    <label htmlFor="">
                        <input
                            type="password"
                            placeholder={'old pass'}
                            required
                            value={form.oldPass}
                            onChange={(e) => updateForm('oldPass', e.target.value)}
                        />
                    </label>
                    <label htmlFor="">
                        <input
                            type="password"
                            placeholder={'new pass'}
                            required
                            value={form.newPass}
                            onChange={(e) => updateForm('newPass', e.target.value)}
                        />
                    </label>
                </div>
                <FormButton buttonName={'change'}/>
                <AiOutlineClose onClick={() => isActive(false)} className={'closeIcon'}/>
            </ChangePassForm>
        </ChangePassContainer>
    )
}