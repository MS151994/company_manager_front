import './onetask.css';

export const OneTask = () => {
    return (
        <div className="task__box">
            <div className="task_title">
                <p>task 1</p>
                <p>📆 added at: 12.07.2022, deadline: 12.07.2022</p>
            </div>
            <div className="task_client_id">
                <p>NIP: <span>8271203340</span></p>
            </div>
            <div className='task_text'>
                <p>task text more details</p>
            </div>
            <div className="task_client_number">
                <p>Number: <span>123-456-789</span></p>
            </div>
            <div className="task_assign_person">
                <p>assign: <span>Person</span></p>
            </div>
            <div className="buttons_box">
                <button>set done</button>
                <button>assign person</button>
            </div>
        </div>
    )
}