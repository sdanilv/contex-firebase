import React, {useContext} from 'react';
import Form from "../components/common/Form";
import NoteList from "../components/NoteList";
import FirebaseContext from "../context/firebase/FirebaseContext";

const Home = () => {
    const {addNote, deleteNote, notes=[]} = useContext(FirebaseContext)
    return (
        <div className="container mt-3">
            <Form addNote={addNote}/>
            <NoteList deleteNote={ deleteNote} notes={notes} />
        </div>
    )
};

export default Home;