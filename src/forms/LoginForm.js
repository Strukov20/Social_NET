import React from 'react';
import {reduxForm} from "redux-form";
import {InputArea} from "../components/common/FormsControls/LoginFormControls";
import {required} from "../utils/validators/validators";
import {CreateField} from "../components/common/FormsControls/CreateField";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", 'email', [required], InputArea, {type: 'email'})}
            {CreateField("Password", 'password', [required], InputArea, {type: 'password'})}
            {CreateField('checkbox', 'rememberMe', null, 'input', {type: 'checkbox'}, 'rememberMe',  "login_form_checkbox")}
            { error &&
                <div className="login_form_error">
                    {error}
                </div>
            }
            <div className="login_form_buttons">
                <button className="login_form_loginButton">Login</button>
                <button className="login_form_forgotButton">Forgot Password?</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;
