import {TodosInterface} from 'types';
import {config} from "../../config/config";

import './oneTodo.css';

export const OneTodo = (props: TodosInterface) => {
    const createdDate = new Date(props.createdAt);
    const deadlineDate = new Date(props.deadline);

    const handleChangeStatus = () => {
        try {
            const res = fetch(`${config.api}/todos/${props.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    isActive: "0",
                })
            })
        } finally {
            window.location.reload();
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
        } finally {
            window.location.reload()
        }
    };

    return (
        <div className={props.highPriority === "1" ? "oneTodo__container highPriority" : "oneTodo__container"}>
            <div className={'oneTodo__box'}>
                <div className={`oneTodo_infoBox ${props.isActive === "0" ? 'doneText' : ''}`}>
                    <p>{props.title}</p>
                    <p>{props.text}</p>
                </div>
                <div className="oneTodo_dateBox">
                    <p>📆</p>
                    <p>added at: {createdDate.toLocaleDateString()}</p>
                    <p>deadline: {deadlineDate.toLocaleDateString()}</p>
                </div>
            </div>
            {props.isActive === "1"
                ? <button className={'done_button'} onClick={handleChangeStatus}>✅</button>
                : <button className={'done_button'} onClick={handleDelete}>❌</button>}
        </div>
    )
}