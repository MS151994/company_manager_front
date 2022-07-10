import {FormButton} from "../../commons/buttons/FormButon";

import './addNewTodoForm.css';

export const AddNewTodoForm = () => {
    return (
        <div className="add_new_todo">
            <form>
                <label>
                    <input type="text" placeholder={'title'}/>
                </label>
                <label>
                    <input type="text" placeholder={'text'}/>
                </label>
                <label>
                    deadline:
                    <input type="date"/>
                </label>
                <label className={'checkBoxLabel'}>
                    high priority
                    <input
                        className={'checkBox'}
                        type="checkbox"
                    />
                </label>
                <FormButton buttonName={'add'}/>
            </form>
        </div>
    )
}