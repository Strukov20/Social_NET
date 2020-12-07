import React from 'react';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return (
        <div className="user__data">
            {isOwner && <div><button onClick={goToEditMode}>EDIT</button></div>}
            <div>
                <b className="user__name">{profile.fullName.toUpperCase()}</b>
            </div>
            <div className="user__title">
                <b>Looking For A Job:</b>&nbsp;{profile.lookingForAJob ? "YES" : "NO"}
            </div>
            {
                profile.lookingForAJob &&
                <div className="user__title">
                    <b>My skills:</b>&nbsp;{profile.lookingForAJobDescription || 'No information available'}
                </div>
            }
            <div className="user__title">
                <b>About Me:</b>&nbsp;{profile.aboutMe || 'No information available'}
            </div>
            <div className="user__title">
                <b>Contacts</b>&nbsp;{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key] || 'No information available'}/>
            })}
            </div>
            <div className="user__title">
                <div className="user__status">
                    <b>Status: &nbsp;</b>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className="user__contacts"><b>{contactTitle}: </b>{contactValue}</div>
}
