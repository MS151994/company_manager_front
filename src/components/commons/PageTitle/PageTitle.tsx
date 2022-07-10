import "./pageTitle.css";

interface Props {
    pageTitle: string;
}

export const PageTitle = (props: Props) => {
    return (
        <div className="page_title">
            <h1>{props.pageTitle}</h1>
        </div>
    )
}