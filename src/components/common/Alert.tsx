// @flow
import * as React from 'react';
import {createRef, useContext} from 'react';
import AlertContext from "../../context/alert/AlertContext";


const Alert = () => {
    const wrapperRef = createRef<HTMLDivElement>()
    const {alert, alertMessage, alertOff} = useContext(AlertContext)

    const handleClose = async () => {
        const wrapper = wrapperRef.current;
        wrapper?.classList.replace('open-alert', 'close-alert')
        await setTimeout(()=> {alertOff()},1000)
    }

    return (
        <div ref={wrapperRef} className={`alert alert-warning alert-dismissible fade show 
        ${alert?"open-alert":"invisible position-absolute"}`} role="alert">
            <strong>Warning!</strong> {alertMessage}
            <button onClick={handleClose} type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};
export default Alert