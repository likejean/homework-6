import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import InputForm from './InputForm';
import TitleInput from "./TitleInput";

export default () => {
    const [modalButtonClick, setModalButtonClick] = useState(false);

    const handleToggleModal = () => {
        setModalButtonClick(!modalButtonClick);
    }

    return (
        <MDBContainer>
            <MDBBtn onClick={handleToggleModal}>CREATE TASK</MDBBtn>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleModal}>
                <MDBModalHeader toggle={handleToggleModal}>Task Form</MDBModalHeader>
                <MDBModalBody>
                    <TitleInput/>
                    <MDBInput type="textarea" label="Task Description" outline />
                    <InputForm/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );

}
