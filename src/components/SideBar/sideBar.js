import React from "react";
import {FriendItem} from "./friendItem";
import './Sidebar.scss'

const initialState = {
    sideBar: [
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "1", name: 'Alex', surname: 'Buriy', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "2", name: 'Bohdan', surname: 'Strukov' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "3", name: 'Vlad', surname: 'Halas', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "4", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "5", name: 'Bohdan', surname: 'Strukov', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "6", name: 'Vlad', surname: 'Halas', online: true  },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "7", name: 'Alex', surname: 'Buriy', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "8", name: 'Bohdan', surname: 'Strukov' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "9", name: 'Vlad', surname: 'Halas', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "10", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "11", name: 'Bohdan', surname: 'Strukov', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "12", name: 'Vlad', surname: 'Halas' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "13", name: 'Alex', surname: 'Buriy', online: true },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "14", name: 'Bohdan', surname: 'Strukov', online: true  }
    ]
}

export const SideBar = () => {

    const friendsElements = initialState.sideBar.map(src => <FriendItem name={src.name} surname={src.surname} img={src.img} online={src.online} />)



    return(
        <div className="sidebar">
            <div className="sidebar__title">Friends</div>
            <div className="sidebar__items">
                {friendsElements}
            </div>
        </div>
    )
}