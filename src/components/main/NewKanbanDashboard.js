import React from 'react';
import TaskItem from "./TaskItem";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

export default ({
                    boards,
                    moveTask,
                    deleteTask,
                    hideTask,
                    showTask,
                    dragTask,
                    boardLength,
                    boardMessage
                }) =>
{

    const dropTask = e => {
        e.preventDefault();
        const task_id = e.dataTransfer.getData('task');
        const task = document.getElementById(task_id);
        dragTask(e.target.getAttribute('name'), task.getAttribute('name'), task_id);
    };


    const dragTaskOver = e => {
        e.preventDefault();
    };


    const boardList = (list, order) => list.length
        ?   list.map((task, id) => task.visibility
            ?   <TaskItem boardLength={boardLength} boardOrder={order} moveTask={moveTask} deleteTask={deleteTask} hideTask={hideTask} key={id} index={task.id} task={task}/>
            :   <p className='show' key={task.id}>Hidden Task... <span id={task.id} name={task.board} autoFocus onClick={showTask} className='show'>SHOW</span></p>
        )
        :   <p style={{ color: 'white', textAlign: 'center' }}><i>{boardMessage}</i></p>;

    return (
        <MDBContainer className="dashboard">
            <MDBRow className="kanban-row">
                {boards.map(board => (
                    <MDBCol
                        key={board.id}
                        onDrop={dropTask}
                        name={board.name}
                        onDragOver={dragTaskOver}
                        className="kanban-col"
                        md="3"
                    >
                        <h3 className="task-list-title">{board.name}: ({board.tasks.length})</h3>
                        {boardList(board.tasks, board.order)}
                    </MDBCol>
                ))
                }
            </MDBRow>
        </MDBContainer>
    );
}