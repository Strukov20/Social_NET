import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText)
    }

    return (
        <div className="form">
            <hr className="hr"/>
            <div className="form__title">My Posts</div>
            <div className="form__wrapper">
                <input onChange={onPostChange} ref={newPostElement}
                       value={props.newPostText}  type="text" className="form__input" placeholder="Enter your news..."/>
                <button className="form__button" onClick={ onAddPost }>Add post</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>

    )
}

export default MyPosts;