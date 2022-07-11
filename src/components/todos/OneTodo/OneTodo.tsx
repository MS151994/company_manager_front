import {TodosInterface} from 'types';
import './oneTodo.css';


export const OneTodo = (props: TodosInterface) => {
    const createdDate = new Date(props.createdAt);
    const deadlineDate = new Date(props.deadline);

    return (
        <div className={props.highPriority === "1" ? "oneTodo__container highPriority" : "oneTodo__container"}>
            <div className={'oneTodo__box'}>
                <div className="oneTodo_infoBox">
                    <p>{props.title}</p>
                    <p>{props.text}</p>
                </div>
                <div className="oneTodo_dateBox">
                    <p>📆</p>
                    <p>added at: {createdDate.toLocaleDateString()}</p>
                    <p>deadline: {deadlineDate.toLocaleDateString()}</p>
                </div>
            </div>
            <button className={'done_button'}>✅</button>
        </div>
    )
}