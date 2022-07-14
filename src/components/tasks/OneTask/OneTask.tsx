import {TaskInterface} from 'types';
import {config} from "../../config/config";
import {useCookies} from "react-cookie";
import {useState} from "react";
import './onetask.css';
import {Spinner} from "../../commons/Spinner/Spinner";

interface UserInfo {
    userId: string;
    name: string;
}

interface Props extends TaskInterface {
    userInfo: UserInfo[];
}

export const OneTask = (props: Props) => {
    const addedDate = new Date(props.createdAt).toLocaleDateString();
    const deadline = new Date(props.deadline).toLocaleDateString();
    const username = props.userInfo.find(user => user.userId === props.userId)
    const [cookie, setCookie] = useCookies(['user']);
    const [loading, setLoading] = useState<boolean>(false)

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
        } finally {
            setLoading(false);
            window.location.reload();
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
        } finally {
            setLoading(false);
            window.location.reload()
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
        } finally {
            setLoading(false)
            window.location.reload();
        }
    };

    return (
        <div className={props.userId ? "task__box" : "task__box notAssign"}>
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
                    ? <>{props.isDone === "1" ? <button onClick={handleSetArchive}>Archive</button> :
                        <button onClick={handleIsDone}>set done</button>}</>
                    : <button onClick={handleAssignPerson}>take it</button>
                }
            </div>
            <div className="status_box">
                {props.isDone === "0" ? <p className={'progress'}>in progress</p> : <p className={'done'}>done</p>}
            </div>
            {loading && <div className="loading"><Spinner/></div>}
        </div>
    )
}