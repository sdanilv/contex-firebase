import React, {useContext} from 'react';
import Form from "../components/common/Form";
import NoteList from "../components/Notes/NoteList";
import FirebaseContext from "../context/firebase/FirebaseContext";
import AlertContext from "../context/alert/AlertContext";

const Home = () => {
    const {addNote, deleteNote, notes = []} = useContext(FirebaseContext)
    const {alertOn} = useContext(AlertContext)
    const changedDeleteNote = (id: string) => {
        alertOn(`Deleted note ${id}`)
        deleteNote(id)
    }
    return (
        <div className="container mt-3">
            <Form addNote={addNote} alertOn={alertOn}/>
            <NoteList deleteNote={changedDeleteNote} notes={notes}/>
        </div>
    )
};

export default Home;