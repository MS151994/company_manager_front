import {UserLogin} from "../usersForm/UserLogin";
import {useCookies} from "react-cookie";

export const HomePage = () => {
    const [cookie, setCookie] = useCookies(['user']);
    return (
        <>
            {(cookie.user && cookie.user !== "undefined")
                ? <>
                    <h1>home page</h1>
                </>
                : <UserLogin/>}
        </>
    )
}
