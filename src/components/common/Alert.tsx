// @flow
import * as React from 'react';
import {useContext} from 'react';
import AlertContext from "../../context/alert/AlertContext";


const Alert = () => {
    const {alert,alertMessage, alertOff} = useContext(AlertContext)
    if(!alert) return null
    return (
        <div className={`alert alert-warning alert-dismissible fade show ${alert&&"my-effect"}`} role="alert">
            <strong>Warning!</strong> {alertMessage}
            <button onClick={()=>alertOff} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};
export default Alert