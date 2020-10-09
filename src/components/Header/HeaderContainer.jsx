import React, {Component} from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {toggleIsFetching, setAuthUserData} from "../../redux/auth-reducer";
import {Preloader} from "../common/preloader/Preloader";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                if (response.data.resultCode === 0) {
                    let {id,email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header
                {...this.props}
                profile={this.props.profile}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {setAuthUserData, toggleIsFetching})(HeaderContainer);