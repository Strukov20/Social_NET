import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11898;
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);