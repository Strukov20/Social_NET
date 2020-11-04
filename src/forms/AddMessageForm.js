import React from 'react'
import {Field} from "redux-form";

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

export default AddMessageForm;