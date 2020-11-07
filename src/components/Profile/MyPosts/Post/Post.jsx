import React from 'react';

const Post = (props) => {
    return (
        <div className="posts">
            <div className="posts__items">
                <div className="posts__item">
                    <img src="https://www.pngkey.com/png/full/353-3534482_avatar-portfolio-02-avatar-sketch-cartoon-avatar.png" className="posts__img" alt="avatar"/>
                    <div className="posts__title">{props.message}</div>
                    <div className="posts__like"><span className="posts__like_span"><img src="https://www.flaticon.com/svg/static/icons/svg/1029/1029183.svg" alt="like"/> {props.likesCount}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Post;