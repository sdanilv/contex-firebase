import React, {FC, useEffect, useReducer} from 'react';
import FirebaseContext from "./FirebaseContext";
import axios from "axios"
import {firebaseReducer, NoteId} from "./FirebaseReducer";
import {NOTE_ADD, NOTE_DELETE, NOTE_FETCH} from "../ActionsType";

const DB_PATH = process.env.REACT_APP_DB_PATH


const FirebaseState: FC = (props) => {
useEffect(()=>{
    fetchNote()
    },[]
)
    const initializerArg = {notes: []};
    const [state, dispatch] = useReducer(firebaseReducer, initializerArg)
    const {notes} = state

    const fetchNote = async () => {
        let notes = []
        const {data} = await axios.get<{[id: string]:{message:string, date:string}}>(`${DB_PATH}/notes.json`)
        for( const key in  data){
            notes.push({id:key, message: data[key].message, date: data[key].date})
        }
        dispatch({type: NOTE_FETCH, notes})
    }
    const addNote = async (message: string) => {
        let note ={message, date: new Date().toDateString()};
        const {data} = await axios.post<{name:NoteId}>(`${DB_PATH}/notes.json`, note)
        dispatch({type: NOTE_ADD, note: {...note, id:data.name}})
    }
    const deleteNote = async (id: NoteId) => {
        const  {data} = await axios.delete(`${DB_PATH}/notes/${id}.json`)
        console.log(data)
        dispatch({type: NOTE_DELETE, id})
    }


    return (
        <FirebaseContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseState