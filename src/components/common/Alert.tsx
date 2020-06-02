// @flow
import * as React from 'react';
import {createRef, useContext} from 'react';
import AlertContext from "../../context/alert/AlertContext";
import CSSTransition from "react-transition-group/CSSTransition";


const Alert = () => {
    const wrapperRef = createRef<HTMLDivElement>()
    const {alert, alertMessage, alertOff} = useContext(AlertContext)

    const handleClose = async () => {
        alertOff()
    }
console.log(alert)
    return (
        <CSSTransition in={alert} timeout={1000} unmountOnExit classNames="alert">
            <div className={`alert alert-warning alert-dismissible`} role="alert">
                <strong>Warning!</strong> {alertMessage}
                <button onClick={handleClose} type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    );
};
export default Alert