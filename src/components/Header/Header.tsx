import {useCookies} from "react-cookie";
import {useState} from "react";
import {useColorMode} from "@chakra-ui/react";
import {Menu} from "../Menu/Menu";
import {LoggedUserInfo, LogOutButton, NavigationBar, UserInfoBox} from "./Header.styles";
import {DarkModeSwitch} from "react-toggle-dark-mode";

export const Header = () => {
    const [cookie, setCookie, removeCookie] = useCookies(['user', 'username']);
    const [isDarkMode, setDarkMode] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();

    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
        toggleColorMode();
    };
    const handleLogOut = () => {
        removeCookie('user');
        removeCookie('username');
        window.location.reload();
    }

    return (
        <NavigationBar>
            <Menu/>
            <UserInfoBox>
                <DarkModeSwitch
                    style={{margin: '5px'}}
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={20}
                    moonColor={'black'}
                    sunColor={'white'}
                />
                <LoggedUserInfo>
                    Welcome,
                    <span>{cookie.username}</span>
                </LoggedUserInfo>
                <LogOutButton
                    borderColor={colorMode}
                    onClick={handleLogOut}>
                    log out
                </LogOutButton>
            </UserInfoBox>
        </NavigationBar>
    )
}