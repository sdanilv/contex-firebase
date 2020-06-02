import {createContext} from "react"
import {Note, NoteId} from "./FirebaseReducer";
export type FirebaseContextProps = {addNote:(message: string)=> Promise<void>, deleteNote:(id: NoteId)=>void, notes: Array<Note|null> }
export default createContext<FirebaseContextProps>({} as FirebaseContextProps)