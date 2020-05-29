import React from 'react';

const Form = () => {
    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Add new note</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                   placeholder="Enter note"/>
        </div>
    )
};

export default Form;