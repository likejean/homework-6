import React from 'react';
import {MDBBtn, MDBBtnGroup} from "mdbreact";

export default ({task: {board, id}, moveTask}) => {
    return (
        <MDBBtnGroup size="sm" className="mb-4">
            <MDBBtn
                disabled={`left-${board}` === 'left-todo'}
                color="danger"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    name={`left-${board}`}
                    className="fa fa-angle-double-left"
                    aria-hidden="true"
                >
                </span>
            </MDBBtn>
            <MDBBtn color="pink"><i name="hidden" className="fas fa-eye-slash" aria-hidden="true"></i></MDBBtn>
            <MDBBtn color="pink"><i name="delete" className="fas fa-trash-alt" aria-hidden="true"></i></MDBBtn>
            <MDBBtn
                disabled={`right-${board}` === 'right-done'}
                color="danger"
            >
                <span
                    id={id}
                    onClick={moveTask}
                    name={`right-${board}`}
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                >
                </span>
            </MDBBtn>
        </MDBBtnGroup>
    )
}