import {FormButton} from "../commons/buttons/FormButon";
import {OneNote} from "./OneNote/OneNote";
import {useEffect, useState} from "react";
import {config} from "../config/config";
import {Spinner} from "../commons/Spinner/Spinner";
import {NotesInterface} from 'types';
import {useCookies} from "react-cookie";

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
                console.log(notes)
            } finally {
                setLoading(false);
            }
        })();
    }, [])
    return (
        <div className="notes__container">
            <div className="page_title">
                <h1>Notes Pages</h1>
            </div>
            <div className="add_new_note">
                <form action="">
                    <label>
                        <input type="text" placeholder={'title'}/>
                    </label>
                    <label>
                        <textarea rows={5} cols={20} placeholder={'text note...'}></textarea>
                    </label>
                    <FormButton buttonName={'add note'}/>
                </form>
            </div>
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
