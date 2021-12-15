import React, { Fragment } from "react";
import InputTodo from "./InputTodo";
import AddCourse from "./AddCourse";
import { useParams, useHistory } from 'react-router-dom'
import auth from './Auth';


export default function Schedule() {

    const { student } = useParams();
    let history = useHistory();

    return (
        <Fragment>
            <h4 class = "ml-4 mt-2" >STUDENT ID: {student} </h4>
            <div className="conatiner flex-parent-element mt-1 ml-2">
                <div className="container flex-child-element">
                    <h3 className="dark-grey text-center mt-5">Monday</h3>
                    <InputTodo type={'mon'} studentId = {student} />
                </div>
                <div className="container flex-child-element">
                    <h3 className="dark-grey text-center mt-5">Tuesday</h3>
                    <InputTodo type={'tue'} studentId = {student}/>
                </div>
                <div className="container flex-child-element">
                    <h3 className="dark-grey text-center mt-5">Wednesday</h3>
                    <InputTodo type={'wed'} studentId = {student}/>
                </div>
                <div className="container flex-child-element">
                    <h3 className="dark-grey text-center mt-5">Thursday</h3>
                    <InputTodo type={'thu'} studentId = {student}/>
                </div>
                <div className="container flex-child-element">
                    <h3 className="dark-grey text-center mt-5">Friday</h3>
                    <InputTodo type={'fri'} studentId = {student}/>
                </div>
                <div className="container flex-child-element">
                    <h3 className="dark-grey text-center mt-5">Weekend</h3>
                    <InputTodo type={'wknd'} studentId = {student}/>
                </div>
            </div>
            <AddCourse />
            <br />
            <br />
            <button className="ml-4 btn"
                onClick={() => {
                    auth.logout(() => {
                        history.push("/");
                    });
                }}>logout</button>
        </Fragment>
    );
}
