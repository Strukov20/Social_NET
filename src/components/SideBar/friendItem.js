import {NavLink} from "react-router-dom";
import React from "react";
import classNames from 'classnames';

export const FriendItem = (props) => {

    const path = '/friends/' + props.id;

    return (
        <div className="sidebar__item">
            <NavLink className="sidebar__item__url"  to={path}>
                <img className={classNames("sidebar__item__img",{"sidebar__item__img__online": props.online})} src={props.img} alt="Avatar"/>
                <div className="sidebar__item__name"> {props.name} </div>
                <div className="sidebar__item__name"> {props.surname} </div>
            </NavLink>
        </div>
    )

}

