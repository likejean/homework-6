import React, {useState} from 'react';
import TaskModalPage from '../task_modal/ModalPage';
import BoardModalPage from '../board_modal/ModalPage'
import NewKanbanDashboard from "./NewKanbanDashboard";
import EditTaskModalPage from "../edit_modal/ModalPage";

export default props => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [editTask, setEditTask] = useState({});

    const handleToggleEditTaskModal = e => {
        const name = e.target.getAttribute('name');
        const id = e.target.id;
        if (id) setEditTask(props.boards.find(board => board.name === name).tasks.find(task => task.id === id));
        setModalButtonClick(!modalButtonClick);
    }


    const listProps = {
        boards: props.boards,
        boardMessage: props.boardMessage,
        errors: props.errors,
        boardsSchema: props.boardsSchema
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
        submitNewTaskItems: props.submitNewTaskItems,
        validateInput: props.validateInput,
        resetErrors: props.resetErrors
    };
    return (
        <div>
            <EditTaskModalPage
                errors={listProps.errors}
                validateInput={eventProps.validateInput}
                modalButtonClick={modalButtonClick}
                handleToggleEditTaskModal={handleToggleEditTaskModal}
                boards={listProps.boards}
                editTask={editTask}
                submitNewTaskItems={eventProps.submitNewTaskItems}
            />
            <TaskModalPage
                errors={listProps.errors}
                validateInput={eventProps.validateInput}
                createTask={eventProps.createTask}
                resetErrors={eventProps.resetErrors}/>
            <BoardModalPage
                errors={listProps.errors}
                boardsSchema={listProps.boardsSchema}
                validateInput={eventProps.validateInput}
                createBoard={eventProps.createBoard}
                deleteBoard={eventProps.deleteBoard}
                resetErrors={eventProps.resetErrors}/>
            <NewKanbanDashboard
                boardMessage={listProps.boardMessage}
                handleToggleEditTaskModal={handleToggleEditTaskModal}
                {...listProps}
                {...eventProps}/>
        </div>
    )
}