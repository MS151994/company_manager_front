import {PageTitle} from "../commons/PageTitle/PageTitle";
import {AddNewTodoForm} from "./AddNewTodoForm/AddNewTodoForm";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {Spinner} from "../commons/Spinner/Spinner";
import {OneTodo} from "./OneTodo/OneTodo";
import {useToast} from "@chakra-ui/react";
import {TodosInterface} from "types";
import {config} from "../config/config";
import {Separator, TodosContainer} from "./todos.styles";

export const Todos = () => {
    const [todos, setTodos] = useState<TodosInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [cookie] = useCookies(['user']);
    const toast = useToast();

    const active = todos.filter(el => el.isActive === '1');
    const doneEl = todos.filter(el => el.isActive === "0");

    const refreshTodos = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/todos/${cookie.user}`);
            const data = await res.json();
            await setTodos(data);
            if (data.length !== 0) {
                toast({
                    title: `Updated list item's!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        refreshTodos()
            .then(() => toast({
                    title: `Everything has been loaded!`,
                    status: 'info',
                    duration: 3000,
                    isClosable: true,
                })
            );
    }, [])

    return (
        <div className={'todos__container'}>
            <PageTitle pageTitle={"my todo's"} itemsLength={todos.length}/>
            <AddNewTodoForm onTodosChange={refreshTodos}/>
            {active.length !== 0 &&
                <TodosContainer>
                    <Separator>
                        <p>Todos <span>active {active.length.toString()} el</span></p>
                    </Separator>
                    {loading && <Spinner/>}
                    {active.map(todo =>
                        <OneTodo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            text={todo.text}
                            createdAt={todo.createdAt}
                            deadline={todo.deadline}
                            highPriority={todo.highPriority}
                            userId={todo.userId}
                            isActive={todo.isActive}
                            onTodosChange={refreshTodos}
                        />)}
                </TodosContainer>
            }
            {doneEl.length !== 0 &&
                <TodosContainer>
                    <Separator>
                        <p>done <span> {doneEl.length.toString()} el</span></p>
                    </Separator>
                    {loading && <Spinner/>}
                    {doneEl.map(todo =>
                        <OneTodo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            text={todo.text}
                            createdAt={todo.createdAt}
                            deadline={todo.deadline}
                            highPriority={todo.highPriority}
                            userId={todo.userId}
                            isActive={todo.isActive}
                            onTodosChange={refreshTodos}
                        />)}
                </TodosContainer>
            }
        </div>
    )
}