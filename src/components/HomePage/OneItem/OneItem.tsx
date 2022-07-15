import {SimpleInfoTask} from "types";
import './oneItem.css';
import {NavLink} from "react-router-dom";

export const OneItem = (props: SimpleInfoTask) => {
    return (
        <li className={'oneItem__box'}>
            <div>
                <p>{props.title}</p>
                <p> {props.text}</p>
            </div>
            <NavLink to={'/tasks'}>➡️</NavLink>
        </li>
    )
}