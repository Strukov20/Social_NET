import React from 'react';
import {Field} from "redux-form";
import '../components/Profile/Profile.scss';
import {maxLengthCreator, required} from "../utils/validators/validators";
import {InputArea} from "../components/common/FormsControls/ProfileFormControls";

const maxLength10 = maxLengthCreator(30)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="form__wrapper">
            <div>
                <Field
                    component={InputArea}
                    placeholder="Enter your news..."
                    name="newPostText"
                    validate={[required, maxLength10]}
                />
            </div>
            <div >
                <button className="form__button">Add post</button>
            </div>
        </form>
    )
}


export default AddNewPostForm;