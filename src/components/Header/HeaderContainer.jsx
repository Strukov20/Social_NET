import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {Preloader} from "../common/preloader/Preloader";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthUserData();
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
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {getAuthUserData, logout })(HeaderContainer);