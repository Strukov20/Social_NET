import React from 'react';
import {CreateField} from "../../common/FormsControls/CreateField";
import {InputArea} from "../../common/FormsControls/LoginFormControls";
import {reduxForm} from "redux-form";
import "../../Login/loginForm.scss";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className="user__data">
            <div><button>SAVE</button></div>
            { error &&
            <div className="login_form_error">{error}</div>
            }
            <div className="user__title_edit">
                <b>Full Name:</b>&nbsp;
                    {CreateField(" Set full name", "fullName", [], InputArea)}
            </div>
            <div className="user__title_edit">
                <b>Looking For A Job:</b>&nbsp;
                    {CreateField(null, "lookingForAJob", [], "Input", {type: 'checkbox'})}
            </div>
            <div className="user__title_edit">
                <b>My skills:</b>&nbsp;
                    {CreateField("Your skills", "lookingForAJobDescription", [], InputArea)}
            </div>
            <div className="user__title_edit">
                <b>About Me:</b>&nbsp;
                    {CreateField("aboutMe", "aboutMe", [], InputArea)}
            </div>
            <div className="user__title">
                <b>Contacts</b>&nbsp;{Object.keys(profile.contacts).map(key => {
                return <div key={key} >
                    <b className="user__title_edit_contacts">{key}: {CreateField(key, "contacts." + key, [], InputArea)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm;
