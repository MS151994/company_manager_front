import {PageTitle} from "../commons/PageTitle/PageTitle";
import {OneTask} from "./OneTask/OneTask";

import './tasks.css'
import {useEffect, useState} from "react";
import {TaskInterface} from "types";
import {config} from "../config/config";
import {AddNewTasksForm} from "./AddNewTasksForm/AddNewTasksForm";

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch(`${config.api}/tasks`)
                const tasksList = await res.json();
                setTasks(tasksList[0]);
                setUsers(tasksList[1])
            } finally {
                setLoading(false);
            }
        })();
    }, [])

    return (
        <>
            <PageTitle pageTitle={"task's"}/>
            <div className="task__container">
                <AddNewTasksForm/>
                {tasks.map(task =>
                    <OneTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        text={task.text}
                        nip={task.nip}
                        telNumber={task.telNumber}
                        deadline={task.deadline}
                        createdAt={task.createdAt}
                        isDone={task.isDone}
                        userId={task.userId}
                        userInfo={users}
                    />
                )}
            </div>
        </>
    )
}