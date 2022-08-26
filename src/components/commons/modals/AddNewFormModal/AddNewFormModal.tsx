import {Form, FormContainer} from "./AddNewFormModal.styles";
import {Spinner} from "../../Spinner/Spinner";
import {FormButton} from "../../buttons/FormButon";
import {config} from "../../../config/config";
import {SyntheticEvent, useState} from "react";
import {useColorMode, useToast} from "@chakra-ui/react";
import {AiOutlineAppstoreAdd, AiOutlineClose} from "react-icons/ai";

interface Props {
    openModal: (value: boolean) => void
    refreshTasks: () => void
}


export const AddNewFormModal = ({openModal, refreshTasks}: Props) => {
    const dt = new Date().toISOString().slice(0, 10);
    const initialState = {
        title: 'other',
        deadline: dt,
        text: '',
        nip: '',
        telNumber: '',
    };
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState(initialState);
    const toast = useToast();
    const items = config.services;
    const {colorMode} = useColorMode()

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value
        }))
    }

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true)
            const res = await fetch(`${config.api}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });
            if (res.status === 200) {
                toast({
                    title: `Everything has been loaded!`,
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }
        } finally {
            setLoading(false);
            setForm(initialState);
            refreshTasks()
            openModal(false)
        }
    };

    return (
        <FormContainer currentColor={colorMode}>
            <AiOutlineClose className={"closeButton"} onClick={() => openModal(false)}>CLOSE</AiOutlineClose>
            <AiOutlineAppstoreAdd className={'formIcon'}/>
            <h1>add new tasks</h1>
            <Form onSubmit={handleSubmit} currentColor={colorMode}>
                <label>
                    <select name="title" value={form.title}
                            onChange={(e) => updateForm('title', e.target.value)}>
                        {items.map((el, index) =>
                            <option key={index} value={el}>{el}</option>
                        )}
                    </select>
                </label>
                <label>
                    <input
                        type="date"
                        required
                        value={form.deadline}
                        onChange={(e) => updateForm('deadline', e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="number"
                        placeholder={'nip'}
                        maxLength={10}
                        required
                        value={form.nip}
                        onChange={(e) => updateForm('nip', e.target.value)}
                    />
                </label>
                <label>
                    <input
                        type="tel"
                        placeholder={'telephone number'}
                        maxLength={9}
                        required
                        value={form.telNumber}
                        onChange={(e) => updateForm('telNumber', e.target.value)}
                    />
                </label>
                <label>
                    <textarea
                        cols={30}
                        rows={5}
                        placeholder={'more details'}
                        required
                        maxLength={300}
                        value={form.text}
                        onChange={(e) => updateForm('text', e.target.value)}
                    />
                </label>
                {loading ? <Spinner/> : <FormButton buttonName={'add'}/>}
            </Form>
        </FormContainer>
    )
}