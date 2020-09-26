import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__items">
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/profile">Profile</NavLink></div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/friends">Friends</NavLink></div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/dialogs">Dialogs</NavLink></div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/news">News</NavLink></div>
                <div className="nav__item"><NavLink activeClassName="activeLink" to="/audio">Music</NavLink></div>
                <hr className="nav__hr"/>
                <div className="nav__item_last"><NavLink activeClassName="activeLink" to="/settings">Settings</NavLink></div>


            </div>
        </nav>
    )
}

export default Navbar;