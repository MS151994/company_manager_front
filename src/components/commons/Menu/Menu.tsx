import './menu.css'
import {NavLink} from "react-router-dom";
import {useCookies} from "react-cookie";

export const Menu = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['user', 'username']);
    const handleLogOut = () => {
        removeCookie('user')
        removeCookie('username');
        window.location.reload();
    }

    return (
        <div className="menu__container">
            <ul>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/notes'}>Notes</NavLink>
                <NavLink to={'/todos'}>todos</NavLink>
                <NavLink to={'/tasks'}>task's</NavLink>
                <NavLink to={'/archive'}>archive</NavLink>
            </ul>
            <div className={'menu__features'}>
                <p>Welcome, <span>{cookie.username}</span></p>
                <button className={"menu__logOut_button"} onClick={handleLogOut}>log out</button>
            </div>
        </div>
    )
}