import React from 'react';
import TaskModalPage from '../task_modal/ModalPage';
import BoardModalPage from '../board_modal/ModalPage'
import NewKanbanDashboard from "./NewKanbanDashboard";
import PriorityOrderedTasks from "./PriorityOrderedTasks";
import EditTaskModalPage from "../edit_modal/ModalPage";
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";

export default props => {

    const listProps = {
        boards: props.boards,
        boardMessage: props.boardMessage,
        errors: props.errors,
        boardsSchema: props.boardsSchema,
        priorityTasks: props.priorityTasks,
        searchEditTask: props.searchEditTask,
        modalButtonClick: props.modalButtonClick
    };
    const eventProps = {
        createBoard: props.createBoard,
        createTask: props.createTask,
        swapTasks: props.swapTasks,
        moveTask: props.moveTask,
        deleteTask: props.deleteTask,
        deleteBoard: props.deleteBoard,
        filterPriorityTasks: props.filterPriorityTasks,
        hideTask: props.hideTask,
        showTask: props.showTask,
        dragTask: props.dragTask,
        submitNewTaskItems: props.submitNewTaskItems,
        validateInput: props.validateInput,
        resetErrors: props.resetErrors,
        toggleEditModal: props.toggleEditModal,
        findTaskForEdit: props.findTaskForEdit
    };
    return (
        <div>
            <MDBContainer>
                <MDBRow className='kanban-header'>
                    <h1>Kanban Board</h1>
                </MDBRow>
            </MDBContainer>
            <EditTaskModalPage
                errors={listProps.errors}
                validateInput={eventProps.validateInput}
                modalButtonClick={listProps.modalButtonClick}
                handleToggleEditTaskModal={eventProps.toggleEditModal}
                boards={listProps.boards}
                searchEditTask={listProps.searchEditTask}
                submitNewTaskItems={eventProps.submitNewTaskItems}
            />
            <MDBContainer>
                <MDBRow className="main-control-panel">
                    <MDBCol>
                        <TaskModalPage
                            errors={listProps.errors}
                            validateInput={eventProps.validateInput}
                            createTask={eventProps.createTask}
                            resetErrors={eventProps.resetErrors}
                        />
                    </MDBCol>
                    <MDBCol>
                        <BoardModalPage
                            errors={listProps.errors}
                            boardsSchema={listProps.boardsSchema}
                            validateInput={eventProps.validateInput}
                            createBoard={eventProps.createBoard}
                            deleteBoard={eventProps.deleteBoard}
                            resetErrors={eventProps.resetErrors}
                        />
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn onClick={eventProps.filterPriorityTasks} className='task-priority-button' >Priority Tasks</MDBBtn>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn href="https://github.com/likejean/homework-6/issues" className='report-issues-button' >Report Issues</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

            <NewKanbanDashboard
                boardMessage={listProps.boardMessage}
                handleFindForEditTaskModal={eventProps.findTaskForEdit}
                {...listProps}
                {...eventProps}
            />
            <PriorityOrderedTasks
                boardMessage={listProps.boardMessage}
                handleFindForEditTaskModal={eventProps.findTaskForEdit}
                {...listProps}
                {...eventProps}
            />
        </div>
    )
}