import React,  {FC, useReducer} from 'react';
import FirebaseContext from "./FirebaseContext";
import {firebaseReducer, Note, NoteId} from "./FirebaseReducer";
import {NOTE_ADD, NOTE_DELETE} from "../ActionsType";

const DB_PATH = process.env.REACT_APP_DB_PATH


const FirebaseState:FC = (props) => {

    const initializerArg = {notes:[]};
    const [state, dispatch] = useReducer(firebaseReducer, initializerArg)
    const {notes} = state

    const addNote = (note: Note)=>{
        dispatch({type:NOTE_ADD, note})
    }
    const deleteNote =(id: NoteId)=>{
        dispatch({type:NOTE_DELETE, id})
    }


    return (
        <FirebaseContext.Provider value={{notes, addNote, deleteNote}} >
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState