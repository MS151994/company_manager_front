import {PageName} from './PageTitle.styles';

interface Props {
    pageTitle: string;
    itemsLength?: number;
}

export const PageTitle = ({itemsLength: elementLength, pageTitle}: Props) => {

    return (
        <PageName>
            <h1>
                {pageTitle}
                {elementLength !== undefined
                    ? <span>active: {elementLength.toString()} el</span>
                    : null
                }
            </h1>
        </PageName>
    )
}