import React from 'react';
import {CookiesProvider} from "react-cookie";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage";
import {UserRegistration} from "./components/usersForm/UserRegistration";

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

