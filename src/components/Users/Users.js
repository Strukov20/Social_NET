import React from 'react';
import './Users.scss';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div className="users">
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         key={u.id} />
                    )
                }
            </div>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
        </div>
    )
}
