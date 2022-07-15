import {PageTitle} from "../commons/PageTitle/PageTitle";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {OneItem} from "./OneItem/OneItem";
import {Spinner, useToast} from "@chakra-ui/react";
import {config} from "../config/config";
import {SimpleInfoTask} from "types";
import {Search} from "../commons/Search/Search";
import './homePage.css'

export const HomePage = () => {

    const [tasks, setTasks] = useState<SimpleInfoTask[]>([]);
    const [newTask, setNewTask] = useState<SimpleInfoTask[]>([]);
    const [cookie, setCookie] = useCookies(['user']);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();

    const refreshTasks = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/home/${cookie.user}`);
            const data = await res.json();
            await setTasks(data[0]);
            await setNewTask(data[1])
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
            <PageTitle pageTitle={'home page'} itemsLength={tasks.length}/>
            <div className={'my_day'}>
                <Search/>
                <div className="tasks__container">
                    <p className={'container_title'}>in progress task's <span>({tasks.length.toString()}el.)</span> </p>
                    {loading && <div className={"spinner_box"} ><Spinner/></div>}
                    <ul>
                        {tasks.map(task => <OneItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            text={task.text}
                        />)}

                    </ul>
                </div>
                <div className="tasks__container">
                    <p className={'container_title'}>new task's <span>({newTask.length.toString()}el.)</span></p>
                    {loading && <div className={"spinner_box"} ><Spinner/></div>}
                    <ul>
                        {newTask.map(task => <OneItem
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            text={task.text}
                        />)}
                    </ul>
                </div>
            </div>
        </>
    )
}
