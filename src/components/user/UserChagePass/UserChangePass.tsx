import {FormButton} from "../../commons/buttons/FormButon";
import {AiOutlineClose} from "react-icons/ai";
import {FaUserEdit} from "react-icons/fa";
import {SyntheticEvent, useState} from "react";
import {UserModalContainer, UserModalStyles} from "../../../const/layout/UserModal.styles";
import {useColorMode, useToast} from "@chakra-ui/react";
import {config} from "../../config/config";

interface Props {
    isOpen: (arg: boolean) => void
    userId: string
    refreshData: () => void
}

export const UserChangePass = ({isOpen, userId, refreshData}: Props) => {
    const [loading, setLoading] = useState<boolean>(false)
    const {colorMode} = useColorMode();
    const toast = useToast();
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

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await fetch(`${config.api}/user/changepassword`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    oldPass: form.oldPass,
                    newPass: form.newPass,
                    userId: userId
                })
            })
            if (res.status === 401) {
                toast({
                    title: `Wrong old password`,
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                });
            }
            if (res.status === 200) {
                toast({
                    title: `password updated!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            }

        } finally {
            setLoading(false)
            await refreshData()
            isOpen(false)
        }
    };

    return (
        <UserModalStyles currentColor={colorMode}>
            <UserModalContainer currentColor={colorMode}>
                <form onSubmit={handleSubmit}>
                    <div className={'modalIconTitle'}>
                        <FaUserEdit/>
                        <h1> change pass</h1>
                    </div>
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
                    <FormButton buttonName={'change'}/>
                    <AiOutlineClose onClick={() => isOpen(false)} className={'closeIcon'}/>
                </form>
            </UserModalContainer>
        </UserModalStyles>
    )
}