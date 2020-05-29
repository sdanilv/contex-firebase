import React, {FC, useReducer} from 'react'
import AlertContext from "./AlertContext"
import {alertReducer} from "./AlertReducer";
import {ALERT_OFF, ALERT_ON} from "../ActionsType";



const AlertState: FC =  ({children}) => {

    const initializerArg = {alert: false, message: ""};
    const [state, dispatch] = useReducer(alertReducer, initializerArg)
    const alertOn= (message:string) =>{
        dispatch({type: ALERT_ON, message})
    }
    const alertOff = () => {
        dispatch({type: ALERT_OFF})
    }
    return (
        <AlertContext.Provider value={{ alertOn, alertOff, alert: state.alert, alertMessage:state.message } }>
            {children}
        </AlertContext.Provider>)
}

export default AlertState