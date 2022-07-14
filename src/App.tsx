import React from 'react';
import {CookiesProvider, useCookies} from "react-cookie";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage/HomePage";
import {UserRegistration} from "./components/usersForm/UserRegistration";
import {Notes} from "./components/notes/Notes";
import {UserLogin} from "./components/usersForm/UserLogin";
import {Menu} from "./components/commons/Menu/Menu";
import {Todos} from "./components/todos/todos";
import {Tasks} from "./components/tasks/Tasks";
import {ArchiveTasks} from "./components/tasks/ArchiveTasks";
import {NotFound} from "./components/commons/404page/NotFound";

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
                    <Route path="/todos"
                           element={(cookie.user && cookie.user !== "undefined") ? <Todos/> : <UserLogin/>}/>
                    <Route path="/tasks"
                           element={(cookie.user && cookie.user !== "undefined") ? <Tasks/> : <UserLogin/>}/>
                    <Route path="/archive"
                           element={(cookie.user && cookie.user !== "undefined") ? <ArchiveTasks/> : <UserLogin/>}/>
                    <Route path='/*' element={<NotFound/>}/>
                </Routes>
            </CookiesProvider>
        </div>
    );
}

