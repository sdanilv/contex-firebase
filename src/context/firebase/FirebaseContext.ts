import {createContext} from "react"
import {Note, NoteId} from "./FirebaseReducer";
export type FirebaseContextType = {addNote:(message: string)=> Promise<void>, deleteNote:(id: NoteId)=>void, notes: Array<Note|null> }
export default createContext<FirebaseContextType>({} as FirebaseContextType)