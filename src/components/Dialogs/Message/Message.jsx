import React from 'react';
import classNames from 'classnames';

const Message = (props) => {
    console.log(props)
    return (

        <div className={classNames("dialogs__mess__wrapper", {'dialogs__mess__wrapper__me': props.message.isMe})}>
            <img className="dialogs__mess__img" src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg" alt="UserPhoto"/>
            <div className="dialogs__mess-item">{props.message.message}</div>
        </div>
    )
}

export default Message;