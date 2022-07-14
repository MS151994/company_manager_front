import {PageTitle} from "../commons/PageTitle/PageTitle";
import './homePage.css'
import {useEffect, useState} from "react";
import {config} from "../config/config";
import {useCookies} from "react-cookie";
import {SimpleInfoTask} from "types";
import {OneItem} from "./OneItem/OneItem";
import {useToast} from "@chakra-ui/react";

export const HomePage = () => {

    const [tasks, setTasks] = useState<SimpleInfoTask[]>([])
    const [cookie, setCookie] = useCookies(['user']);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();

    useEffect(() => {

        (async () => {

            try {
                setLoading(true);
                const res = await fetch(`${config.api}/home/${cookie.user}`);
                const data = await res.json();
                await setTasks(data);

            } finally {
                setLoading(false);
                toast({
                    title: `Everything has been loaded!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        })();

    }, [])

    return (
        <>
            <PageTitle pageTitle={'home page'} itemsLength={tasks.length}/>
            <div className={'my_day'}>
                <div className="tasks__container">
                    <p className={'container_title'}>in progress task's <span>({tasks.length.toString()}el.)</span></p>
                    <ul>
                        {tasks.map(task => <OneItem
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
