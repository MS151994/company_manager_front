import "./pageTitle.css";

interface Props {
    pageTitle: string;
    itemsLength: number | string;
}

export const PageTitle = (props: Props) => {
    return (
        <div className="page_title">
            <h1>{props.pageTitle} <span>({props.itemsLength.toString()} el.)</span></h1>
        </div>
    )
}