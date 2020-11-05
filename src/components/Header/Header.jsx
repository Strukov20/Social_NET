import React from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/user_img.svg";
import logo from "../../assets/img/secondlogo.png"

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
                            <div className="app__login__block_login">{props.login} - <button onClick={props.logout}>Log Out</button> </div>
                        </div>

                    : <NavLink className="app__login__block_button" to={'/login'}>Log In</NavLink>}
            </div>
        </header>
    )
}

export default Header;