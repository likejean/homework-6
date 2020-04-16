import React from 'react';
import {MDBBtn, MDBBtnGroup} from "mdbreact";

export default ({task: { board, id }, boardOrder, boardLength, moveTask, deleteTask, hideTask}) => {
    console.log('length', boardLength)
    return (
        <MDBBtnGroup size="sm" className="mb-4">
            <MDBBtn
                disabled={boardOrder === 0}
                className='task-button'
                color="danger"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    direction='left'
                    order={boardOrder}
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
                <span id={id} name={board} className="hide fas fa-edit" aria-hidden="true"/>
            </MDBBtn>
            <MDBBtn className='task-button' color="pink">
                <span id={id} name={board} onClick={deleteTask} className="delete fas fa-trash-alt" aria-hidden="true"/>
            </MDBBtn>
            <MDBBtn
                className='task-button'
                disabled={boardOrder === boardLength - 1}
                // disabled={`right-${board}` === 'right-done'}
                color="danger"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    direction='right'
                    order={boardOrder}
                    name={`right-${board}`}
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                >
                </span>
            </MDBBtn>
        </MDBBtnGroup>
    )
}