import React, {useState} from 'react';
import ButtonGroup from "./ButtonGroup";
import {MDBBtn, MDBRow, MDBCol, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";


export default ({task, index, listLength, boardLength, swapTasks, handleFindForEditTaskModal, boardOrder, id, moveTask, editTask, deleteTask, hideTask}) => {

    const [toggleModal, setToggleModal] = useState(false);
    const dragTaskStart = e => {
        const target = e.target;
        e.dataTransfer.setData('task', target.id);
    };

    const DescriptionModal = () =>
        <MDBContainer>
            <MDBModal isOpen={toggleModal} toggle={handleToggleDescriptionModal} size="fluid">
                <MDBModalHeader toggle={handleToggleDescriptionModal}>{task.task_title}</MDBModalHeader>
                <MDBModalBody>
                    {task.task_description}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={handleToggleDescriptionModal}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>

    const dragTaskOver = e => {
        e.stopPropagation();
    };

    const handleOnMouseOver = e => {
        let id = e.target.id;
        if(id && document.getElementById(id).querySelector(".task-details") !== null) document.getElementById(id).querySelector(".task-details").innerHTML = 'Click Here...';

    }
    const handleOnMouseOff = e => {
        let id = e.target.id;
        if(id && document.getElementById(id).querySelector(".task-details") !== null) document.getElementById(id).querySelector(".task-details").innerHTML = 'Details...';
    }

    const handleToggleDescriptionModal = () => setToggleModal(!toggleModal)

    return (
        <MDBContainer
            draggable='true'
            name={task.board}
            id={id}
            onDragStart={dragTaskStart}
            onDragOver={dragTaskOver}
            className="d-flex flex-column task-card"
        >
            <MDBBtn disabled={index === 0} name='up' board={task.board} id={id} className='up-button' onClick={swapTasks}>Up</MDBBtn>
            <MDBRow>
                <MDBCol size="8">
                    <h6 className="task-title">{task.task_title}</h6>
                </MDBCol>
                {task.task_priority && <MDBCol className="priority"><i className="fas fa-exclamation-triangle fa-2x"></i></MDBCol>}
            </MDBRow>
            <span className="p-2 col-example text-left task-details"
                  id={id}
                  onMouseOver={handleOnMouseOver}
                  onMouseLeave={handleOnMouseOff}
                  onClick={handleToggleDescriptionModal}
            >
                <i>Details...</i>
            </span>
            <DescriptionModal/>
            <ButtonGroup
                boardLength={boardLength}
                boardOrder={boardOrder}
                moveTask={moveTask}
                editTask={editTask}
                deleteTask={deleteTask}
                hideTask={hideTask}
                task={task}
                handleFindForEditTaskModal={handleFindForEditTaskModal}
            />
            <MDBBtn disabled={index === listLength - 1} name='down' board={task.board} id={id} className='down-button' onClick={swapTasks}>Down</MDBBtn>

        </MDBContainer>
    )
}