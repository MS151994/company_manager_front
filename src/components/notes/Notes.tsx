import {OneNote} from "./OneNote/OneNote";
import {useEffect, useState} from "react";
import {Spinner} from "../commons/Spinner/Spinner";
import {useCookies} from "react-cookie";
import {AddNewForm} from "./AddNewForm/AddNewForm";
import {PageTitle} from "../commons/PageTitle/PageTitle";
import {useToast} from "@chakra-ui/react";
import {config} from "../config/config";
import {NotesInterface} from 'types';


export const Notes = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [notes, setNotes] = useState<NotesInterface[]>([]);
    const [cookie] = useCookies(['user']);
    const toast = useToast();

    const refreshNotes = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/notes/${cookie.user}`);
            const notes = await res.json();
            await setNotes(notes)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshNotes().then(() =>
            toast({
                title: `Everything has been loaded!`,
                status: 'info',
                duration: 3000,
                isClosable: true,
            })
        );
    }, []);

    return (
        <>
            <PageTitle pageTitle={"notes page"} itemsLength={notes.length}/>
            <AddNewForm onTodosChange={refreshNotes}/>
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
                    onNotesChange={refreshNotes}
                />)}
        </>
    )
}
