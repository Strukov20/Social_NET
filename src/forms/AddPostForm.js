import React from 'react';
import {Field, reduxForm} from "redux-form";
import '../components/Profile/Profile.scss';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form__wrapper">
            <div>
                <Field
                    component={"input"}
                    placeholder="Enter your news..."
                    name="newPostText"
                    className="form__input"
                />
            </div>
            <div >
                <button className="form__button">Add post</button>
            </div>
        </form>
    )
}


export default AddPostForm;