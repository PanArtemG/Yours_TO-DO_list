import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hideAlert} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }
    return (

        <div className={`alert alert-${alert.type || 'warning'}`} role="alert">
            <strong>Alert!</strong>
            &nbsp;{alert.message}
            <button onClick={hideAlert} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default Alert;