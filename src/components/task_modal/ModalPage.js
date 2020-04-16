import React, {useState, useEffect, useCallback} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput} from 'mdbreact';
import InputForm from './InputForm';
import DescriptionTaskInput from "./DescriptionTaskInput";


export default ({ createTask }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [delegateName, setDelegateName] = useState({
        first_name: "",
        last_name: ""
    });
    const [createNewTask, setCreateNewTask] = useState({});

    const handleTaskTitleChange = e => setTaskTitle(e.target.value);
    const handleTaskDescriptionChange = e => setTaskDescription(e.target.value);
    const handleDelegateNameChange = (attribute, value) => {
        if (attribute === "first") setDelegateName({...delegateName, first_name: value});
        if (attribute === "last") setDelegateName({...delegateName, last_name: value});
    }

    const handleStoreTaskItem = () => {
        setCreateNewTask({
            ...createNewTask,
            title: taskTitle,
            description: taskDescription,
            first_name: delegateName.first_name,
            last_name: delegateName.last_name
        });
        setModalButtonClick(!modalButtonClick);
    };

    const stableDispatch = useCallback(createTask, []);

    useEffect(() => {
        stableDispatch(createNewTask);
    }, [stableDispatch, createNewTask]);


    const handleToggleModal = () => {
        setTaskTitle('');
        setTaskDescription('');
        setDelegateName({
                first_name: "",
                last_name: ""
            }
        );
        setModalButtonClick(!modalButtonClick);
    }

    return (
        <MDBContainer className=''>
            <div className='start-modal-button-wrapper row align-items-center justify-content-center'>
                <MDBBtn className='start-modal-button' onClick={handleToggleModal}>CREATE TASK</MDBBtn>
            </div>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleModal}>
                <MDBModalHeader toggle={handleToggleModal}>Task Form</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput label="Enter Task Title" type='text' value={taskTitle} onChange={handleTaskTitleChange} size="md" />
                    <DescriptionTaskInput
                        id='textArea'
                        description={taskDescription}
                        descriptionInputChange={handleTaskDescriptionChange}
                    />
                    <InputForm fullname={delegateName} handleDelegateNameChange={handleDelegateNameChange}/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn className='row' color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                    <MDBBtn className='row' color="primary" onClick={handleStoreTaskItem}>Create Task</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}