import React, {SyntheticEvent, useState} from "react";
import {OneItem} from "../../HomePage/OneItem/OneItem";
import {BsSearch} from 'react-icons/bs'
import {useColorMode, useToast} from "@chakra-ui/react";
import {ButtonSearch, Form, FoundedTasks} from "./Search.styles";
import {config} from "../../config/config";
import {TaskInterface} from "types";
import {Spinner} from "../Spinner/Spinner";

export const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [foundedTask, setFoundedTask] = useState<TaskInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const {colorMode} = useColorMode();
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
        <>
            <Form onSubmit={handleSubmit} borderColor={colorMode}>
                <label>
                    <input
                        type="text"
                        placeholder={"Search items by  Client ID"}
                        value={searchInput}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchInput(e.currentTarget.value)}
                    />
                    <ButtonSearch>
                        <BsSearch/>
                    </ButtonSearch>
                </label>
            </Form>
            <FoundedTasks>
                {loading && <Spinner/>}
                {foundedTask.length !== 0 &&
                    <p className={"searchFor"}>Founded task for: <span>{searchInput}</span></p>}
                <ul>
                    {foundedTask.map(task => <OneItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        text={task.text}
                        isDone={task.isDone}
                    />)}
                </ul>
            </FoundedTasks>
        </>
    )
}
