import React, { Fragment, useState } from "react";
import ListTodos from "./ListTodos";
import './style.css';

//react function that returns Input Todo Header in html
const InputTodo = ({ type, studentId }) => {
    const [description, setDescription] = useState("");

    //JS function that manages API for recieving a request
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            console.log(studentId);
            const response = await fetch(`/todos/${type}/${studentId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = `/schedule/${studentId}`;
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
                <div id="hide" className="input-right">
                    <button className="btn" data-toggle="modal" data-target={`#id${type}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </div>

            <div className="modal" id={`id${type}`}>
                <div className="modal-dialog">
                    <div className="modal-content">


                        <div className="modal-header">
                            <h4 className="modal-title">Create Todo</h4>
                            <button type="button" className="btn btn-class" data-dismiss="modal"
                            >&times;</button>
                        </div>


                        <div className="modal-body">
                            <input type = "text" className = "form-control" value = {description} 
                            onChange={e => setDescription(e.target.value)} />
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-class" data-dismiss="modal"
                            >
                                Close</button>
                                <button className="btn btn-class" onClick = {onSubmitForm}>Add New Todo</button>                        
                        </div>

                    </div>
                </div>
            </div>
            <ListTodos type={type} studentId = {studentId} />
        </Fragment>
    );
};
//this function will exported for use as a module elsewhere
export default InputTodo;