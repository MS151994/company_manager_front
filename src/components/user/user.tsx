import {useCookies} from "react-cookie";
import {UserEvaluationBox, UserInfoBox, UserPageContainer,} from "../../const/layout/User.styles";
import {PageTitle} from "../commons/PageTitle/PageTitle";
import {AiOutlineAppstoreAdd, AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineFall} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import {SiMicrosoftonenote, SiStatuspal} from "react-icons/si";
import {MdOutlinePublishedWithChanges, MdOutlineTaskAlt} from "react-icons/md";
import {useState} from "react";
import {UserChangePass} from "./UserChagePass/UserChangePass";
import {FaUserCog} from "react-icons/fa";
import {IoLogInOutline} from "react-icons/io5";
import {Clock} from "../commons/Clock/Clock";
import {UserChangeStatus} from "./UserChangeStatus/UserChangeStatus";


export const User = () => {
    const [cookie, setCookie, removeCookie] = useCookies<string>(['user', 'username']);
    const [changePassOpen, setChangePassOpen] = useState<boolean>(false)
    const [changeStatusOpen, setChangeStatusOpen] = useState<boolean>(false)

    const handleLogOut = () => {
        removeCookie('user');
        removeCookie('username');
        window.location.reload();
    }

    return (
        <>
            <PageTitle pageTitle={'User page'}/>
            <UserPageContainer>
                <div>
                    <FaUserCog/>
                </div>
                <UserInfoBox>
                    <p>User name: <span>{cookie.username}</span></p>
                </UserInfoBox>
                <UserEvaluationBox>
                    <NavLink className={'box'} to={'/tasks'}>
                        <AiOutlineAppstoreAdd/>
                        <div>
                            <p>my task :</p>
                            <p> 5 </p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <NavLink className={'box'} to={'/notes'}>
                        <SiMicrosoftonenote/>
                        <div>
                            <p>my note :</p>
                            <p> 11 </p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <NavLink className={'box'} to={'/todos'}>
                        <MdOutlineTaskAlt/>
                        <div>
                            <p>my todo :</p>
                            <p> 6 </p>
                        </div>
                        <AiOutlineArrowRight className={'arrow'}/>
                    </NavLink>
                    <NavLink className={'box'} to={'/archive'}>
                        <AiOutlineFall/>
                        <div>
                            <p>all :</p>
                            <p> 23 </p>
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
            {changeStatusOpen && <UserChangeStatus isOpen={setChangeStatusOpen} userId={cookie.user}/>}
            {changePassOpen && <UserChangePass isActive={setChangePassOpen} userId={cookie.user}/>}
        </>
    )
}