import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import LoginForm from "./LoginForm";

export default ({ userLoginAuth }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);

    const handleToggleModal = () => setModalButtonClick(!modalButtonClick);
    return (
        <>
            <MDBBtn className='login-modal-button' onClick={handleToggleModal}>LOGIN</MDBBtn>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleModal}>
                <MDBModalHeader
                    toggle={handleToggleModal}
                >
                    Login Form
                </MDBModalHeader>
                <MDBModalBody>
                    <LoginForm
                        userLoginAuth={userLoginAuth}
                        handleToggleModal={handleToggleModal}
                    />
                </MDBModalBody>
            </MDBModal>
        </>
    );
};
