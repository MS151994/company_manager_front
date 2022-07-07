import React from 'react';
import {CookiesProvider, useCookies} from "react-cookie";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {UserRegistration} from "./components/usersForm/UserRegistration";
import {Notes} from "./components/notes/Notes";
import {UserLogin} from "./components/usersForm/UserLogin";
import {Menu} from "./components/commons/Menu/Menu";

export const App = () => {
    const [cookie, setCookie] = useCookies(['user']);
    return (
        <div>
            <CookiesProvider>
                {(cookie.user && cookie.user !== "undefined") ? <Menu/> : null}
                <Routes>
                    <Route path="/"
                           element={(cookie.user && cookie.user !== "undefined") ? <HomePage/> : <UserLogin/>}/>
                    <Route path="/user/registration" element={<UserRegistration/>}/>
                    <Route path="/notes"
                           element={(cookie.user && cookie.user !== "undefined") ? <Notes/> : <UserLogin/>}/>
                </Routes>
            </CookiesProvider>
        </div>
    );
}

