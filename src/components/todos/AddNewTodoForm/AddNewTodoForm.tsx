import {FormButton} from "../../commons/buttons/FormButon";
import {useState} from "react";

import './addNewTodoForm.css';


export const AddNewTodoForm = () => {
    const minDate = new Date().toISOString().slice(0, 10);

    const [form, setForm] = useState({
        title: '',
        text: '',
        deadline: minDate,
        highPriority: false,
    })

    const updateForm = (key: string, value: string | boolean) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    return (
        <div className="add_new_todo">
            <form>
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
            </form>
        </div>
    )
}