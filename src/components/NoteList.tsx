import React, {FC} from 'react';
import {FirebaseContextType} from "../context/firebase/FirebaseContext";
import {CSSTransition, TransitionGroup} from "react-transition-group"


const NoteList: FC<Omit<FirebaseContextType, "addNote">> = ({deleteNote, notes}) => {

    return (
        <ul className="list-group">
            <TransitionGroup transitionName="example">
                {notes.map((note) =>
                    <CSSTransition
                        key={note?.id}
                        timeout={500}
                        classNames="item"
                    >
                        <li className="list-group-item row mt-2">
                            <div>
                                {note?.message}
                            </div>
                            <small>&nbsp;{note?.date}</small>
                            <button onClick={() => note?.id && deleteNote(note.id)}
                                    className="btn btn-outline-danger btn-sm my-btn">X
                            </button>
                        </li>
                    </CSSTransition>
                )}

            </TransitionGroup>
        </ul>
    )
};

export default NoteList;