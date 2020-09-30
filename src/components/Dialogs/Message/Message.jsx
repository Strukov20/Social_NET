import React from 'react';
import classNames from 'classnames';

const Message = (props) => {

    return (

        <div className={classNames("dialogs__mess__wrapper", {'dialogs__mess__wrapper__me': props.message.isMe})}>
            <img className="dialogs__mess__img" src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg" alt="UserPhoto"/>
            <div className={classNames("dialogs__mess-item", {"dialogs__mess-item__me": props.message.isMe})}>{props.message.message}</div>
        </div>
    )
}

export default Message;