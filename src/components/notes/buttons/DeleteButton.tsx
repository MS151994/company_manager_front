import {config} from "../../config/config";
import {useToast} from "@chakra-ui/react";
import {IoTrashBinSharp} from "react-icons/io5";

interface Props {
    noteId: string;
    onNotesChange: () => void;
}

export const DeleteButton = (props: Props) => {
    const toast = useToast();
    const handleDelete = async (noteId: string) => {
        try {
            const res = await fetch(`${config.api}/notes/${noteId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res.status === 200) {
                toast({
                    title: `Note has been deleted!`,
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            await props.onNotesChange();
        }
    };

    return <button onClick={() => handleDelete(props.noteId)}><IoTrashBinSharp/></button>
}