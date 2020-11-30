import React from 'react';
import '../../Users/Users.scss';

export const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
            <div className="users__pagination">
                {pages.map(p => {
                    return <span className={currentPage === p && "users__pagination_selected"}
                                 onClick={(event) => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            </div>
    )
}
