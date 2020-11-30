import React from 'react';
import {Field} from "redux-form";

export const CreateField = (placeholder,
                            name,
                            validators,
                            component,
                            props = {},
                            text = "",
                            styles = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
               className={styles}/>{text}
    </div>
)

