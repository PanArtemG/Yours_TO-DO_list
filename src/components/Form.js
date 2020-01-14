import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)


    const submitHandler = event => {
        event.preventDefault()

        alert.showAlert(value, 'success')

    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter a note name'
                    value={value}
                    onChange={ e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};
