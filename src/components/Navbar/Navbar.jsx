import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__items">
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/profile">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3237/3237447.svg" alt="Profile"/>Profile</NavLink>
                </div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/users">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3237/3237505.svg" alt="Users"/>Users</NavLink>
                </div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/dialogs">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3237/3237517.svg" alt="Dialogs"/>Dialogs</NavLink>
                </div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/news">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3635/3635763.svg" alt="News"/>News</NavLink>
                </div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/audio">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3700/3700464.svg" alt="Music"/>Music</NavLink>
                </div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/friends">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3635/3635431.svg" alt="Sidebar"/>Sidebar</NavLink>
                </div>
                <hr className="nav__hr"/>
                <div className="nav__item_last"><NavLink activeClassName="activeLink" to="/settings">
                    <img className="icon" src="https://www.flaticon.com/svg/static/icons/svg/3237/3237412.svg" alt="Settings"/>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;