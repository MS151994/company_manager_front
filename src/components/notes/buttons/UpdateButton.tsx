import {useToast} from "@chakra-ui/react";
import {MdOutlineFavoriteBorder} from "react-icons/md";
import {config} from "../../config/config";

interface Props {
    noteId: string;
    isImportant: boolean | string;
    onNotesChange: () => void;
}

export const UpdateButton = (props: Props) => {
    const toast = useToast();

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
            if (res.status === 200) {
                toast({
                    title: `success! Note has been updated!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            props.onNotesChange();
        }
    };

    return <button onClick={() => handleAddImportant()}><MdOutlineFavoriteBorder/></button>
}