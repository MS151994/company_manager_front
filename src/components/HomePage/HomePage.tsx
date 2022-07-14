import {PageTitle} from "../commons/PageTitle/PageTitle";
import './homePage.css'
import {useEffect, useState} from "react";
import {config} from "../config/config";
import {useCookies} from "react-cookie";

export const HomePage = () => {

    const [data, setData] = useState({})
    const [cookie, setCookie] = useCookies(['user'])

    useEffect(() => {

        (async () => {

            try {
                const res = await fetch(`${config.api}/home/${cookie.user}`);
                const data = await res.json();
                await setData(data);
                console.log(data);
            } finally {

            }
        })();

    }, [])

    return (
        <>
            <PageTitle pageTitle={'home page'}/>
            <div className={'my_day'}>
                <p>my day</p>
            </div>
        </>
    )
}
