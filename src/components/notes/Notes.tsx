import {OneNote} from "./OneNote/OneNote";
import {useEffect, useState} from "react";
import {config} from "../config/config";
import {Spinner} from "../commons/Spinner/Spinner";
import {NotesInterface} from 'types';
import {useCookies} from "react-cookie";
import {AddNewForm} from "./AddNewForm/AddNewForm";
import {PageTitle} from "../commons/PageTitle/PageTitle";
import './notes.css';

export const Notes = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [notes, setNotes] = useState<NotesInterface[]>([]);
    const [cookie, setCookie] = useCookies(['user']);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch(`${config.api}/notes/${cookie.user}`);
                const notes = await res.json();
                await setNotes(notes)
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="notes__container">
            <PageTitle pageTitle={"notes page"}/>
            <AddNewForm/>
            <div className="notes__box">
                {loading && <Spinner/>}
                {notes.map((note: NotesInterface) =>
                    <OneNote
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        text={note.text}
                        createdAt={note.createdAt}
                        userId={note.userId}
                        isImportant={note.isImportant}
                    />)}
            </div>
        </div>
    )
}
