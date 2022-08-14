import React, {useEffect, useState} from "react";

export const Clock = () => {
    const [dt, setDt] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDt(new Date())
        }, 1000);
    }, [])
    return (
        <div>
            <p>{dt.toLocaleTimeString()}</p>
            <p>{dt.toLocaleDateString()}</p>
        </div>
    )
}