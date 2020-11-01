import React from 'react';
import {Preloader} from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/img/avatar.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="profile">
            <div className="profile__img">
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} className="profile__avatar" alt="profile-img"/>
            </div>


            <div className="user__data">
                <div>
                    <a className="user__name" href="profile">&nbsp;{props.profile.fullName.toUpperCase()}</a>
                </div>
                <div className="user__title">About ME:
                    <a className="user__item" href="user__data">&nbsp;{props.profile.aboutMe !== null ? props.profile.aboutMe : 'No information available'}</a>
                </div>
                <div className="user__title">Work:
                    <a className="user__item" href="https://uk.wikipedia.org/wiki/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4">&nbsp;{props.profile.lookingForAJobDescription !== null ? props.profile.lookingForAJobDescription : 'No information available'}</a>
                </div>
                <div className="user__title">Instagram:
                    <a className="user__item" href="https://www.uzhnu.edu.ua/">&nbsp;{props.profile.contacts.instagram !== null ? props.profile.contacts.instagram : 'No information available'}</a>
                </div>
                <div className="user__title">Web-Site:
                    <a className="user__item" href="https://github.com/Strukov20">&nbsp;{props.profile.contacts.github !== null ? props.profile.contacts.github : 'No information available'}</a>
                </div>
                <div className="user__title">Status:
                    <ProfileStatus className="profile_status_wrapper" status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;