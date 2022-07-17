import {NavLink} from "react-router-dom";
import {MenuBar} from "./Menu.styles";

export const Menu = () => {
    return (
        <MenuBar>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/notes'}>Notes</NavLink>
            <NavLink to={'/todos'}>todos</NavLink>
            <NavLink to={'/tasks'}>task's</NavLink>
            <NavLink to={'/archive'}>archive</NavLink>
        </MenuBar>
    )
}