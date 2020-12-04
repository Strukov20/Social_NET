import React, {useState} from 'react';
import '../../Users/Users.scss';
import cn from "classnames";

export const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className="users__pagination">
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionNumber && p<= rightPortionPageNumber)
                .map(p => {
                return <span className={ cn({'users__pagination_selected' : currentPage === p})}
                             key={p}
                             onClick={(event) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}

            {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}
