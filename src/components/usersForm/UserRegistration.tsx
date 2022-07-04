import {SyntheticEvent, useState} from "react";
import {FormButton} from "../commons/buttons/FormButon";
import {Spinner} from "../commons/Spinner/Spinner";
import {config} from "../config/config";
import {NavLink} from "react-router-dom";

import './userForm.css'

export const UserRegistration = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        password: '',
        confirm_password: '',
    })
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
                if (data.message === 'added') {
                    setForm({
                        name: '',
                        password: '',
                        confirm_password: '',
                    });
                    setUserAddedInfo(true);
                }
            } else {
                setInputError('check your password!')
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className={"userForm__container"} onSubmit={handleRegister}>
            {!userAddedInfo ?
                <>
                    <h1>Sing up</h1>
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
                    <p>Congratulation!</p>
                    <p className={'account_info'}>please <NavLink to={'/'}>login</NavLink>.</p>
                </>
            }
        </form>
    )
}