import React from "react";
import classNames from 'classnames';

export const InputArea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <input {...input} {...props} className={classNames("dialogs__mess__sending__input", {"form__input_error" : hasError})}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}