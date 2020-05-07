import React from 'react';
import {MDBBtn, MDBBtnGroup} from "mdbreact";

export default ({task: {board, id, location, priority_level, task_priority}, login, boardOrder, handleFindForEditTaskModal, boardLength, moveTask, deleteTask, hideTask}) => {
    const boolStr = task_priority ? 'true' : 'false';
    return (
        <MDBBtnGroup size="sm" className="mb-4">
            <MDBBtn
                disabled={boardOrder === 0}
                className='task-button'
                color="white"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    direction='left'
                    location={location}
                    priority_level={priority_level}
                    task_priority={boolStr}
                    order={boardOrder}
                    name={`left-${board}`}
                    className="fa fa-angle-double-left"
                    aria-hidden="true"
                >
                </span>
            </MDBBtn>
            <MDBBtn className='task-button' color="white">
                <span id={id} name={board} location={location} priority_level={priority_level} onClick={hideTask}
                      className="hide fas fa-eye-slash" aria-hidden="true"/>
            </MDBBtn>
            {
                location === 'kanban_board'
                    ?
                    <>
                        <MDBBtn disabled={!login} className='task-button' color="white">
                            <span id={id} name={board} onClick={handleFindForEditTaskModal} className="edit fas fa-edit"
                                  aria-hidden="true"/>
                        </MDBBtn>
                        <MDBBtn disabled={!login} className='task-button' color="white">
                            <span id={id} name={board} onClick={deleteTask} className="delete fas fa-trash-alt"
                                  aria-hidden="true"/>
                        </MDBBtn>
                    </>
                    :
                    null
            }
            <MDBBtn
                className='task-button'
                disabled={boardOrder === boardLength - 1}
                color="white"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    direction='right'
                    location={location}
                    priority_level={priority_level}
                    task_priority={boolStr}
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