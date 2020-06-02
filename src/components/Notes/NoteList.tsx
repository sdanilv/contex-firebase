import React, {FC} from 'react';
import {FirebaseContextProps} from "../../context/firebase/FirebaseContext";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import Note from "./Note";


const NoteList: FC<Omit<FirebaseContextProps, "addNote">> = ({deleteNote, notes}) =>
    <ul className="list-group">
        <TransitionGroup  transitionName="example">
            {notes.map((note) => note &&
                <CSSTransition   key={note.id} timeout={1000} classNames="note">
                  <Note {...note} deleteNote={deleteNote}/>
                </ CSSTransition >
            )}
        </TransitionGroup>
    </ul>

export default NoteList;