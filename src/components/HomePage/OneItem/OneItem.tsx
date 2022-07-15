import {SimpleInfoTask} from "types";
import './oneItem.css';
import {NavLink} from "react-router-dom";

interface Props extends SimpleInfoTask {
    isDone?: string | boolean;
}

export const OneItem = (props: Props) => {
    return (
        <li className={props.isDone === '1' ? "oneItem__box doneTask" : 'oneItem__box'}>
            <div>
                <p>{props.title}</p>
                <p> {props.text}</p>
                {props.isDone === "1" ? <p>Done</p> : <p>in progress</p>}
            </div>
            <NavLink to={'/tasks'}>➡️</NavLink>
        </li>
    )
}