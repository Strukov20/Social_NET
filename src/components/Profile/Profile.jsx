import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import './Profile.scss'

const Profile = () => {

    return (
        <div className="content">
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;