import React from 'react';
import ModalPage from '../modal/ModalPage';
import NewKanbanDashboard from "./NewKanbanDashboard";

export default props => {
    const listProps = {
        taskToDoList: props.taskToDoList,
        taskInProgressList: props.taskInProgressList,
        taskReviewList: props.taskReviewList,
        taskDoneList: props.taskDoneList,
        boards: props.boards,
        boardLength: props.boardLength
    };
    const eventProps = {
        moveTask: props.moveTask,
        deleteTask: props.deleteTask,
        hideTask: props.hideTask,
        showTask: props.showTask,
        dragTask: props.dragTask,
        editTask: props.editTask
    };
    return (
        <div>
            <ModalPage createList={props.createList} />
            <NewKanbanDashboard
                boardMessage={props.boardMessage}
                {...listProps}
                {...eventProps}/>
        </div>
    )
}