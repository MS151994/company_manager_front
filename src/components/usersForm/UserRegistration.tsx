import {SyntheticEvent, useState} from "react";
import {FormButton} from "../commons/buttons/FormButon";
import {Spinner} from "../commons/Spinner/Spinner";
import {config} from "../config/config";
import {NavLink} from "react-router-dom";
import {useToast} from "@chakra-ui/react";
import './userForm.css';

export const UserRegistration = () => {
    const toast = useToast();
    const initialState = {
        name: '',
        password: '',
        confirm_password: '',
    };
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(initialState);
    const [inputError, setInputError] = useState('');
    const [userAddedInfo, setUserAddedInfo] = useState(false);

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value.toLowerCase()
        }))
    }

    const handleRegister = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (form.password === form.confirm_password) {
                setInputError('');
                const res = await fetch(`${config.api}/user/registration`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                });
                const data = await res.json();
                await setInputError(data.message);
                if (res.status === 201) {
                    setForm(initialState);
                    setUserAddedInfo(true);
                    toast({
                        title: `Success, your account has been created!`,
                        status: 'success',
                        isClosable: true,
                    });
                }
            } else {
                setInputError('check your password!');
                toast({
                    title: 'check your password!',
                    status: 'warning',
                    isClosable: true,
                });
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className={"userForm__container"} onSubmit={handleRegister}>
            {!userAddedInfo ?
                <>
                    <h1 className={'title'}>Sing up</h1>
                    <label>
                        <input
                            type="text"
                            placeholder={"User name"}
                            maxLength={50}
                            required
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder={"Password"}
                            maxLength={50}
                            required
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder={"Confirm password"}
                            maxLength={50}
                            required
                            value={form.confirm_password}
                            onChange={e => updateForm('confirm_password', e.target.value)}
                        />
                    </label>
                    <p className={'errorMsg'}>{inputError}</p>
                    {loading ? <Spinner/> : <FormButton buttonName={'sing up'}/>}
                    <p className={'account_info'}>If you have account, please <NavLink to={'/'}>login</NavLink>.</p>
                </>
                :
                <>
                    <p className={'success'}>Congratulation! Account Created!</p>
                    <p className={'account_info'}>please login.</p>
                    <p><NavLink className={'login_button'} to={'/'}>login</NavLink></p>
                </>
            }
        </form>
    )
}