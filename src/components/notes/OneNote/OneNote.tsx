import './oneNote.css'

interface Props {
    id: string;
    title: string;
    text: string;
    createdAt: Date;
    userId: string | null;
    isImportant: boolean;
}

export const OneNote = (props: Props) => {
    const dt = new Date(props.createdAt);
    return (
        <div className={props.isImportant ? "one_note important" : "one_note"}>
            <div>
                <p>
                    {props.title}
                    <span className={'created_date'}>
                     add: {dt.toLocaleDateString()}
                        at: {dt.toLocaleTimeString()}
                    </span>
                </p>
                <p className={"text_box"}>{props.text}</p>
            </div>
            <div className="buttons_box">
                <button>🗑️</button>
                <button>✏️</button>
                <button>📋</button>
                <button>⭐</button>
            </div>
        </div>
    )
}