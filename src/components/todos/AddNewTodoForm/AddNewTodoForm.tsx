import {FormButton} from "../../commons/buttons/FormButon";
import {useCookies} from "react-cookie";
import {config} from "../../config/config";
import {SyntheticEvent, useState} from "react";
import {Form, FormContainer} from "./AddNewTodoForm.styles";

interface Props {
    onTodosChange: () => Promise<void>;
}

export const AddNewTodoForm = (props: Props) => {
    const minDate = new Date().toISOString().slice(0, 10);
    const initialState = {
        title: '',
        text: '',
        deadline: minDate,
        highPriority: false,
    };

    const [cookie] = useCookies(['user'])
    const [form, setForm] = useState(initialState);

    const updateForm = (key: string, value: string | boolean) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            await fetch(`${config.api}/todos/${cookie.user}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            })
        } finally {
            setForm(initialState);
            await props.onTodosChange();
        }
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder={'title'}
                        required
                        value={form.title}
                        onChange={(e) => updateForm('title', e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder={'text'}
                        required
                        value={form.text}
                        onChange={(e) => updateForm('text', e.target.value)}
                    />
                </label>
                <label>
                    deadline:
                    <input
                        type="date"
                        min={minDate}
                        required
                        value={form.deadline}
                        onChange={(e) => updateForm('deadline', e.target.value)}
                    />
                </label>
                <label
                    className={'checkBoxLabel'}>
                    high priority
                    <input
                        className={'checkBox'}
                        type="checkbox"
                        checked={form.highPriority}
                        onChange={(e) => updateForm('highPriority', e.target.checked)}
                    />
                </label>
                <FormButton buttonName={'add'}/>
            </Form>
        </FormContainer>
    )
}