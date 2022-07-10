import {PageTitle} from "../commons/PageTitle/PageTitle";
import {AddNewTodoForm} from "./AddNewTodoForm/AddNewTodoForm";

import './todos.css';

export const Todos = () => {
    return (
        <div className={'todos__container'}>
            <PageTitle pageTitle={"my todo's"}/>
            <AddNewTodoForm/>
            <div className="todo__item_box">
                <h2>todo's</h2>
                <div className="one_todo">
                   <div className="info_box">
                       <p>title</p>
                       <p>text</p>
                   </div>
                    <div className="date_box">
                        <p>added at: 15.07.2022</p>
                        <p>deadline: 16.07.2022</p>
                    </div>
                    <button>✅</button>
                </div>
            </div>
        </div>
    )
}