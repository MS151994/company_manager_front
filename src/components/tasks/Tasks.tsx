import {PageTitle} from "../commons/PageTitle/PageTitle";
import {OneTask} from "./OneTask/OneTask";
import {useEffect, useState} from "react";
import {TaskInterface} from "types";
import {config} from "../config/config";
import {useToast} from "@chakra-ui/react";
import {Spinner} from "../commons/Spinner/Spinner";
import {FilterSelected, TaskContainer} from "./Tasks,styles";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {AddNewFormModal} from "../commons/modals/AddNewFormModal/AddNewFormModal";

export const Tasks = () => {
    const [tasks, setTasks] = useState<TaskInterface[]>([]);
    const [users, setUsers] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>('all');
    const [openModal, setOpenModal] = useState(false)
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

    openModal
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = '')

    return (
        <>
            <PageTitle pageTitle={"task's"} itemsLength={tasks.length}/>
            <FilterSelected>
                filter by:
                <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="0">Done</option>
                    <option value="1">In Progress</option>
                </select>
                <AiOutlineAppstoreAdd onClick={() => setOpenModal(!openModal)}>+</AiOutlineAppstoreAdd>
            </FilterSelected>
            {openModal && <AddNewFormModal openModal={setOpenModal} refreshTasks={refreshTasks}/>}
            <TaskContainer>
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
            </TaskContainer>
        </>
    )
}