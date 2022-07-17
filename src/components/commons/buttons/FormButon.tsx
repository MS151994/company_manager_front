import {ButtonForm} from './FormButton.styles';
import {useColorMode} from "@chakra-ui/react";

interface Props {
    buttonName: string;
}

export const FormButton = (props: Props) => {
    const {colorMode} = useColorMode()
    return (
        <ButtonForm borderColor={colorMode}>{props.buttonName}</ButtonForm>
    )
}