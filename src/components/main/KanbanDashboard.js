import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TaskItem from "./TaskItem";

export default ({ taskToDoList,
                    taskInProgressList,
                    taskReviewList,
                    taskDoneList,
                    moveTask,
                    deleteTask,
                    hideTask,
                    boardMessage
                }) =>
{
    const boardList = list => list.length
        ?   list.map((task, id) => <TaskItem moveTask={moveTask} deleteTask={deleteTask} hideTask={hideTask} key={id} task={task}/>)
        :   <p style={{ color: 'white', textAlign: 'center' }}><i>{boardMessage}</i></p>

    return (
        <MDBContainer className="dashboard">
            <MDBRow className="kanban-row">
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">To-Do: ({taskToDoList.length})</h3>
                    {boardList(taskToDoList)}
                </MDBCol>
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">In-Progress: ({taskInProgressList.length})</h3>
                    {boardList(taskInProgressList)}
                </MDBCol>
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">To-Review: ({taskReviewList.length})</h3>
                    {boardList(taskReviewList)}
                </MDBCol>
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">Done: ({taskDoneList.length})</h3>
                    {boardList(taskDoneList)}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}