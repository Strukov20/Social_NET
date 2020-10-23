import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map( dialog => <DialogItem  name={dialog.name} key={dialog.id} id={dialog.id}/> )
    const messagesElements = state.messages.map( message => <Message key={message.id} message={message} /> )
    const newMessageText = state.newMessageText;


    const OnSendMessageClick = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let newWord = e.target.value;
        props.UpdateNewMessageText(newWord);
    }

    return (
        <div className="dialogs">
            <div className="dialogs__wrapper">
                <div >
                    {dialogsElements}
                </div>
                <div className="vertical-line"> </div>
                <div className="dialogs__mess-items">
                    {messagesElements}
                </div>
                <div className="dialogs__mess__sending">
                    <hr className="mess_hr"/>
                    <input onChange={onMessageChange}
                           value={newMessageText}
                           className="dialogs__mess__sending__input" type="text" placeholder="Enter message..."/>
                    <button onClick={OnSendMessageClick} className="dialogs__mess__sending__button">Send</button>
                </div>
            </div>
        </div>
    )
}



export default Dialogs;