import {PageTitle} from "../commons/PageTitle/PageTitle";
import {AddNewTodoForm} from "./AddNewTodoForm/AddNewTodoForm";
import {useEffect, useState} from "react";
import {TodosInterface} from "types";
import {config} from "../config/config";
import {useCookies} from "react-cookie";
import {Spinner} from "../commons/Spinner/Spinner";
import {OneTodo} from "./OneTodo/OneTodo";

import './todos.css';

export const Todos = () => {
    const [todos, setTodos] = useState<TodosInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [cookie, setCookie] = useCookies(['user'])

    useEffect(() => {

        (async () => {
            try {
                setLoading(true);
                const res = await fetch(`${config.api}/todos/${cookie.user}`);
                const data = await res.json();
                await setTodos(data);
            } finally {
                setLoading(false);
            }
        })();

    }, [])

    return (
        <div className={'todos__container'}>
            <PageTitle pageTitle={"my todo's"}/>
            <AddNewTodoForm/>
            <div className="todo__item_box">
                <div className="todo__separator">
                    <p>Active</p>
                </div>
                {loading && <Spinner/>}
                {todos
                    .filter(todo => todo.isActive === "1")
                    .map(todo =>
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
                        />)}
            </div>
            <div className="todo__item_box">
                <div className="todo__separator">
                    <p>done</p>
                </div>
                {loading && <Spinner/>}
                {todos
                    .filter(todo => todo.isActive === "0")
                    .map(todo =>
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
                        />)}
            </div>
        </div>
    )
}