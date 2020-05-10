import React from 'react';
import Loading from './LoadingComponent';
import BoardModalPage from '../board_modal/ModalPage';
import LoginModalPage from '../auth/ModalPage';
import NewKanbanDashboard from './NewKanbanDashboard';
import PriorityOrderedTasks from './PriorityOrderedTasks';
import EditTaskModalPage from '../edit_modal/ModalPage';
import ServerNotifications from "./ServerNotifications";
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from 'mdbreact';


export default props => {

    const listProps = {
        boards: props.boards,
        loading: props.loading,
        serverNote: props.serverNote,
        boardMessage: props.boardMessage,
        errors: props.errors,
        userLogin: props.userLogin,
        boardsSchema: props.boardsSchema,
        priorityTasks: props.priorityTasks,
        searchEditTask: props.searchEditTask,
        modalButtonClick: props.modalButtonClick,
        panelControlButtons: props.panelControlButtons
    };
    const eventProps = {
        createBoard: props.createBoard,
        createTask: props.createTask,
        resetServerNotes: props.resetServerNotes,
        swapKanbanTasks: props.swapTasks.swapKanbanTasks,
        swapPriorityTasks: props.swapTasks.swapPriorityTasks,
        moveTask: props.moveTask,
        deleteTask: props.deleteTask,
        deleteBoard: props.deleteBoard,
        userLoginAuth: props.userLoginAuth,
        filterPriorityTasks: props.filterPriorityTasks,
        hideTask: props.hideTask,
        showTask: props.showTask,
        dragTask: props.dragTask,
        submitNewTaskItems: props.submitNewTaskItems,
        validateInput: props.validateInput,
        resetErrors: props.resetErrors,
        toggleEditModal: props.toggleEditModal,
        findTaskForEdit: props.findTaskForEdit,
        resetMainKanbanView: props.resetMainKanbanView,
        setBoardOrderState: props.setBoardOrderState
    };

    if (listProps.loading) {
        return (
            <MDBContainer>
                <MDBRow className='kanban-header'>
                    <h1>Kanban Board</h1>
                </MDBRow>
                <MDBRow center style={{marginTop: 250}}>
                    <Loading
                        type='spin'
                        color='#32083a'
                        height='50%'
                        width='50%'
                        delay={0}
                    />
                </MDBRow>
            </MDBContainer>
        )
    } else {
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
                    findTaskForEdit={listProps.findTaskForEdit}
                    searchEditTask={listProps.searchEditTask}
                    submitNewTaskItems={eventProps.submitNewTaskItems}
                />
                <MDBContainer className="main-control-panel">
                    {listProps.userLogin &&
                        <MDBRow>
                            <MDBCol>
                                <BoardModalPage
                                    errors={listProps.errors}
                                    boards={listProps.boards}
                                    boardsSchema={listProps.boardsSchema}
                                    validateInput={eventProps.validateInput}
                                    createBoard={eventProps.createBoard}
                                    deleteBoard={eventProps.deleteBoard}
                                    resetErrors={eventProps.resetErrors}
                                    setBoardOrderState={eventProps.setBoardOrderState}
                                />
                            </MDBCol>
                            <MDBCol>
                                <MDBBtn href="https://github.com/likejean/homework-6/issues"
                                        className='report-issues-button'>Report Issues</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    }
                    <MDBRow>

                        <MDBCol>
                            <LoginModalPage userLoginAuth={eventProps.userLoginAuth}/>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn
                                disabled={listProps.panelControlButtons.kanban_board}
                                onClick={eventProps.resetMainKanbanView}
                                className='task-priority-button'
                            >Kanban Board
                            </MDBBtn>
                        </MDBCol>
                        <MDBCol>
                            <MDBBtn
                                disabled={listProps.panelControlButtons.priority_board}
                                onClick={eventProps.filterPriorityTasks}
                                className='task-priority-button'
                            >Priority Tasks
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                {listProps.serverNote
                    ?
                    <MDBContainer className='server-notification'>
                        <MDBRow center>
                            <MDBCol>
                                <ServerNotifications
                                    serverNote={listProps.serverNote}
                                    resetServerNotes={eventProps.resetServerNotes}
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    : null
                }
                {
                    listProps.panelControlButtons.kanban_board && !listProps.panelControlButtons.priority_board
                        ?
                        <NewKanbanDashboard
                            boardMessage={listProps.boardMessage}
                            handleFindForEditTaskModal={eventProps.findTaskForEdit}
                            {...listProps}
                            {...eventProps}
                        />
                        :
                        <PriorityOrderedTasks
                            boardMessage={listProps.boardMessage}
                            handleFindForEditTaskModal={eventProps.findTaskForEdit}
                            {...listProps}
                            {...eventProps}
                        />
                }
            </div>
        )
    }
}