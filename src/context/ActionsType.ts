export type Action<T, U = {}> = { type: T } & U
export type Get<T,K extends keyof T> = T[K]

export const ALERT_ON = "ALERT/ALERT_ON"
export const ALERT_OFF = "ALERT/ALERT_OFF"

export const NOTE_FETCH ="FIREBASE/NOTE_FETCH"
export const NOTE_ADD = "FIREBASE/NOTE_ADD"
export const NOTE_DELETE = "FIREBASE/NOTE_DELETE"



