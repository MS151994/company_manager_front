import {UpdateButton} from "../buttons/UpdateButton";
import {FormButton} from "../../commons/buttons/FormButon";
import {DeleteButton} from "../buttons/DeleteButton";
import {useColorMode, useToast} from "@chakra-ui/react";
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {AiFillEdit} from "react-icons/ai";
import {SyntheticEvent, useState} from "react";
import {CloseFormButton, Form, FormBox, OneNoteBox} from "./OneNote.styles";
import {config} from "../../config/config";
import {NotesInterface} from "types";

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
    const {colorMode} = useColorMode();

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
        <>
            {!editMode
                ? <OneNoteBox highPriority={props.isImportant}>
                    <div>
                        <p>{props.title}</p>
                        <div>
                            <BsFillCalendarDateFill/>
                            add: {dt.toLocaleDateString()} at: {dt.toLocaleTimeString()}
                        </div>
                        <p>{props.text}</p>
                    </div>
                    <div className="buttons_box">
                        <DeleteButton
                            noteId={props.id}
                            onNotesChange={props.onNotesChange}
                        />
                        <button onClick={() => setEditMode(!editMode)}>
                            <AiFillEdit/>
                        </button>
                        <UpdateButton
                            noteId={props.id}
                            isImportant={props.isImportant}
                            onNotesChange={props.onNotesChange}
                        />
                    </div>
                </OneNoteBox>
                : <>
                    <FormBox>
                        <Form onSubmit={handleEdit} borderColor={colorMode}>
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
                        </Form>
                        <CloseFormButton onClick={() => setEditMode(!editMode)}>❌</CloseFormButton>
                    </FormBox>
                </>
            }
        </>
    )
}