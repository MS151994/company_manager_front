import {PageTitle} from "../commons/PageTitle/PageTitle";
import {OneTask} from "./OneTask/OneTask";

import './tasks.css'

export const Tasks = () => {
    return (
        <>
            <PageTitle pageTitle={"task's"}/>
            <div className="task__container">
                <OneTask/>
                <OneTask/>
                <OneTask/>
                <OneTask/>
                <OneTask/>
                <OneTask/>
            </div>
        </>
    )
}