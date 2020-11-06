import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InputArea} from "../components/common/FormsControls/LoginFormControls";
import {required} from "../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name='email'
                    type="email"
                    component={InputArea}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name='password'
                    type="password"
                    component={InputArea}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    className="login_form_checkbox"
                    type="checkbox"
                    component={'input'}
                    name={'rememberMe'}
                />Remember me
            </div>
            { props.error &&
                <div className="login_form_error">
                    {props.error}
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