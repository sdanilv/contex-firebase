import React, {FC} from 'react';

type Props = { message: string, id: string, date: string, deleteNote: (id: string) => void }

const Note: FC<Props> = ({message, id, date, deleteNote}) =>
    <li className="list-group-item row mt-2">
        <div>
            {message}
        </div>
        <small>&nbsp;{date}</small>
        <button onClick={() => deleteNote(id)}
                className="btn btn-outline-danger btn-sm my-btn">
            X
        </button>
    </li>


export default Note;