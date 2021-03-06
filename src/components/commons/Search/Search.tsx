import React, {SyntheticEvent, useState} from "react";
import {config} from "../../config/config";
import {OneItem} from "../../HomePage/OneItem/OneItem";
import {Spinner, useToast} from "@chakra-ui/react";
import {TaskInterface} from "types";
import './search.css';

export const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [foundedTask, setFoundedTask] = useState<TaskInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const toast = useToast();


    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch(`${config.api}/home/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({search: searchInput})
            })
            const data = await res.json();
            await setFoundedTask(data);
            if (res.status === 200) {
                toast({
                    title: `Founded tasks`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search__container">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        placeholder={"Search items by  Client ID"}
                        value={searchInput}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchInput(e.currentTarget.value)}
                    />
                    <button>🔎</button>
                </label>
            </form>
            <div className="tasks__container">
                {loading && <Spinner/>}
                <ul>
                    {foundedTask.map(task => <OneItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        text={task.text}
                        isDone={task.isDone}
                    />)}
                </ul>
            </div>
        </div>
    )
}
