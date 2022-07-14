import {PageTitle} from "../commons/PageTitle/PageTitle";
import {useEffect, useState} from "react";
import {TaskInterface} from "types";
import {config} from "../config/config";
import {Spinner} from "../commons/Spinner/Spinner";
import {useToast} from "@chakra-ui/react";
import './tasks.css'

export const ArchiveTasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();

    const refreshArchive = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/tasks/archive`)
            const tasksList = await res.json();
            setTasks(tasksList);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshArchive().then(() =>
            toast({
                title: `Everything has been loaded!`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        );
    }, [])

    const handleDelete = async (id: string) => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/tasks/archive/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            if (res.status === 200) {
                toast({
                    title: `Tasks has been deleted!`,
                    status: 'warning',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false)
            await refreshArchive();
        }
    };

    return (
        <>
            <PageTitle pageTitle={"Archive"} itemsLength={tasks.length}/>
            <div className="task__container">
                <ul>
                    {tasks.map(task => <div key={task.id} className={"task__box"}>
                        <div className="task_title">
                            <p>{task.title}</p>
                            <p>📆 added at: {''}, deadline: {''}</p>
                        </div>
                        <div className="task_client_id">
                            <p>NIP: <span>{task.nip}</span></p>
                        </div>
                        <div className='task_text'>
                            <p>{task.text}</p>
                        </div>
                        <div className="task_client_number">
                            <p>Number: <span>{task.telNumber}</span></p>
                        </div>
                        <div className="buttons_box">
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                        {loading && <div className="loading"><Spinner/></div>}
                    </div>)}
                </ul>
            </div>
        </>
    )
}
