import React from 'react';
import userPhoto from "../../assets/img/user_img.svg";
import './Users.scss';
import {NavLink} from "react-router-dom";

export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className="users">
            {
                props.users.map(u => <div className="users__wrapper" key={u.id}>
                        <div className="users__item">
                            <div className="users__avatar">
                                <div className="users__avatar__wrapper">
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className="users__avatar__img"
                                             src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} className="users__button"
                                                  onClick={() => {props.unfollow(u.id)}}> Unfollow </button>

                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} className="users__button_follow"
                                                  onClick={() => {props.follow(u.id)}}> Follow </button>
                                    }
                                </div>
                            </div>
                            <div className="users__info">
                                <div>
                                    <div className="users__info__fullName">{u.name}</div>
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
                    </div>
                )
            }
            <div className="users__pagination">
                {pages.map(p => {
                    return <span className={props.currentPage === p && "users__pagination_selected"}
                                 onClick={(event) => {
                                     props.onPageChanged(p);
                                     debugger;
                                 }}>{p}</span>
                })}
            </div>
            {/*<div className="users__butWrap">*/}
            {/*    <button className="users__butWrap__showMoreBut">Show More</button>*/}
            {/*</div>*/}
        </div>
    )
}