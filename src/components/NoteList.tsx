import React, {FC} from 'react';
import {FirebaseContextType} from "../context/firebase/FirebaseContext";


const NoteList: FC<Omit<FirebaseContextType, "addNote">> = ({deleteNote, notes}) => {

    return (
        <ul className="list-group">
            {notes.map((note) =>
                <li className="list-group-item row mt-2" key={note?.id}>
                    <div>
                        {note?.message}
                    </div>
                    <small>&nbsp;{note?.date}</small>
                    <button onClick={() => note?.id && deleteNote(note.id)}
                            className="btn btn-outline-danger btn-sm my-btn">X
                    </button>
                </li>)}

        </ul>
    )
};

export default NoteList;