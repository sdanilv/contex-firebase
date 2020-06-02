import {Action, ALERT_OFF, ALERT_ON} from "../ActionsType";

type Actions = Action<"DEFAULT">
    | Action<typeof ALERT_OFF>
    | Action<typeof ALERT_ON, { message: string }>

type AlertStateType = {
    alert: boolean,
    message: string
}


export const alertReducer = (state: AlertStateType, action: Actions) => {
    switch (action.type) {
        case ALERT_OFF:
            return ({...state, alert: false, message:""})
        case ALERT_ON:
            return {...state, alert: true, message:action.message}
        default:
            return state
    }
}