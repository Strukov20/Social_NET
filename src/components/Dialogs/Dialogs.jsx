import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsElements = state.dialogs.map( dialog => <DialogItem  name={dialog.name} key={dialog.id} id={dialog.id}/> )
    const messagesElements = state.messages.map( message => <Message key={message.id} message={message} /> )
    const newMessageText = state.newMessageText;

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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="dialogs__mess__sending">
            {/*<hr className="mess_hr"/>*/}
            <div>
                <Field component={"input"} placeholder='Enter your message' name="newMessageText"
                       className="dialogs__mess__sending__input"/>
            </div>
            <div><button className="dialogs__mess__sending__button">Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;