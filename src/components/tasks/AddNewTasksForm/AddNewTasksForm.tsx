import {FormButton} from "../../commons/buttons/FormButon";
import {SyntheticEvent, useState} from "react";
import {config} from "../../config/config";
import {Spinner} from "../../commons/Spinner/Spinner";
import {useToast} from "@chakra-ui/react";
import {MdAddTask} from "react-icons/md";
import {AddNewButton, CloseButton, Form, FormButtonBox, FormContainer} from "./AddNewTaskForm.styles";
import {AiOutlineClose} from "react-icons/ai";
import {HiViewGridAdd} from "react-icons/hi";

interface Props {
    onTasksChange: () => void;
}

export const AddNewTasksForm = (props: Props) => {
    const dt = new Date().toISOString().slice(0, 10);
    const initialState = {
        title: 'other',
        deadline: dt,
        text: '',
        nip: '',
        telNumber: '',
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState(initialState);
    const toast = useToast();
    const items = config.services;

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
            setIsOpen(false);
            await props.onTasksChange();
        }
    };


    return (
        <FormButtonBox>
            <AddNewButton onClick={() => setIsOpen(!isOpen)}><MdAddTask/></AddNewButton>
            {isOpen &&
                <FormContainer>
                    <CloseButton onClick={() => setIsOpen(!isOpen)}><AiOutlineClose/></CloseButton>
                    <Form onSubmit={handleSubmit}>
                        <HiViewGridAdd/>
                        <h1>add new tasks</h1>
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
            }
        </FormButtonBox>
    )
}