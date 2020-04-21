import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import TaskItem from "./TaskItem";

export default ({
                    priorityTasks,
                    moveTask,
                    deleteTask,
                    hideTask,
                    editTask,
                    swapPriorityTasks,
                    showTask,
                    boardMessage,
                    handleFindForEditTaskModal
                }) => {

    const priorityTasksList = (list, order, length) => list.length
        ? list.map((task, id) => task.visibility
            ? <TaskItem
                boardLength={length}
                boardOrder={order}
                moveTask={moveTask}
                deleteTask={deleteTask}
                hideTask={hideTask}
                editTask={editTask}
                listLength={list.length}
                swapTasks={swapPriorityTasks}
                key={id}
                index={id}
                id={task.id}
                task={task}
                handleFindForEditTaskModal={handleFindForEditTaskModal}
            />
            : <p className='show' key={task.id}>Hidden Task... <span id={task.id} priority_level={task.priority_level} name={task.board} autoFocus
                                                                     onClick={showTask} className='show'>SHOW</span></p>
        )
        : <p style={{color: 'white', textAlign: 'center'}}><i>{boardMessage}</i></p>;
    return (
        <MDBContainer className="dashboard container-fluid">
            <MDBRow className="kanban-row">
                {priorityTasks.map((list, idx) => (
                    <MDBCol
                        key={idx}
                        name={list.priority_level}
                        className="kanban-col"
                        md="6"
                    >
                        <div className='board-header container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='row'>
                                        <span className="task-list-title col-10">{list.priority_level.toUpperCase()} Priority List</span>
                                        <span className='task-quantity col-1'>{list.tasks.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {priorityTasksList(list.tasks, list.order, priorityTasks.length)}
                    </MDBCol>
                    ))
                }
            </MDBRow>
        </MDBContainer>
    );
}
