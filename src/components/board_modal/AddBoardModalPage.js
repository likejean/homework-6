import React, {useState, useEffect, useCallback} from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBRow, MDBContainer } from 'mdbreact';
import ErrorMessage from "./ErrorMessage";
import { useAlert } from 'react-alert';
import '../main/style.css';
import ValidateUserBlankInput from '../../helpers/ValidateUserBlankInput';

export default ({
                    setBoardOrderState,
                    addBoard,
                    validateInput,
                    boards,
                    errors: { boardOrderError, boardTitleError }
                }) => {
    const [modalButtonClick, setModalButtonClick] = useState(false);
    const [boardTitle, setBoardTitle] = useState("");
    const [createNewBoard, setCreateNewBoard] = useState({});

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
                order: boards.length
            });
            setModalButtonClick(!modalButtonClick);
            setBoardOrderState(boards.map(board => (
                    {
                        id: board.id,
                        order: board.order,
                        name: board.name
                    }
                ))
            );
        }
    };
    const handleBoardTitleChange = e => {
        const { value, name } = e.target;
        validateInput(value, name);
        setBoardTitle(e.target.value);
    }

    const stableDispatch = useCallback(addBoard, []);

    useEffect(() => {
        stableDispatch(createNewBoard);
    }, [stableDispatch, createNewBoard]);


    const handleToggleModal = () => {
        setBoardTitle('');
        setModalButtonClick(!modalButtonClick);
    }

    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBBtn className='addBoard' onClick={handleToggleModal}>
                        <i className="fas fa-plus fa-2x"/>
                    </MDBBtn>
                </MDBRow>
            </MDBContainer>
            <MDBModal isOpen={modalButtonClick} toggle={handleToggleModal}>
                <MDBModalHeader toggle={handleToggleModal}>Add Board</MDBModalHeader>
                <MDBModalBody>
                    <div className="form-group">
                        <MDBInput label="Enter Board Title" name='board_title' type='text' value={boardTitle} onChange={handleBoardTitleChange} size="md" />
                        {boardTitleError.errors && <ErrorMessage error={boardTitleError.errors}/>}
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn className='row' color="secondary" onClick={handleToggleModal}>Close</MDBBtn>
                    <MDBBtn
                        disabled={boardOrderError.inputStatus || boardTitleError.inputStatus}
                        className='row' color="primary"
                        onClick={handleStoreBoardItem}
                    >
                        Add Board
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </>
    );
}