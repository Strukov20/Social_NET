import React from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/user_img.svg";

const Header = (props) => {
    debugger;
    return (
        <header className="app__header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png" className="app__logo" alt="logo" />
            <div className="app__login__block">
                {props.isAuth
                    ?  <div className="app__login__block_wrapper">
                            <img className="app__login__block_img" src={userPhoto} />
                            <div className="app__login__block_login">{props.login}</div>
                        </div>

                    : <NavLink className="app__login__block_button" to={'/login'}>Log In</NavLink>}
            </div>
        </header>
    )
}

export default Header;