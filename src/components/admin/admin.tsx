import {useCookies} from "react-cookie";
import {useState} from "react";
import {PageTitle} from "../commons/PageTitle/PageTitle";
import {UserEvaluationBox, UserInfoBox, UserPageContainer} from "../../const/layout/User.styles";
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

export const Admin = () => {
    const [cookie, setCookie, removeCookie] = useCookies<string>(['user', 'username']);
    const [changePassOpen, setChangePassOpen] = useState<boolean>(false)
    const [changeStatusOpen, setChangeStatusOpen] = useState<boolean>(false)
    const [addUser, setAddUser] = useState<boolean>(false);

    const handleLogOut = () => {
        removeCookie('user');
        removeCookie('username');
        window.location.reload();
    }

    return (
        <>
            <PageTitle pageTitle={'Admin panel'}/>
            <UserPageContainer>
                <div>
                    <FaUserCog/>
                </div>
                <UserInfoBox>
                    <p>User name: <span>{cookie.username}</span></p>
                </UserInfoBox>
                <UserEvaluationBox>
                    <div className={'box'} onClick={() => setAddUser(true)}>
                        <AiOutlineUsergroupAdd/>
                        <div>
                            <p>Add user</p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </div>
                    <div className={'box'}>
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
            {changeStatusOpen && <UserChangeStatus isOpen={setChangeStatusOpen} userId={cookie.user}
                                                   refreshData={() => console.log('ok')}/>}
            {changePassOpen && <UserChangePass isActive={setChangePassOpen} userId={cookie.user}/>}
            {addUser && <AddNewUser close={setAddUser}/>}
        </>
    )
}
