import {NotesInterface} from "types";
import {UpdateButton} from "../buttons/UpdateButton";
import {SyntheticEvent, useState} from "react";
import {FormButton} from "../../commons/buttons/FormButon";
import {config} from "../../config/config";
import {DeleteButton} from "../buttons/DeleteButton";
import './oneNote.css';
import {useToast} from "@chakra-ui/react";

interface Props extends Omit<NotesInterface, 'isImportant'> {
    isImportant: boolean | string;
    onNotesChange: () => void;
}

export const OneNote = (props: Props) => {
    const dt = new Date(props.createdAt);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({
        title: props.title,
        text: props.text,
        isImportant: props.isImportant,
    });
    const toast = useToast();

    const handleEdit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${config.api}/notes/edit/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })
            if (res.status === 200) {
                toast({
                    title: `Note updated!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }

        } finally {
            setEditMode(false);
            await props.onNotesChange();
        }
    }

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    return (
        <div className={props.isImportant === '1' ? "one_note important" : "one_note"}>
            {!editMode
                ? <>
                    <div>
                        <p>{props.title}
                            <span
                                className={'created_date'}> (add: {dt.toLocaleDateString()} at: {dt.toLocaleTimeString()})</span>
                        </p>
                        <p className={"text_box"}>{props.text}</p>
                    </div>
                    <div className="buttons_box">
                        <DeleteButton
                            noteId={props.id}
                            onNotesChange={props.onNotesChange}
                        />
                        <button onClick={() => setEditMode(!editMode)}>✏️</button>
                        <UpdateButton
                            noteId={props.id}
                            isImportant={props.isImportant}
                            onNotesChange={props.onNotesChange}
                        />
                    </div>
                </>
                : <>
                    <div className={'update__form'}>
                        <form onSubmit={handleEdit}>
                            <label>
                                <input
                                    type={"text"}
                                    value={form.title}
                                    onChange={(e) => updateForm('title', e.target.value)}
                                />
                            </label>
                            <label>
                                <textarea
                                    rows={5}
                                    cols={20}
                                    value={form.text}
                                    onChange={(e) => updateForm('text', e.target.value)}
                                ></textarea>
                            </label>
                            <FormButton buttonName={'update'}/>
                        </form>
                    </div>
                    <div className="buttons_box">
                        <button onClick={() => setEditMode(!editMode)}>❌</button>
                    </div>
                </>
            }
        </div>
    )
}