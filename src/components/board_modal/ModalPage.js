import React, {useState, useEffect, useCallback} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput} from 'mdbreact';
import OrderInput from "./OrderInput";

export default ({ createBoard }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [boardTitle, setBoardTitle] = useState("");
    const [boardOrder, setBoardOrder] = useState(0);
    const [createNewBoard, setCreateNewBoard] = useState({});

    const handleStoreBoardItem = () => {
        setCreateNewBoard({
            ...createNewBoard,
            title: boardTitle,
            order: boardOrder
        });
        setModalButtonClick(!modalButtonClick);
    };
    const handleBoardTitleChange = e => setBoardTitle(e.target.value);

    const handleBoardOrderChange = e => {
        let value = e.target.value;
        setBoardOrder(value);
    }


    const stableDispatch = useCallback(createBoard, []);

    useEffect(() => {
        stableDispatch(createNewBoard);
    }, [stableDispatch, createNewBoard]);


    const handleToggleModal = () => {
        setBoardTitle('');
        setBoardOrder(0);
        setModalButtonClick(!modalButtonClick);
    }

    return (
        <MDBContainer className=''>
            <div className='start-modal-button-wrapper row align-items-center justify-content-center'>
                <MDBBtn className='start-modal-button' onClick={handleToggleModal}>CREATE BOARD</MDBBtn>
            </div>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleModal}>
                <MDBModalHeader toggle={handleToggleModal}>Board Form</MDBModalHeader>
                <MDBModalBody>
                    <div className="form-group">
                        <MDBInput label="Enter Board Title" type='text' value={boardTitle} onChange={handleBoardTitleChange} size="md" />
                        <OrderInput order={boardOrder} boardOrderChange={handleBoardOrderChange}/>
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn className='row' color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                    <MDBBtn className='row' color="primary" onClick={handleStoreBoardItem}>Create Board</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}
