import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import {PageTitle} from "../commons/PageTitle/PageTitle";
import {UserEvaluationBox, UserPageContainer} from "../../const/layout/User.styles";
import {FaUserCog} from "react-icons/fa";
import {AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineUsergroupAdd} from "react-icons/ai";
import {SiStatuspal} from "react-icons/si";
import {MdOutlinePublishedWithChanges} from "react-icons/md";
import {Clock} from "../commons/Clock/Clock";
import {IoLogInOutline} from "react-icons/io5";
import {UserChangeStatus} from "../user/UserChangeStatus/UserChangeStatus";
import {UserChangePass} from "../user/UserChagePass/UserChangePass";
import {HiUserGroup} from "react-icons/hi";
import {ImStatsBars} from "react-icons/im";
import {AddNewUser} from "./AddNewUser/AddNewUser";
import {config} from "../config/config";
import {GetAllUsers} from "./GetAllUsers/GetAllUsers";

export const Admin = () => {
    const [cookie, setCookie, removeCookie] = useCookies<string>(['user', 'username']);
    const [changePassOpen, setChangePassOpen] = useState<boolean>(false)
    const [changeStatusOpen, setChangeStatusOpen] = useState<boolean>(false)
    const [addUser, setAddUser] = useState<boolean>(false)
    const [getAllUsers, setGetAllUsers] = useState<boolean>(false)
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
            <PageTitle pageTitle={'Admin panel'}/>
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
                    <div className={'box'} onClick={() => setAddUser(true)}>
                        <AiOutlineUsergroupAdd/>
                        <div>
                            <p>Add user</p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                    <div className={'box'} onClick={() => setGetAllUsers(true)}>
                        <HiUserGroup/>
                        <div>
                            <p>All user</p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                    <div className={'box'}>
                        <SiStatuspal/>
                        <div>
                            <p>user status</p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                    <div className={'box'}>
                        <ImStatsBars/>
                        <div>
                            <p>stats</p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
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
            {changeStatusOpen && <UserChangeStatus
                isOpen={setChangeStatusOpen}
                userId={cookie.user}
                status={user.userStatus}
                refreshData={getUserInfo}
            />}
            {changePassOpen &&
                <UserChangePass
                    isOpen={setChangePassOpen}
                    userId={cookie.user}
                    refreshData={getUserInfo}
                />}
            {addUser && <AddNewUser close={setAddUser}/>}
            {getAllUsers && <GetAllUsers close={setGetAllUsers}/>}
        </>
    )
}
