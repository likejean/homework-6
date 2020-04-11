import React from 'react';
import ButtonGroup from "./ButtonGroup";


export default ({ task, moveTask, deleteTask, hideTask }) => {
    return (
        <div className="d-flex flex-column task-card">
            <h6 className="task-title">{task.title}</h6>
            <div className="p-2 col-example text-left">{task.description}</div>
            <ButtonGroup moveTask={moveTask} deleteTask={deleteTask} hideTask={hideTask} task={task}/>
        </div>
    )
}