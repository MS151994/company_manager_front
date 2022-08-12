import {NavLink} from "react-router-dom";
import {OneItemBox} from "./OneItem.styles";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {SimpleInfoTask} from "types";

interface Props extends SimpleInfoTask {
    isDone?: string | boolean;
}

export const OneItem = (props: Props) => {
    return (
        <OneItemBox isDone={props.isDone}>
            <div>
                <p>{props.title}</p>
                <p> {props.text}</p>
            </div>
            <NavLink to={'/tasks'}><BsFillArrowRightCircleFill/></NavLink>
        </OneItemBox>
    )
}