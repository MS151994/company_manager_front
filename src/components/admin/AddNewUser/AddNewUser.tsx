import {UserModalContainer, UserModalStyles} from "../../../const/layout/UserModal.styles";
import {FormButton} from "../../commons/buttons/FormButon";
import {AiOutlineClose} from "react-icons/ai";
import {SyntheticEvent, useState} from "react";
import {FiUserPlus} from "react-icons/fi";
import {useColorMode, useToast} from "@chakra-ui/react";
import {Spinner} from "../../commons/Spinner/Spinner";
import {config} from "../../config/config";

interface Props {
    close: (arg: boolean) => void
}

export const AddNewUser = ({close}: Props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const {colorMode} = useColorMode();
    const toast = useToast();
    const [form, setForm] = useState({
        userName: '',
        password: '',
        userRole: 'employer'
    })

    const updateForm = (key: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [key]: value
        }))
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        const newUser = {
            name: form.userName,
            password: form.password,
            userRole: form.userRole
        }
        console.log(newUser)
        try {
            const res = await fetch(`${config.api}/user/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            if (res.status === 201) {
                toast({
                    title: `Success, User Added`,
                    status: 'success',
                    isClosable: true,
                });
            }
        } finally {
            setLoading(false)
            close(false)
        }
    };

    return (
        <UserModalStyles currentColor={colorMode}>
            <UserModalContainer currentColor={colorMode}>
                <form onSubmit={handleSubmit}>
                    <div className={'modalIconTitle'}>
                        <FiUserPlus/>
                        <h1> Add user</h1>
                    </div>
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
                    <label>
                        <select
                            name="userRole"
                            onChange={(e) => updateForm('userRole', e.target.value)}
                            value={form.userRole}
                        >
                            <option value="employer">employer</option>
                            <option value="boss">boss</option>
                            <option value="admin">admin</option>
                            <option value="manager">manager</option>
                        </select>
                    </label>
                    <FormButton buttonName={'Add'}/>
                    {loading && <div className={'spinnerBox'}>
                        <Spinner/>
                    </div>}
                </form>
                <AiOutlineClose onClick={() => close(false)} className={'closeIcon'}/>
            </UserModalContainer>
        </UserModalStyles>
    )
}