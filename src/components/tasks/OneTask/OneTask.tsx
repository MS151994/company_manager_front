import {useCookies} from "react-cookie";
import {useState} from "react";
import {Spinner} from "../../commons/Spinner/Spinner";
import {useToast} from "@chakra-ui/react";
import {TaskInterface} from 'types';
import {config} from "../../config/config";
import {TaskBox} from "./OneTask.styles";

interface UserInfo {
    userId: string;
    name: string;
}

interface Props extends TaskInterface {
    userInfo: UserInfo[];
    onTasksChange: () => void;
}

export const OneTask = (props: Props) => {
    const addedDate = new Date(props.createdAt).toLocaleDateString();
    const deadline = new Date(props.deadline).toLocaleDateString();
    const username = props.userInfo.find(user => user.userId === props.userId)
    const [cookie] = useCookies(['user']);
    const [loading, setLoading] = useState<boolean>(false)
    const toast = useToast();

    const handleAssignPerson = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/tasks/one/${props.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...props,
                    userId: cookie.user,
                }),
            });
            if (res.status === 200) {
                toast({
                    title: `Assigned person! Created personal ToDo`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false);
            await props.onTasksChange();
        }
    };

    const handleIsDone = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/tasks/isdone/${props.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({isDone: true}),
            })
            if (res.status === 200) {
                toast({
                    title: `Task is done!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false);
            await props.onTasksChange();
        }
    };

    const handleSetArchive = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/tasks/setarchive/${props.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({status: 'archive'})
            })
            if (res.status === 200) {
                toast({
                    title: `Task added to archive tab!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false)
            await props.onTasksChange();
        }
    };

    return (
        <TaskBox>
            <div className="task_title">
                <p>{props.title}</p>
                <p>📆 added at: {addedDate}, deadline: {deadline}</p>
            </div>
            <div className="task_client_id">
                <p>NIP: <span>{props.nip}</span></p>
            </div>
            <div className='task_text'>
                <p>{props.text}</p>
            </div>
            <div className="task_client_number">
                <p>Number: <span>{props.telNumber}</span></p>
            </div>
            <div className="task_assign_person">
                <p>assign: <span>{props.userId === null ? "not assign!" : username?.name}</span></p>
            </div>
            <div className="buttons_box">
                {props.userId
                    ? <>{props.isDone === "1"
                        ? <button onClick={handleSetArchive}>Archive</button>
                        : <button onClick={handleIsDone}>set done</button>
                    }</>
                    : <button onClick={handleAssignPerson}>take it</button>
                }
            </div>
            <div className="status_box">
                {props.userId === null
                    ? <p className={'waiting'}>waiting</p>
                    : <>
                        {props.isDone === "0"
                            ? <p className={'progress'}>in progress</p>
                            : <p className={'done'}>done</p>
                        }
                    </>}
            </div>
            {loading && <div className="loading"><Spinner/></div>}
        </TaskBox>
    )
}