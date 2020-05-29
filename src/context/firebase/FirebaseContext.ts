import {createContext} from "react"
import {Note, NoteId} from "./FirebaseReducer";
type FirebaseContext = {addNote:(note: Note)=> void, deleteNote:(id: NoteId)=>void, notes: Array<Note|null> }
export default createContext<Partial<FirebaseContext>>({})