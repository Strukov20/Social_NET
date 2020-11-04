import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field className="login_form_loginField" placeholder={"Login"} name={'login'} component={'input'}/></div>
            <div><Field className="login_form_passwordField" placeholder={"Password"} name={'password'} component={'input'}/></div>
            <div><Field className="login_form_checkbox" type="checkbox" component={'input'} name={'rememberMe'}/>Remember me</div>
            <div className="login_form_buttons">
                <button className="login_form_loginButton">Login</button>
                <button className="login_form_forgotButton">Forgot Password?</button>
            </div>

        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;