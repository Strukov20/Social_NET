import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        const action = UpdateNewPostTextActionCreator(newText)
        props.dispatch(action);
    }

    return (
        <div className="form">
            <hr className="hr"/>
            <div className="form__title">My Posts</div>
            <div className="form__wrapper">
                <input onChange={onPostChange} ref={newPostElement}
                       value={props.newPostText}  type="text" className="form__input" placeholder="Enter your news..."/>
                <button className="form__button" onClick={ addPost }>Add post</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts;