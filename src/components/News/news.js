import React from "react";
import {NewsItem} from "./newsItem";

export const News = (props) => {

    const newsItem = props.state.news.map(post => <NewsItem img={post.img} text={post.text}/>)

    return(
        <div className="news__wrapper">
            <div className="news__navbar__items">
                <button className="news__navbar__item">Actual</button>
                <button className="news__navbar__item">All</button>
            </div>
            <div className="news__items">
                {newsItem}
            </div>
        </div>
    )
}