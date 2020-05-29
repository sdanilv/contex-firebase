import {Action, ALERT_OFF, ALERT_ON} from "../ActionsType";

const handlers = {
    "DEFAULT": (state: AlertStateType) => state,
    [ALERT_ON]: (state: AlertStateType, message: string) => ({...state, alert: true, message}),
    [ALERT_OFF]: (state: AlertStateType) => ({...state, alert: false})
}

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
            return handlers[ALERT_OFF](state)
        case ALERT_ON:
            return handlers[ALERT_ON](state, action.message)
        default:
            return handlers.DEFAULT(state)
    }
}