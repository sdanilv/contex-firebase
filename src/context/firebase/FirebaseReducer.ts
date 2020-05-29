import {Action, Get, NOTE_ADD, NOTE_DELETE, NOTE_FETCH} from "../ActionsType";

export type Note = { message: string, date: Date, id: string }
export type NoteId = Get<Note, "id">
type FirebaseState = { notes: Array<Note | null> }
export type Notes =  Get<FirebaseState, "notes">
type Actions = Action<"DEFAULT">
    | Action<typeof NOTE_FETCH, { notes: Notes}>
    | Action<typeof NOTE_ADD, { note: Note }>
    | Action<typeof NOTE_DELETE, { id: NoteId }>


const handlers = {
    DEFAULT: (state: FirebaseState) => state,
    [NOTE_FETCH]: (state: FirebaseState, notes: Notes) => ({...state, notes}),
    [NOTE_ADD]: (state: FirebaseState, note: Note) => ({...state, notes: [...state.notes, note]}),
    [NOTE_DELETE]: (state: FirebaseState, id: NoteId) =>
        ({...state, notes: state.notes.filter((note) => id !== note?.id)}),
}


export const firebaseReducer = (state: FirebaseState, action: Actions) => {
    switch (action.type) {
        case NOTE_ADD:
            return handlers[NOTE_ADD](state, action.note)
        case NOTE_FETCH:
            return handlers[NOTE_FETCH](state, action.notes)
        case NOTE_DELETE:
            return handlers[NOTE_DELETE](state, action.id)
        default:
            return handlers["DEFAULT"](state)
    }

}