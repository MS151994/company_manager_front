import React, {SyntheticEvent, useLayoutEffect, useRef, useState} from "react";
import {OneItem} from "../../../HomePage/OneItem/OneItem";
import {BsSearch} from 'react-icons/bs'
import {useColorMode, useToast} from "@chakra-ui/react";
import {ButtonSearch, Form, FoundedTasks, SearchBox, SearchContainer} from "./Search.styles";
import {config} from "../../../config/config";
import {TaskInterface} from "types";
import {Spinner} from "../../Spinner/Spinner";
import {AiOutlineClose} from "react-icons/ai";

interface Props {
    isOpen: (value: boolean) => void
}

export const Search = ({isOpen}: Props) => {
    const [searchInput, setSearchInput] = useState('');
    const [foundedTask, setFoundedTask] = useState<TaskInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const {colorMode} = useColorMode();
    const inputRef = useRef<HTMLInputElement>(null)
    const toast = useToast();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            isOpen(false)
        }
    })

    useLayoutEffect(() => {
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
    })

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
        <SearchContainer currentColor={colorMode}>
            <AiOutlineClose className={"closeSearchButton"} onClick={() => isOpen(false)}>CLOSE</AiOutlineClose>
            <SearchBox>
                <Form onSubmit={handleSubmit} currentColor={colorMode}>
                    <label>
                        <ButtonSearch>
                            <BsSearch/>
                        </ButtonSearch>
                        <input
                            ref={inputRef}
                            type="text"
                            required
                            placeholder={"Search items by  Client ID"}
                            value={searchInput}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchInput(e.currentTarget.value)}
                        />
                        <div>
                            {searchInput.length > 0 && <AiOutlineClose onClick={() => setSearchInput('')}/>}
                        </div>
                    </label>
                </Form>
            </SearchBox>
            <FoundedTasks currentColor={colorMode}>
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
        </SearchContainer>
    )
}
