import React, {useState} from 'react';
import ButtonGroup from "./ButtonGroup";
import {MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader} from "mdbreact";


export default ({task, boardLength, handleToggleEditTaskModal, boardOrder, index, moveTask, editTask, deleteTask, hideTask}) => {

    const [toggleModal, setToggleModal] = useState(false);

    const dragTaskStart = e => {
        const target = e.target;
        e.dataTransfer.setData('task', target.id);
    };

    const DescriptionModal = () =>
        <MDBContainer>
            <MDBModal isOpen={toggleModal} toggle={handleToggleDescriptionModal} size="fluid">
                <MDBModalHeader toggle={handleToggleDescriptionModal}>{task.title}</MDBModalHeader>
                <MDBModalBody>
                    {task.description}
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
        if(id) document.getElementById(id).querySelector(".task-details").innerHTML = 'Click Here...';

    }
    const handleOnMouseOff = e => {
        let id = e.target.id;
        if(id) document.getElementById(id).querySelector(".task-details").innerHTML = 'Details...';
    }

    const handleToggleDescriptionModal = () => setToggleModal(!toggleModal)

    return (
        <div
            draggable='true'
            name={task.board}
            id={index}
            onDragStart={dragTaskStart}
            onDragOver={dragTaskOver}
            className="d-flex flex-column task-card"
        >
            <h6 className="task-title">{task.title}</h6>
            <span className="p-2 col-example text-left task-details"
                  id={index}
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
                handleToggleEditTaskModal={handleToggleEditTaskModal}
            />

        </div>
    )
}