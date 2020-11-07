import React from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/user_img.svg";
import logo from "../../assets/img/secondlogo.png"
import logout from "../../assets/img/logout.svg"
import login from "../../assets/img/login.svg"

const Header = (props) => {
    return (
        <header className="app__header">
            <img src={logo}
                 className="app__logo"
                 alt="logo"
            />
            <div className="app__login__block">
                {props.isAuth
                    ?  <div className="app__login__block_wrapper">
                            <img className="app__login__block_img" src={userPhoto} />
                            <div className="app__login__block_login">{props.login}</div>
                            <img onClick={props.logout} src={logout} alt="logout" className='logoutButton'/>
                        </div>

                    : <NavLink to={'/login'}><img onClick={props.logout} src={login} alt="login" className="app__login__block_button"/></NavLink>}
            </div>
        </header>
    )
}

export default Header;