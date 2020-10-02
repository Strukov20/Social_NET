import React from "react";
import {NewsItem} from "./newsItem";

const initialState = {
    news: [
        {   id: "1",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        },
        {   id: "2",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-cloudscape-canvas-pixabay.jpg"
        },
        {   id: "3",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://afishanovgorod.ru/wp-content/uploads/2019/09/maxresdefault.jpg"
        },
        {   id: "4",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Barn-DPSexample.jpg?resize=717%2C478&ssl=1"
        },
        {   id: "5",
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
            img: "https://cdn.pixabay.com/photo/2019/09/03/13/17/landscape-4449414_960_720.jpg"
        },
    ]
}

const News = (props) => {
    console.log(props)
    const newsItem = initialState.news.map(post => <NewsItem img={post.img} text={post.text}/>)


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

export default News;