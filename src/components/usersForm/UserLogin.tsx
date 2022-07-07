import {SyntheticEvent, useState} from "react";
import {useCookies} from "react-cookie";
import {config} from "../config/config";
import {Spinner} from "../commons/Spinner/Spinner";
import {NavLink} from "react-router-dom";
import {FormButton} from "../commons/buttons/FormButon";
import './userForm.css';


export const UserLogin = () => {
    const [cookie, setCookie] = useCookies<string>(['user', 'username']);
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState({
        name: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value.toLowerCase()
        }));
    }

    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(config.api, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
            const data = await res.json();
            if (data.message) {
                setMessage(data.message);
            }
            setCookie('user', data.id, {path: '/'});
            setCookie('username', data.name, {path: '/'});
            window.location.reload();
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className={"userForm__container"} onSubmit={handleLogin}>
            <h1>Sign in</h1>
            {message && <p>{message}</p>}
            <label>
                <input
                    type="text"
                    placeholder={"User name"}
                    maxLength={50}
                    required
                    value={form.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                />
            </label>
            <label>
                <input
                    type="password"
                    placeholder={"Password"}
                    maxLength={50}
                    required
                    value={form.password}
                    onChange={(e) => updateForm('password', e.target.value)}
                />
            </label>
            {loading ? <Spinner/> : <FormButton buttonName={'login'}/>}
            <p className={'account_info'}>You don't have an account? please <NavLink to={'/user/registration'}>create
                account</NavLink>.</p>
        </form>
    )
}