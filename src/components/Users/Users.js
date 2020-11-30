import React from 'react';
import './Users.scss';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className="users">
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                                     key={u.id} />
                                     )
            }
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
    )
}
