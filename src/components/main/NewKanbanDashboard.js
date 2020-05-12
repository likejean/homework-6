import React from 'react';
import TaskItem from "./TaskItem";
import './style.css';
import {MDBBtn, MDBCol, MDBContainer, MDBRow} from "mdbreact";
import TaskModalPage from "../task_modal/ModalPage";
import AddBoardModalPage from "../board_modal/AddBoardModalPage";

export default ({
                    boards,
                    moveTask,
                    deleteTask,
                    hideTask,
                    createTask,
                    userLogin,
                    boardsSchema,
                    resetErrors,
                    editTask,
                    swapKanbanTasks,
                    validateInput,
                    insertBoard,
                    addBoard,
                    showTask,
                    dragTask,
                    errors,
                    deleteBoard,
                    boardMessage,
                    handleFindForEditTaskModal,
                    setBoardOrderState
                }) => {

    const dropTask = e => {
        e.preventDefault();
        const task_id = e.dataTransfer.getData('task');
        const task = document.getElementById(task_id);
        setBoardOrderState(boards.map(board => (
                {
                    id: board.id,
                    order: board.order,
                    name: board.name,
                    title: board.title,
                    tasks: board.tasks.map(task => ({
                        id: task.id,
                        visibility: true,
                        task_title: task.task_title,
                        location: task.location,
                        task_description: task.task_description,
                        task_priority: task.task_priority,
                        board: task.board,
                        first: task.first,
                        last: task.last
                    }))
                }
            ))
        );
        dragTask(e.target.getAttribute('name'), task.getAttribute('name'), task_id);
    };

    const dragTaskOver = e => {
        e.preventDefault();
    };

    const handleDeleteBoard = e => {
        setBoardOrderState(boards.map(board => (
                {
                    id: board.id,
                    order: board.order,
                    name: board.name
                }
            ))
        );
        deleteBoard(e);
    };

    const boardList = (list, order, login, length) => list.length
        ? list.map((task, id) => task.visibility
            ? <TaskItem
                boardLength={length}
                boardOrder={order}
                moveTask={moveTask}
                deleteTask={deleteTask}
                hideTask={hideTask}
                editTask={editTask}
                listLength={list.length}
                swapTasks={swapKanbanTasks}
                login={login}
                key={id}
                index={id}
                id={task.id}
                task={task}
                handleFindForEditTaskModal={handleFindForEditTaskModal}
            />
            : <p className='show' key={task.id}>Hidden Task... <span id={task.id} location={task.location}
                                                                     name={task.board} autoFocus
                                                                     onClick={showTask} className='show'>SHOW</span></p>
        )
        : <p style={{color: 'white', textAlign: 'center'}}><i>{boardMessage}</i></p>;

    return (
        <MDBContainer className="dashboard container-fluid">
            <MDBRow className="kanban-row">
                {boards.map(board => (
                    <MDBCol
                        key={board.id}
                        onDrop={dropTask}
                        name={board.name}
                        onDragOver={dragTaskOver}
                        className="kanban-col"
                        md="3"
                    >
                        <div className='board-header container'>
                            <div className='row'>

                                <div className='col-10'>
                                    <div className='row'>
                                        <span className="task-list-title col-9">{board.title}</span>
                                        <span className='task-quantity col-2'>{board.tasks.length}</span>
                                    </div>
                                </div>
                                {
                                    userLogin ?
                                        <div className='col-2'>
                                            <i
                                                id={board.id}
                                                onClick={handleDeleteBoard}
                                                className="far fa-calendar-times fa-3x"/>
                                        </div>
                                        :
                                        <div className='col-2'>
                                            <i
                                                id={board.id}
                                                className="far fa-calendar-times fa-3x"/>
                                        </div>
                                }

                            </div>
                        </div>
                        {boardList(board.tasks, board.order, userLogin, boards.length)}
                        {
                        userLogin ?
                            <TaskModalPage
                                errors={errors}
                                board_name={board.name}
                                validateInput={validateInput}
                                createTask={createTask}
                                resetErrors={resetErrors}
                            />
                        :
                            <MDBContainer>
                                <MDBRow>
                                    <MDBBtn className='addTask'>
                                        <i className="fas fa-plus fa-2x"/>
                                    </MDBBtn>
                                </MDBRow>
                            </MDBContainer>
                        }
                    </MDBCol>
                ))
                }
                {
                    userLogin ?
                    <MDBCol md="3" className="btn-col">
                        <AddBoardModalPage
                            errors={errors}
                            boards={boards}
                            boardsSchema={boardsSchema}
                            validateInput={validateInput}
                            addBoard={addBoard}
                            deleteBoard={deleteBoard}
                            resetErrors={resetErrors}
                            setBoardOrderState={setBoardOrderState}
                        />
                    </MDBCol>
                    :
                    <MDBCol md="3" className="btn-col">
                        <MDBBtn className='addBoard'>
                            <i className="fas fa-plus fa-2x"/>
                        </MDBBtn>
                    </MDBCol>
                }
            </MDBRow>
        </MDBContainer>
    );
}