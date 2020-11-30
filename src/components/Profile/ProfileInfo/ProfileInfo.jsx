import React from 'react';
import {Preloader} from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/img/avatar.svg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Preloader/>
    }
    return (
        <div className="profile">
            <div className="profile__img">
                <img src={profile.photos.large !== null ? profile.photos.large : userPhoto} className="profile__avatar" alt="profile-img"/>
            </div>
            <div className="user__data">
                <div>
                    <a className="user__name" href="profile">&nbsp;{profile.fullName.toUpperCase()}</a>
                </div>
                <div className="user__title">About ME:
                    <a className="user__item" href="user__data">&nbsp;{profile.aboutMe !== null ? profile.aboutMe : 'No information available'}</a>
                </div>
                <div className="user__title">Work:
                    <a className="user__item" href="https://uk.wikipedia.org/wiki/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4">&nbsp;{profile.lookingForAJobDescription !== null ? profile.lookingForAJobDescription : 'No information available'}</a>
                </div>
                <div className="user__title">Instagram:
                    <a className="user__item" href="https://www.uzhnu.edu.ua/">&nbsp;{profile.contacts.instagram !== null ? profile.contacts.instagram : 'No information available'}</a>
                </div>
                <div className="user__title">Web-Site:
                    <a className="user__item" href="https://github.com/Strukov20">&nbsp;{profile.contacts.github !== null ? profile.contacts.github : 'No information available'}</a>
                </div>
                <div className="user__title">Status:
                    <ProfileStatusWithHooks className="profile_status_wrapper" status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;
