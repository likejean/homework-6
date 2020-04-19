import React, {useState, useEffect, useCallback} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput} from 'mdbreact';
import OrderInput from "./OrderInput";
import ErrorMessage from "./ErrorMessage";
import { useAlert } from 'react-alert';
import ValidateUserBlankInput from '../../helpers/ValidateUserBlankInput';
import InsertionBoardSchema from "./InsertionBoardSchema";

export default ({ boardsSchema, createBoard, validateInput, errors: { boardOrderError, boardTitleError } }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [boardTitle, setBoardTitle] = useState("");
    const [boardOrder, setBoardOrder] = useState(0);
    const [createNewBoard, setCreateNewBoard] = useState({});
    const [newBoardPlaceOrder, setNewBoardPlaceOrder] = useState(1);

    const alert = useAlert();

    const handleStoreBoardItem = () => {
        if(ValidateUserBlankInput([boardTitle])){
            alert.error(<div style={{ color: 'red', fontSize: 15 }}>Please, Fill Blank Fields...</div>, {
                timeout: 5000,
                onOpen: () => {
                    console.log('hey')
                },
                onClose: () => {
                    console.log('closed')
                }
            });
        }
        else{
            setCreateNewBoard({
                ...createNewBoard,
                title: boardTitle,
                order: boardOrder
            });
            setModalButtonClick(!modalButtonClick);
            setNewBoardPlaceOrder(1);
        }
    };
    const handleBoardTitleChange = e => {
        const { value, name } = e.target;
        validateInput(value, name);
        setBoardTitle(e.target.value);
    }

    const handleBoardOrderChange = e => {
        const { value, name } = e.target;
        validateInput(value, name);
        setBoardOrder(value);
        setNewBoardPlaceOrder(value);
    }


    const stableDispatch = useCallback(createBoard, []);

    useEffect(() => {
        stableDispatch(createNewBoard);
    }, [stableDispatch, createNewBoard]);


    const handleToggleModal = () => {
        setBoardTitle('');
        setBoardOrder(1);
        setModalButtonClick(!modalButtonClick);
        setNewBoardPlaceOrder(1);
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
                        <MDBInput label="Enter Board Title" name='board_title' type='text' value={boardTitle} onChange={handleBoardTitleChange} size="md" />
                        {boardTitleError.errors && <ErrorMessage error={boardTitleError.errors}/>}
                        <InsertionBoardSchema newBoardPlaceOrder={+newBoardPlaceOrder} boardsSchema={boardsSchema}/>
                        <OrderInput order={boardOrder} boardOrderChange={handleBoardOrderChange}/>
                        {boardOrderError.errors && <ErrorMessage error={boardOrderError.errors}/>}
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn className='row' color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                    <MDBBtn disabled={boardOrderError.inputStatus || boardTitleError.inputStatus} className='row' color="primary" onClick={handleStoreBoardItem}>Create Board</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    );
}
