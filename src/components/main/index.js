import React from 'react';
import TaskModalPage from '../task_modal/ModalPage';
import BoardModalPage from '../board_modal/ModalPage'
import NewKanbanDashboard from "./NewKanbanDashboard";

export default props => {
    const listProps = {
        boards: props.boards,
        boardMessage: props.boardMessage
    };
    const eventProps = {
        createBoard: props.createBoard,
        createTask: props.createTask,
        moveTask: props.moveTask,
        deleteTask: props.deleteTask,
        deleteBoard: props.deleteBoard,
        hideTask: props.hideTask,
        showTask: props.showTask,
        dragTask: props.dragTask,
        editTask: props.editTask
    };
    return (
        <div>
            <TaskModalPage createTask={eventProps.createTask} />
            <BoardModalPage createBoard={eventProps.createBoard} />
            <NewKanbanDashboard
                boardMessage={listProps.boardMessage}
                {...listProps}
                {...eventProps}/>
        </div>
    )
}