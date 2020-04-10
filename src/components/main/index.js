import React from 'react';
import ModalPage from '../modal/ModalPage';
import KanbanDashboard from "./KanbanDashboard";

export default ({ createList, moveTask, taskToDoList, taskInProgressList, boardMessage }) => {
    return (
        <div>
            <div>
                <ModalPage createList={createList} />
                <KanbanDashboard
                    moveTask={moveTask}
                    taskToDoList={taskToDoList}
                    taskInProgressList={taskInProgressList}
                    boardMessage={boardMessage}
                />
            </div>
        </div>
    )
}