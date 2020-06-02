import React, {FC, useContext, useState} from 'react';
import {FirebaseContextProps} from "../../context/firebase/FirebaseContext";
import AlertContext, {AlertContextProps} from "../../context/alert/AlertContext";

type Props = Pick<FirebaseContextProps, "addNote">&Pick<AlertContextProps, "alertOn">
const Form: FC<Props> = ({addNote,alertOn}) => {

    const [text, setText] = useState("")

    const textHandler = (eve: React.ChangeEvent<HTMLInputElement>) =>
        setText(eve.target.value)

    const submitHandler = async (eve: React.FormEvent<HTMLFormElement>) => {
        eve.preventDefault()
        alertOn("Note added")
        await addNote(text)

    }

    return (
        <form onSubmit={submitHandler} className="form-group">
            <input value={text} onChange={textHandler} className="form-control"
                   placeholder="Enter note"/>
        </form>
    )
};

export default Form;