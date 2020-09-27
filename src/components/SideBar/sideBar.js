import React from "react";
import {FriendItem} from "./friendItem";

export const SideBar = (props) => {

    const friendsElements = props.state.sideBar.map(src => <FriendItem name={src.name} surname={src.surname} img={src.img} online={src.online} />)



    return(
        <div className="sidebar">
            <div className="sidebar__title">Friends</div>
            <div className="sidebar__items">
                {friendsElements}
            </div>
        </div>
    )
}