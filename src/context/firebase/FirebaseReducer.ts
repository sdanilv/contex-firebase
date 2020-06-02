import {Action, Get, NOTE_ADD, NOTE_DELETE, NOTE_FETCH} from "../ActionsType";

export type Note = { message: string, date: string, id: string }
export type NoteId = Get<Note, "id">
type FirebaseState = { notes: Array<Note | null> }
export type Notes =  Get<FirebaseState, "notes">
type Actions = Action<"DEFAULT">
    | Action<typeof NOTE_FETCH, { notes: Notes}>
    | Action<typeof NOTE_ADD, { note: Note }>
    | Action<typeof NOTE_DELETE, { id: NoteId }>

export const firebaseReducer = (state: FirebaseState, action: Actions) => {
    switch (action.type) {
        case NOTE_ADD:
            return {...state, notes: [...state.notes, action.note]}
        case NOTE_FETCH:
            return {...state, notes:action.notes}
        case NOTE_DELETE:
            return {...state, notes: state.notes.filter((note) => action.id !== note?.id)}
        default:
            return state
    }

}