import {config} from "../../config/config";

interface Props {
    noteId: string;
}

export const DeleteButton = (props: Props) => {
    const handleDelete = async (noteId: string) => {
        try {
            const res = await fetch(`${config.api}/notes/${noteId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } finally {
            window.location.reload();
        }
    };

    return <button onClick={() => handleDelete(props.noteId)}>🗑️</button>
}