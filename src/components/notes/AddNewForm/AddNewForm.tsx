import {FormButton} from "../../commons/buttons/FormButon";
import {useCookies} from "react-cookie";
import {Spinner} from "../../commons/Spinner/Spinner";
import {useToast} from "@chakra-ui/react";
import {SyntheticEvent, useState} from "react";
import {config} from "../../config/config";
import './addNewForm.css';

interface Props {
    onTodosChange: () => void;
}

export const AddNewForm = (props: Props) => {
    const [cookie, setCookie] = useCookies(['user']);
    const [loading, setLoading] = useState(false);
    const initialState = {
        title: '',
        text: '',
        isImportant: false,
        userId: cookie.user,
    }
    const [form, setForm] = useState(initialState);
    const toast = useToast();


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
            if (res.status === 200) {
                toast({
                    title: `Added new note!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false);
            setForm(initialState);
            props.onTodosChange();
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
            </form>
        </div>
    )
}