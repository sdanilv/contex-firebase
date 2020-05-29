import React from 'react';

const notes = [
    {message: "asdsad", date: new Date()},
    {message: "Esta", date: new Date()},
    {message: "asdsad", date: new Date()},
    {message: "dgdf", date: new Date()},
    {message: "xcvxcvx", date:new Date()},
    {message: "ghmgmhg", date: new Date()},

]

const NoteList = () => {
    return (
        <ul className="list-group">
            {notes.map((note)=> <li className="list-group-item"><div>{note.message}
            </div><small>&nbsp;{note.date.toDateString()}</small></li>)}
        </ul>
    )
};

export default NoteList;