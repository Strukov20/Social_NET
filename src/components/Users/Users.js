import React from 'react';
import './Users.scss';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: "1",
                    fullName: 'Bohdan Reddy',
                    followed: false,
                    photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
                    status: 'Hi, how are you?',
                    location: {country: 'Ukraine', city: 'Kiev'}
                },
                { id: "2",
                    fullName: 'Bohdan Reddy',
                    followed: true,
                    photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
                    status: 'It`s our new program! Hey!',
                    location: {country: 'Polish', city: 'Gdansk'}
                },
                { id: "3",
                    fullName: 'Bohdan Reddy',
                    followed: false,
                    photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
                    status: 'Hi, good job!',
                    location: {country: 'Slovakia', city: 'Bratislava'}
                },
                { id: "4",
                    fullName: 'Bohdan Reddy',
                    followed: true,
                    photoUrl: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
                    status: 'Hey, why nobody love me?',
                    location: {country: 'Belarus', city: 'Minsk'}
                }
            ]
        )
    }


    return (
        <div>
            {
                props.users.map(u => <div className="users__wrapper" key={u.id}>
                    <div className="users__item">
                        <div>
                            <div className="users__avatar__wrapper">
                                <img className="users__avatar" src={u.photoUrl} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}} > Unfollow </button>
                                    : <button onClick={() => {props.follow(u.id)}} > Follow </button>
                                }

                            </div>
                        </div>
                        <div className="users__info">
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                        </div>
                        <div className="users__locate">
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
 export default Users;