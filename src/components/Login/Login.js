import React from 'react';
import LoginReduxForm from "../../forms/LoginForm";
import './loginForm.scss'

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className="login_form">
            <h1 className="login_form_title">AUTH</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;