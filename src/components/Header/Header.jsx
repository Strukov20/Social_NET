import React from 'react';
import './Header.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="app__header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/863px-Apple_logo_black.svg.png" className="app__logo" alt="logo" />
            <div className="app__login__block">
                {props.isAuth
                    ?
                        <div className="app__login__block_wrapper">
                            <div className="app__login__block_login">{props.login}</div>
                            <img className="app__login__block_img"   />
                        </div>

                    : <NavLink className="app__login__block_button" to={'/login'}>Log In</NavLink>}
            </div>
        </header>
    )
}

export default Header;