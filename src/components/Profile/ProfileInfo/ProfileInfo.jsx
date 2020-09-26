import React from 'react';

const ProfileInfo = () => {
    return (
        <div className="profile">
            <div className="profile__img">
                <img src="https://www.pngkey.com/png/full/353-3534482_avatar-portfolio-02-avatar-sketch-cartoon-avatar.png" className="profile__avatar" alt="profile-img"/>
            </div>


            <div className="user__data">
                <div>
                    <a className="user__name" href="profile">&nbsp;Bohdan Strukov</a>
                </div>
                <div className="user__title">Date of Birth:
                    <a className="user__item" href="user__data">&nbsp;20 June</a>
                </div>
                <div className="user__title">City:
                    <a className="user__item" target="_blank" href="https://uk.wikipedia.org/wiki/%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4">&nbsp;Uzhorod</a>
                </div>
                <div className="user__title">Education:
                    <a className="user__item" target="_blank" href="https://www.uzhnu.edu.ua/">&nbsp;UzhNU</a>
                </div>
                <div className="user__title">Web-Site:
                    <a className="user__item" target="_blank" href="https://github.com/Strukov20">&nbsp;GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;