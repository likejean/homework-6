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
                    searchEditTask
                }) => {
    const [editTaskItems, setEditTaskItems] = useState({
        task_title: "",
        task_description: "",
        task_priority: false,
        first: "",
        last: ""
    });
    const [toggleTaskPriority, setToggleTaskPriority] = useState(true);
    const [changeEvent, setChangeEvent] = useState(false);

    const handleTogglePriorityTaskStatus = () => setToggleTaskPriority(!toggleTaskPriority);

    const handleEditTaskItemChange = e => {
        if (!changeEvent) setChangeEvent(true);

        if (e.target.name === "task_priority") {
            handleTogglePriorityTaskStatus();
            setEditTaskItems({
                ...editTaskItems,
                id: searchEditTask.id,
                board: searchEditTask.board,
                task_priority: e.target.checked
            });
        } else {
            setEditTaskItems({
                ...editTaskItems,
                id: searchEditTask.id,
                board: searchEditTask.board,
                [e.target.name]: e.target.value
            });
        }
        validateInput(e.target.value, e.target.name);
    };

    const handleEditTaskItemsSubmit = () => {
        submitNewTaskItems(editTaskItems);
        handleToggleEditTaskModal();
    };

    return (
        <MDBContainer>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleEditTaskModal}>
                <MDBModalHeader toggle={handleToggleEditTaskModal}>Task Edit Form</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput type='text' name='task_title' label="Edit Task Title" value={editTaskItems.title}
                              onChange={handleEditTaskItemChange}/>
                    {taskTitleError.errors && <ErrorMessage error={taskTitleError.errors}/>}
                    <MDBContainer className='task-description'>
                        <MDBInput
                            value={editTaskItems.description}
                            name='task_description'
                            onChange={handleEditTaskItemChange}
                            type="textarea"
                            label="Task Description"
                            outline
                        />
                    </MDBContainer>
                    {taskDescriptionError.errors && <ErrorMessage error={taskDescriptionError.errors}/>}

                    <div className="custom-control custom-checkbox">
                        <input
                            name="task_priority"
                            checked={toggleTaskPriority}
                            type="checkbox"
                            onChange={handleEditTaskItemChange}
                            className="custom-control-input"
                            id="priority_task"
                        />
                        <label className="custom-control-label" htmlFor="priority_task">This is Priority
                            Task
                        </label>
                    </div>

                    <MDBInput type='text' name='first' label="Edit Delegate First Name"
                              value={editTaskItems.first_name} onChange={handleEditTaskItemChange}/>
                    {firstNameError.errors && <ErrorMessage error={firstNameError.errors}/>}
                    <MDBInput type='text' name='last' label="Edit Delegate Last Name"
                              value={editTaskItems.last_name} onChange={handleEditTaskItemChange}/>
                    {lastNameError.errors && <ErrorMessage error={lastNameError.errors}/>}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={handleToggleEditTaskModal}>Close</MDBBtn>
                    <MDBBtn
                        disabled={!changeEvent || taskTitleError.inputStatus || taskDescriptionError.inputStatus || firstNameError.inputStatus || lastNameError.inputStatus}
                        color="primary"
                        onClick={handleEditTaskItemsSubmit}
                    >
                        Save changes
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
);
}