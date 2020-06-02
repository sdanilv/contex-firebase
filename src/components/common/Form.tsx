import React, {FC, useContext, useState} from 'react';
import {FirebaseContextType} from "../../context/firebase/FirebaseContext";
import AlertContext from "../../context/alert/AlertContext";

const Form: FC<Pick<FirebaseContextType, "addNote">> = ({addNote}) => {
    const {alertOn, alertOff} = useContext(AlertContext)
    const [text, setText] = useState("")

    const textHandler = (eve: React.ChangeEvent<HTMLInputElement>) =>
        setText(eve.target.value)

    const submitHandler = async (eve: React.FormEvent<HTMLFormElement>) => {
        eve.preventDefault()
        alertOn("Note added")
        await addNote(text)
        await setTimeout(() => alertOff(), 3000)
    }

    return (
        <form onSubmit={submitHandler} className="form-group">
            <input value={text} onChange={textHandler} className="form-control"
                   placeholder="Enter note"/>
        </form>
    )
};

export default Form;