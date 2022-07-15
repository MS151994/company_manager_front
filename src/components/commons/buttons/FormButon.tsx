import './buttons.css'

interface Props {
    buttonName: string;
}


export const FormButton = (props: Props) => {
    return (
        <button className={'form__button'}>{props.buttonName}</button>
    )
}