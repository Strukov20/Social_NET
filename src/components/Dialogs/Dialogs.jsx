import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map( dialog => <DialogItem  name={dialog.name} id={dialog.id}/> )

    const messagesElements = props.dialogsPage.messages.map( message => <Message message={message} /> )

    const newMessageElement = React.createRef();
    const addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let newWord = newMessageElement.current.value;
        props.updateNewMessageText(newWord);
    }

    return (
        <div className="dialogs">
            <div className="dialogs__wrapper">
                <div >
                    {dialogsElements}
                </div>
                <div className="vertical-line"></div>
                <div className="dialogs__mess-items">
                    {messagesElements}
                </div>
                <div className="dialogs__mess__sending">
                    <hr className="mess_hr"/>
                    <input onChange={onMessageChange} ref={newMessageElement}
                           value={props.newMessageText}
                           className="dialogs__mess__sending__input" type="text" placeholder="Enter message..."/>
                    <button onClick={addMessage} className="dialogs__mess__sending__button">Enter</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;