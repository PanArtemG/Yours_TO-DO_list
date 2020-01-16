import React, {useState, useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/fireaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.showAlert('Note created', 'success')
            }).catch(() => {
                alert.showAlert('Something went wrong', 'danger')
            })
            setValue('')
        } else {
            alert.showAlert("Enter a note title")
        }
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter a note name'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    );
};
