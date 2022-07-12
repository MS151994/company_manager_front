import {TaskInterface} from 'types';
import './onetask.css';

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
                    ? <button>set done</button>
                    : <button>take it</button>
                }
            </div>
        </div>
    )
}