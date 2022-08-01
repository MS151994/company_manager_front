import {TodosInterface} from 'types';
import {config} from "../../config/config";
import {useToast} from "@chakra-ui/react";
import {Button, TodoBox} from "./OneTodo.styles";
import {BsFillCalendarDateFill} from "react-icons/bs";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

interface Props extends TodosInterface {
    onTodosChange: () => void;
}

export const OneTodo = (props: Props) => {
    const createdDate = new Date(props.createdAt);
    const deadlineDate = new Date(props.deadline);
    const toast = useToast();

    const handleChangeStatus = async () => {
        try {
            await fetch(`${config.api}/todos/${props.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    isActive: "0",
                })
            })
        } finally {
            await props.onTodosChange();
        }
    };

    const handleDelete = async () => {
        try {
            const res = await fetch(`${config.api}/todos/${props.id}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (res.status === 200) {
                toast({
                    title: `task has been removed!`,
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            await props.onTodosChange();
        }
    }

    return (
        <TodoBox highPriority={props.highPriority} isDone={props.isActive}>
            <div>
                <div>
                    <p>{props.title}</p>
                    <p>{props.text}</p>
                </div>
                <div className="oneTodo_dateBox">
                    <BsFillCalendarDateFill/>
                    <p>added at: {createdDate.toLocaleDateString()}</p>
                    <p>deadline: {deadlineDate.toLocaleDateString()}</p>
                </div>
            </div>
            {props.isActive === "1"
                ? <Button isDone={props.isActive}
                          onClick={handleChangeStatus}><AiOutlineCheck/></Button>
                : <Button isDone={props.isActive}
                          onClick={handleDelete}><AiOutlineClose/></Button>}
        </TodoBox>
    )
}