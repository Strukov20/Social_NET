import React from 'react'
import {Field} from "redux-form";
import {InputArea} from "../components/common/FormsControls/MessageFormControls";
import {maxLengthCreator, required} from "../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className="dialogs__mess__sending">
            {/*<hr className="mess_hr"/>*/}
            <div>
                <Field component={InputArea}
                       placeholder='Enter your message'
                       name="newMessageText"
                       className="dialogs__mess__sending__input"
                       validate={[required, maxLength50]}
                />
            </div>
            <div><button className="dialogs__mess__sending__button">Send</button></div>
        </form>
    )
}

export default AddMessageForm;