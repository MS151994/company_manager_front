import './notes.css'
import {FormButton} from "../commons/buttons/FormButon";

export const Notes = () => {
    return (
        <div className="notes__container">
            <div className="page_title">
                <h1>Notes Pages</h1>
            </div>
            <div className="add_new_note">
                <form action="">
                    <label>
                        <input type="text" placeholder={'title'}/>
                    </label>
                    <label>
                        <textarea rows={5} cols={20} placeholder={'text note...'}></textarea>
                    </label>
                    <FormButton buttonName={'add note'}/>
                </form>
            </div>
            <div className="notes__box">
                <div className="one_note">
                    <div>
                        <p>title text</p>
                        <p className={"text_box"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            dolorum id itaque magni neque? Aliquid dignissimos fugit id, inventore laborum magni numquam
                            pariatur quisquam ratione repudiandae, sequi sint temporibus, voluptatem?</p>
                    </div>
                    <div className="buttons_box">
                        <button>🗑️</button>
                        <button>✏️</button>
                        <button>📋</button>
                        <button>⭐</button>
                    </div>
                </div>
            </div>
            <div className="notes__box">
                <div className="one_note">
                    <div>
                        <p>title text</p>
                        <p className={"text_box"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            dolorum id itaque magni neque? Aliquid dignissimos fugit id, inventore laborum magni numquam
                            pariatur quisquam ratione repudiandae, sequi sint temporibus, voluptatem?</p>
                    </div>
                    <div className="buttons_box">
                        <button>🗑️</button>
                        <button>✏️</button>
                        <button>📋</button>
                        <button>⭐</button>
                    </div>
                </div>
            </div>
            <div className="notes__box">
                <div className="one_note">
                    <div>
                        <p>title text</p>
                        <p className={"text_box"}>Lorem t temporibus, voluptatem?</p>
                    </div>
                    <div className="buttons_box">
                        <button>🗑️</button>
                        <button>✏️</button>
                        <button>📋</button>
                        <button>⭐</button>
                    </div>
                </div>
            </div>
            <div className="notes__box">
                <div className="one_note">
                    <div>
                        <p>title text</p>
                        <p className={"text_box"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            dolorum id itaque minventore laborum magni numquam
                            pariatur quisquam  temporibus, voluptatem?</p>
                    </div>
                    <div className="buttons_box">
                        <button>🗑️</button>
                        <button>✏️</button>
                        <button>📋</button>
                        <button>⭐</button>
                    </div>
                </div>
            </div>
            <div className="notes__box">
                <div className="one_note">
                    <div>
                        <p>title text</p>
                        <p className={"text_box"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                            dolorum id itaque magni ribus, voluptatem?</p>
                    </div>
                    <div className="buttons_box">
                        <button>🗑️</button>
                        <button>✏️</button>
                        <button>📋</button>
                        <button>⭐</button>
                    </div>
                </div>
            </div>
        </div>
    )
}