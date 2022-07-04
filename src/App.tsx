import React from 'react';
import {CookiesProvider, useCookies} from "react-cookie";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {UserRegistration} from "./components/usersForm/UserRegistration";
import {UserLogin} from "./components/usersForm/UserLogin";

export const App = () => {
    return (
        <div>
            <CookiesProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/user/registration" element={<UserRegistration/>}/>
                </Routes>
            </CookiesProvider>
        </div>
    );
}

