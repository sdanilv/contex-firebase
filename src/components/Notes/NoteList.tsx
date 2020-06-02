import React, {FC} from 'react';
import {FirebaseContextType} from "../../context/firebase/FirebaseContext";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import Note from "./Note";


const NoteList: FC<Omit<FirebaseContextType, "addNote">> = ({deleteNote, notes}) =>
    <ul className="list-group">
        <TransitionGroup  transitionName="example">
            {notes.map((note) => note &&
                <CSSTransition   key={note.id} timeout={500} classNames="item">
                  <Note {...note} deleteNote={deleteNote}/>
                </ CSSTransition >
            )}
        </TransitionGroup>
    </ul>

export default NoteList;