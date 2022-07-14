import {SimpleInfoTask} from "types";
import './oneItem.css';

export const OneItem = (props: SimpleInfoTask) => {
    return (
        <li className={'oneItem__box'}>
            {props.title}: {props.text}
        </li>
    )
}