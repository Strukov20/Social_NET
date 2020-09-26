import React from 'react';

export const NewsItem = (props) => {
    return (
        <div className="news__item">
            <p>{props.text}</p>
            <img src={props.img} alt="img"/>
        </div>
    )
}