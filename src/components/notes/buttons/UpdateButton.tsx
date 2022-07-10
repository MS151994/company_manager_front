import {config} from "../../config/config";

interface Props {
    noteId: string;
    isImportant: boolean | string;
}

export const UpdateButton = (props: Props) => {
    const handleAddImportant = async () => {
        try {
            const res = await fetch(`${config.api}/notes/one/${props.noteId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isImportant: props.isImportant === "0" ? "1" : "0",
                })
            })
        } finally {
            window.location.reload();
        }
    };
    return (
        <button onClick={() => handleAddImportant()}>⭐</button>
    )
}