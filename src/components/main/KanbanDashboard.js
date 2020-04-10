import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TaskItem from "./TaskItem";

export default ({ taskToDoList, taskInProgressList, moveTask, boardMessage }) => {

    return (
        <MDBContainer className="dashboard">
            <MDBRow className="kanban-row">
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">To-Do</h3>
                    {taskToDoList.length
                        ? taskToDoList.map((task, id) => <TaskItem moveTask={moveTask} key={id} task={task}/>)
                        : <p style={{ color: 'white', textAlign: 'center' }}><i>{boardMessage}</i></p>
                    }
                </MDBCol>
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">In-Progress</h3>
                    {taskInProgressList.length
                        ? taskInProgressList.map((task, id) => <TaskItem moveTask={moveTask} key={id} task={task}/>)
                        : <p style={{ color: 'white', textAlign: 'center' }}><i>{boardMessage}</i></p>
                    }
                </MDBCol>
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">To-Review</h3>
                    {/*<TaskItem/>*/}
                </MDBCol>
                <MDBCol className="kanban-col" md="3">
                    <h3 className="task-list-title">Done</h3>
                    {/*<TaskItem/>*/}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}