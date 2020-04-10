import React from 'react';
import ModalPage from '../modal/ModalPage';
import KanbanDashboard from "./KanbanDashboard";

export default props => {
    const listProps = {
        taskToDoList: props.taskToDoList,
        taskInProgressList: props.taskInProgressList,
        taskReviewList: props.taskReviewList,
        taskDoneList: props.taskDoneList
    };
    const eventProps = {
        moveTask: props.moveTask,
        deleteTask: props.deleteTask,
        hideTask: props.hideTask
    }
    return (
        <div>
            <ModalPage createList={props.createList} />
            <KanbanDashboard
                boardMessage={props.boardMessage}
                {...listProps}
                {...eventProps}
            />
        </div>
    )
}