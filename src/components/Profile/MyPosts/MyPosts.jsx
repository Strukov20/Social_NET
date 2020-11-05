import React from 'react';
import Post from './Post/Post';
import {reduxForm} from "redux-form";
import AddNewPostForm from "../../../forms/AddNewPostForm";

const MyPosts = (props) => {
    const state = props.profilePage

    let postsElements = state.posts.map( post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);
    const newPostText = state.newPostText;

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className="form">
            <hr className="hr"/>
            <div className="form__title">My Posts</div>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div>
                { postsElements }
            </div>
        </div>

    )
}

const AddPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;