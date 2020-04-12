import React from 'react';
import ButtonGroup from "./ButtonGroup";


export default ({ task, index, moveTask, deleteTask, hideTask }) => {
    const dragTaskStart = e => {
        const target = e.target;
        e.dataTransfer.setData('task', target.id);
        // setTimeout(() => {
        //     target.style.display = "none"
        // }, 0);
    };

    const dragTaskOver = e => {
        e.stopPropagation();
    };


    return (
        <div
             draggable='true'
             name={task.board}
             id={index}
             onDragStart={dragTaskStart}
             onDragOver={dragTaskOver}
             className="d-flex flex-column task-card"
        >
            <h6 className="task-title">{task.title}</h6>
            <div className="p-2 col-example text-left">{task.description}</div>
            <ButtonGroup moveTask={moveTask} deleteTask={deleteTask} hideTask={hideTask} task={task}/>
        </div>
    )
}