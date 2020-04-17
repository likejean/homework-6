import React from 'react';
import TaskModalPage from '../task_modal/ModalPage';
import BoardModalPage from '../board_modal/ModalPage'
import NewKanbanDashboard from "./NewKanbanDashboard";

export default props => {
    const listProps = {
        boards: props.boards,
        boardMessage: props.boardMessage,
        errors: props.errors
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
        editTask: props.editTask,
        validateInput: props.validateInput
    };
    return (
        <div>
            <TaskModalPage
                errors={listProps.errors}
                validateInput={eventProps.validateInput}
                createTask={eventProps.createTask} />
            <BoardModalPage
                errors={listProps.errors}
                validateInput={eventProps.validateInput}
                createBoard={eventProps.createBoard} />
            <NewKanbanDashboard
                boardMessage={listProps.boardMessage}
                {...listProps}
                {...eventProps}/>
        </div>
    )
}