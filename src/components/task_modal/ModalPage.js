import React, {useState, useEffect, useCallback} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput} from 'mdbreact';
import InputForm from './InputForm';
import DescriptionTaskInput from "./DescriptionTaskInput";
import ErrorMessage from "../board_modal/ErrorMessage";
import ValidateUserBlankInput from '../../helpers/ValidateUserBlankInput';
import {useAlert} from 'react-alert';


export default ({
                    createTask,
                    resetErrors,
                    validateInput,
                    errors: {
                        taskTitleError,
                        taskDescriptionError,
                        firstNameError,
                        lastNameError
                    }
                }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [delegateName, setDelegateName] = useState({
        first: "",
        last: ""
    });
    const [createNewTask, setCreateNewTask] = useState({});

    const handleTaskTitleChange = e => {
        const {value, name} = e.target;
        validateInput(value, name);
        setTaskTitle(value);
    }
    const handleTaskDescriptionChange = e => {
        const {value, name} = e.target;
        validateInput(value, name);
        setTaskDescription(value);
    }
    const handleDelegateNameChange = (attribute, value) => {
        if (attribute === "first") {
            validateInput(value, attribute);
            setDelegateName({...delegateName, first: value});
        }
        if (attribute === "last") {
            validateInput(value, attribute);
            setDelegateName({...delegateName, last: value});
        }
    }

    const alert = useAlert();

    const handleStoreTaskItem = () => {
        if (ValidateUserBlankInput(
            [
                taskTitle,
                taskDescription,
                delegateName.first,
                delegateName.last
            ])) {
            alert.error(<div style={{color: 'red', fontSize: 15}}>Please, Fill Blank Fields...</div>, {
                timeout: 5000,
                onOpen: () => {
                    console.log('hey')
                },
                onClose: () => {
                    console.log('closed')
                }
            });
        } else {
            setCreateNewTask({
                ...createNewTask,
                task_title: taskTitle,
                task_description: taskDescription,
                first: delegateName.first,
                last: delegateName.last
            });
            setModalButtonClick(!modalButtonClick);
        }
    };

    const stableDispatch = useCallback(createTask, []);

    useEffect(() => {
        stableDispatch(createNewTask);
    }, [stableDispatch, createNewTask]);


    const handleToggleModal = () => {
        setTaskTitle('');
        setTaskDescription('');
        setDelegateName({
                first: "",
                last: ""
            }
        );
        setModalButtonClick(!modalButtonClick);
        resetErrors();
    }

    return (
        <MDBContainer className=''>
            <div className='start-modal-button-wrapper row align-items-center justify-content-center'>
                <MDBBtn className='start-modal-button' onClick={handleToggleModal}>CREATE TASK</MDBBtn>
            </div>
            <MDBModal style={{zIndex: 1}} isOpen={modalButtonClick} toggle={handleToggleModal}>
                <MDBModalHeader toggle={handleToggleModal}>Task Form</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput label="Enter Task Title" name='task_title' type='text' value={taskTitle}
                              onChange={handleTaskTitleChange} size="md"/>
                    {taskTitleError.errors && <ErrorMessage error={taskTitleError.errors}/>}
                    <DescriptionTaskInput
                        id='textArea'
                        description={taskDescription}
                        descriptionInputChange={handleTaskDescriptionChange}
                    />
                    {taskDescriptionError.errors && <ErrorMessage error={taskDescriptionError.errors}/>}
                    <InputForm fullname={delegateName} handleDelegateNameChange={handleDelegateNameChange}/>
                    {firstNameError.errors && <ErrorMessage error={firstNameError.errors}/>}
                    {lastNameError.errors && <ErrorMessage error={lastNameError.errors}/>}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn className='row' color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                    <MDBBtn
                        disabled={taskTitleError.inputStatus || taskDescriptionError.inputStatus || firstNameError.inputStatus || lastNameError.inputStatus}
                        className='row'
                        color="primary" onClick={handleStoreTaskItem}>Create Task</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}
