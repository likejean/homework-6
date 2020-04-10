import React, { useState, useEffect, useCallback } from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';
import InputForm from './InputForm';
import TitleInput from "./TitleInput";
import DescriptionTaskInput from "./DescriptionTaskInput";


export default ({ createList }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [delegateName, setDelegateName] = useState({
        first_name: "",
        last_name: ""
    });
    const [createTask, setCreateTask] = useState({});

    const handleTaskTitleChange = e => setTaskTitle(e.target.value);
    const handleTaskDescriptionChange = e => setTaskDescription(e.target.value);
    const handleDelegateNameChange = (attribute, value) => {
        if (attribute === "first") setDelegateName({...delegateName, first_name: value});
        if (attribute === "last") setDelegateName({...delegateName, last_name: value});
    }

    const handleStoreTaskItem = () => {
        setCreateTask({
            ...createTask,
            title: taskTitle,
            description: taskDescription,
            first_name: delegateName.first_name,
            last_name: delegateName.last_name
        });
    };

    const stableDispatch = useCallback(createList, []);
    useEffect(() => {
        stableDispatch(createTask);
    },[stableDispatch, createTask]);


    const handleToggleModal = () => setModalButtonClick(!modalButtonClick);

return (
    <MDBContainer>
        <MDBBtn onClick={handleToggleModal}>CREATE TASK</MDBBtn>
        <MDBModal isOpen={modalButtonClick} toggle={handleToggleModal}>
            <MDBModalHeader toggle={handleToggleModal}>Task Form</MDBModalHeader>
            <MDBModalBody>
                <TitleInput titleInput={handleTaskTitleChange} title={taskTitle} onChange={handleTaskTitleChange}/>
                <DescriptionTaskInput description={taskDescription}
                                      descriptionInputChange={handleTaskDescriptionChange}/>
                <InputForm fullname={delegateName} handleDelegateNameChange={handleDelegateNameChange}/>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                <MDBBtn color="primary" onClick={handleStoreTaskItem}>Create Task</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
);
}
