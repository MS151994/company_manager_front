import {PageTitle} from "../commons/PageTitle/PageTitle";
import {OneTask} from "./OneTask/OneTask";
import {useEffect, useState} from "react";
import {TaskInterface} from "types";
import {config} from "../config/config";
import {AddNewTasksForm} from "./AddNewTasksForm/AddNewTasksForm";
import {useToast} from "@chakra-ui/react";
import {Spinner} from "../commons/Spinner/Spinner";
import './tasks.css';

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [users, setUsers] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('all');
    const toast = useToast();

    const refreshTasks = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/tasks`)
            const tasksList = await res.json();
            setTasks(tasksList[0]);
            setUsers(tasksList[1])
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshTasks().then(() =>
            toast({
                title: `Everything has been loaded!`,
                status: 'info',
                duration: 3000,
                isClosable: true,
            })
        );
    }, [])

    return (
        <>
            <PageTitle pageTitle={"task's"} itemsLength={tasks.length}/>
            <div className={'selected_filter'}>
                filter by:
                <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="0">Done</option>
                    <option value="1">In Progress</option>
                </select>
            </div>
            <div className="task__container">
                <AddNewTasksForm onTasksChange={refreshTasks}/>
                {loading && <Spinner/>}
                {tasks
                    .filter(task => task.isDone !== filter)
                    .map(task =>
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
                            status={task.status}
                            onTasksChange={refreshTasks}
                        />
                    )}
            </div>
        </>
    )
}