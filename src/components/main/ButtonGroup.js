import React from 'react';
import {MDBBtn, MDBBtnGroup} from "mdbreact";

export default ({task: {board, id}, moveTask, deleteTask, hideTask}) => {
    return (
        <MDBBtnGroup size="sm" className="mb-4">
            <MDBBtn
                disabled={`left-${board}` === 'left-todo'}
                className='task-button'
                color="danger"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    name={`left-${board}`}
                    className="fa fa-angle-double-left"
                    aria-hidden="true"
                >
                </span>
            </MDBBtn>
            <MDBBtn className='task-button' color="pink">
                <span id={id} name={board} onClick={hideTask} className="hide fas fa-eye-slash" aria-hidden="true"/>
            </MDBBtn>
            <MDBBtn className='task-button' color="pink">
                <span id={id} name={board} onClick={deleteTask} className="delete fas fa-trash-alt" aria-hidden="true"/>
            </MDBBtn>
            <MDBBtn
                className='task-button'
                disabled={`right-${board}` === 'right-done'}
                color="danger"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    name={`right-${board}`}
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                >
                </span>
            </MDBBtn>
        </MDBBtnGroup>
    )
}