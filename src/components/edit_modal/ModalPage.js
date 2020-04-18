import React, {useState} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBInput, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import ErrorMessage from "../board_modal/ErrorMessage";

export default ({
                    handleToggleEditTaskModal,
                    errors: {
                        taskTitleError,
                        taskDescriptionError,
                        firstNameError,
                        lastNameError
                    },
                    modalButtonClick,
                    validateInput,
                    submitNewTaskItems,
                    editTask
                }) => {
    console.log(editTask.id);
    const [editTaskItems, setEditTaskItems] = useState({
        title: "",
        description: "",
        first_name: "",
        last_name: ""
    })

    const handleEditTaskItemChange = e => {
        setEditTaskItems({
            ...editTaskItems,
            id: editTask.id,
            board: editTask.board,
            [e.target.name]: e.target.value
        });
        validateInput(e.target.id, e.target.name);
    }
    const handleEditTaskItemsSubmit = () => {
        console.log(editTask)
        submitNewTaskItems(editTaskItems);
    }

    return (
        <MDBContainer>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleEditTaskModal}>
                <MDBModalHeader toggle={handleToggleEditTaskModal}>Task Edit Form</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput type='text' name='title' label="Edit Task Title" value={editTaskItems.title}
                              onChange={handleEditTaskItemChange}/>
                    {taskTitleError.errors && <ErrorMessage error={taskTitleError.errors}/>}
                    <MDBInput type='text' name='description' label="Edit Description" value={editTaskItems.description}
                              onChange={handleEditTaskItemChange}/>
                    <MDBInput type='text' name='first_name' label="Edit Delegate First Name"
                              value={editTaskItems.first_name} onChange={handleEditTaskItemChange}/>
                    <MDBInput type='text' name='last_name' label="Edit Delegate Last Name"
                              value={editTaskItems.last_name} onChange={handleEditTaskItemChange}/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={handleToggleEditTaskModal}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={handleEditTaskItemsSubmit}>Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}