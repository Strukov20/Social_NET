import React from 'react';
import userPhoto from "../../assets/img/user_img.svg";
import './Users.scss';
import {NavLink} from "react-router-dom";

export const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className="users__item">
            <div className="users__avatar">
                <div className="users__avatar__wrapper">
                    <NavLink to={'/profile/' + user.id}>
                        <img className="users__avatar__img" alt='img'
                             src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} className="users__button"
                                  onClick={() => {unfollow(user.id)}}> Unfollow </button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} className="users__button_follow"
                                  onClick={() => {follow(user.id)}}> Follow </button>
                    }
                </div>
            </div>
            <div className="users__info">
                <div>
                    <div className="users__info__fullName">{user.name}</div>
                    <div className="users__info__status">How are you?</div>
                </div>
            </div>
            <div className="users__locate">
                <div>
                    <div className="users__locate_country">Ukraine</div>
                    <div className="users__locate_city">Kiev</div>
                </div>
            </div>
        </div>
    )
}
