import {NavLink} from "react-router-dom";
import React from "react";

export const FriendItem = (props) => {

    const path = '/friends/' + props.id;

    return (
        <div className="sidebar__item">
            <NavLink className="sidebar__item__url"  to={path}>
                <img className="sidebar__item__img" src={props.img} alt="Avatar"/>
                <div className="sidebar__item__name"> {props.name} </div>
                <div className="sidebar__item__name"> {props.surname} </div>
            </NavLink>
        </div>
    )

}

