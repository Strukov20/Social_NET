import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    const state = props.store.getState().dialogsPage;

    const dialogsElements = state.dialogs.map( dialog => <DialogItem  name={dialog.name} id={dialog.id}/> )

    const messagesElements = state.messages.map( message => <Message message={message} /> )

    const newMessageText = state.newMessageText;


    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let newWord = e.target.value;
        props.store.dispatch(UpdateNewMessageTextActionCreator(newWord));
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
                    <button onClick={addMessage} className="dialogs__mess__sending__button">Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;