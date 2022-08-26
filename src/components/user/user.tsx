import {useCookies} from "react-cookie";
import {UserEvaluationBox, UserPageContainer,} from "../../const/layout/User.styles";
import {PageTitle} from "../commons/PageTitle/PageTitle";
import {AiOutlineAppstoreAdd, AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineFall} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import {SiMicrosoftonenote, SiStatuspal} from "react-icons/si";
import {MdOutlinePublishedWithChanges, MdOutlineTaskAlt} from "react-icons/md";
import {useEffect, useState} from "react";
import {UserChangePass} from "./UserChagePass/UserChangePass";
import {FaUserCog} from "react-icons/fa";
import {IoLogInOutline} from "react-icons/io5";
import {Clock} from "../commons/Clock/Clock";
import {UserChangeStatus} from "./UserChangeStatus/UserChangeStatus";
import {config} from "../config/config";


export const User = () => {
    const [cookie, setCookie, removeCookie] = useCookies<string>(['user', 'username']);
    const [changePassOpen, setChangePassOpen] = useState<boolean>(false)
    const [changeStatusOpen, setChangeStatusOpen] = useState<boolean>(false)
    const [user, setUser] = useState({
        id: '',
        createdAt: '',
        userRole: '',
        userStatus: '',
        taskLength: '',
        notesLength: '',
        todosLength: '',
        archiveLength: ''
    })
    const dt = new Date(user.createdAt)

    const handleLogOut = () => {
        removeCookie('user');
        removeCookie('username');
        window.location.reload();
    }

    const getUserInfo = async () => {
        const res = await fetch(`${config.api}/user/${cookie.user}`)
        const data = await res.json()
        setUser(prevState => ({
            ...prevState,
            ...data,
        }))
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <>
            <PageTitle pageTitle={'User page'}/>
            <UserPageContainer>
                <div className={'userInfo'}>
                    <div>
                        <FaUserCog/>
                    </div>
                    <div>
                        <p>User name: <span>{cookie.username}</span></p>
                        <p>User status: {user.userStatus} </p>
                        <p className={'otherInfo'}>User role:<span className={'otherInfoSpan'}> {user.userRole}  </span>
                        </p>
                        <p className={'otherInfo'}>User status:<span
                            className={'otherInfoSpan'}> {dt.toLocaleDateString()}  </span></p>
                    </div>
                </div>
                <UserEvaluationBox>
                    <NavLink className={'box'} to={'/tasks'}>
                        <AiOutlineAppstoreAdd/>
                        <div>
                            <p>my task :</p>
                            <p> {user.taskLength} </p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <NavLink className={'box'} to={'/notes'}>
                        <SiMicrosoftonenote/>
                        <div>
                            <p>my note :</p>
                            <p> {user.notesLength}</p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <NavLink className={'box'} to={'/todos'}>
                        <MdOutlineTaskAlt/>
                        <div>
                            <p>my todo :</p>
                            <p> {user.todosLength} </p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <NavLink className={'box'} to={'/archive'}>
                        <AiOutlineFall/>
                        <div>
                            <p>archive :</p>
                            <p>{user.archiveLength} </p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <div className={'box'} onClick={() => setChangeStatusOpen(true)}>
                        <SiStatuspal/>
                        <p>Change status</p>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                    <div className="box" onClick={() => setChangePassOpen(true)}>
                        <MdOutlinePublishedWithChanges/>
                        <p>Change password</p>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                    <div className="box">
                        <AiOutlineClockCircle/>
                        <Clock/>
                    </div>
                    <div className="box" onClick={handleLogOut}>
                        <IoLogInOutline/>
                        <p>Log Out</p>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                </UserEvaluationBox>
            </UserPageContainer>
            {changeStatusOpen &&
                <UserChangeStatus
                    isOpen={setChangeStatusOpen}
                    userId={cookie.user}
                    status={user.userStatus}
                    refreshData={getUserInfo}/>}
            {changePassOpen &&
                <UserChangePass
                    isOpen={setChangePassOpen}
                    userId={cookie.user}
                    refreshData={getUserInfo}
                />}
        </>
    )
}