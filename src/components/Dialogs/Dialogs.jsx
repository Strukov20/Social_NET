import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm} from "redux-form";
import AddMessageForm from "../../forms/AddMessageForm";


const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map( dialog => <DialogItem  name={dialog.name} key={dialog.id} id={dialog.id}/> )
    const messagesElements = state.messages.map( message => <Message key={message.id} message={message} /> )

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageText)
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
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
