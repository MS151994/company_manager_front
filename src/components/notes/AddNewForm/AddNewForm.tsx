import {FormButton} from "../../commons/buttons/FormButon";
import {SyntheticEvent, useState} from "react";
import {config} from "../../config/config";
import {useCookies} from "react-cookie";
import {Spinner} from "../../commons/Spinner/Spinner";
import './addNewForm.css';

export const AddNewForm = () => {
    const [cookie, setCookie] = useCookies(['user']);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('')
    const initialState = {
        title: '',
        text: '',
        isImportant: false,
        userId: cookie.user,
    }
    const [form, setForm] = useState(initialState);

    const updateForm = (key: string, value: string | boolean) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    }

    const handleAddNote = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/notes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            setMessage(data.message);
            window.location.reload();
        } finally {
            setLoading(false);
            setForm(initialState);
        }
    };

    return (
        <div className="add_new_note">
            <form onSubmit={handleAddNote}>
                <label>
                    <input
                        type="text"
                        placeholder={'title'}
                        required
                        value={form.title}
                        onChange={e => updateForm('title', e.target.value)}
                    />
                </label>
                <label>
                    <textarea
                        rows={5}
                        cols={20}
                        placeholder={'text note...'}
                        required
                        maxLength={1000}
                        value={form.text}
                        onChange={e => updateForm('text', e.target.value)}
                    />
                </label>
                <label>
                    is important
                    <input
                        className={'checkBox'}
                        type="checkbox"
                        checked={form.isImportant}
                        onChange={e => updateForm('isImportant', e.target.checked)}
                    />
                </label>
                {loading ? <Spinner/> : <FormButton buttonName={'add note'}/>}
                {message !== '' ? <p>{message}</p> : null}
            </form>
        </div>
    )
}