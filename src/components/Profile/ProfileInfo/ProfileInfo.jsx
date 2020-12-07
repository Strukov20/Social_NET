import React, {useState} from 'react';
import {Preloader} from "../../common/preloader/Preloader";
import userPhoto from "../../../assets/img/avatar.svg";
import {ProfileData} from "./ProfileData";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if(!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className="profile">
            <div className="profile__img">
                <img src={profile.photos.large || userPhoto} className="profile__avatar" alt="profile-img"/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            {editMode
                ? <ProfileDataReduxForm profile={profile}
                                        initialValues={profile}
                                        onSubmit={onSubmit}/>
                : <ProfileData profile={profile}
                               isOwner={isOwner}
                               goToEditMode={()=>{setEditMode(true)}}
                               status={status}
                               updateStatus={updateStatus}
                />
            }
        </div>
    )
}


export default ProfileInfo;
