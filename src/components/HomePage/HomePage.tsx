import {PageTitle} from "../commons/PageTitle/PageTitle";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {OneItem} from "./OneItem/OneItem";
import {useToast} from "@chakra-ui/react";
import {Search} from "../commons/modals/Search/Search";
import {Spinner} from "../commons/Spinner/Spinner";
import {SearchBox, TaskBox} from "./HomePage.styles";
import {config} from "../config/config";
import {SimpleInfoTask} from "types";
import {BsSearch} from 'react-icons/bs'

export const HomePage = () => {
    const [tasks, setTasks] = useState<SimpleInfoTask[]>([]);
    const [newTask, setNewTask] = useState<SimpleInfoTask[]>([]);
    const [cookie] = useCookies(['user']);
    const [loading, setLoading] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState(false)
    const toast = useToast();

    const refreshTasks = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/home/${cookie.user}`);
            const data = await res.json();
            await setTasks(data[0]);
            await setNewTask(data[1]);
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
            <PageTitle pageTitle={'home page'}/>
            <SearchBox onClick={() => setOpenSearch(!openSearch)}>
                <BsSearch/>
                <input
                    type="text"
                    placeholder={'Search items by client id'}
                    disabled
                />
            </SearchBox>
            <TaskBox>
                <p className={'box_title'}>in progress task's <span>active {tasks.length.toString()} el</span></p>
                {loading && <Spinner/>}
                <ul>
                    {tasks.map(task => <OneItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        text={task.text}
                    />)}
                </ul>
            </TaskBox>
            <TaskBox>
                <p className={'box_title'}>new task's <span>active {newTask.length.toString()} el</span></p>
                {loading && <Spinner/>}
                <ul>
                    {newTask.map(task => <OneItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        text={task.text}
                    />)}
                </ul>
            </TaskBox>
            {openSearch && <Search isOpen={setOpenSearch}/>}
        </>
    )
}
