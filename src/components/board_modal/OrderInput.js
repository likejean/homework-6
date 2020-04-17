import React from "react";
import { MDBInput } from 'mdbreact';
import "./style.css";

export default ({ boardOrderChange, order }) => {
        return (
            <MDBInput label="Enter Board Order" name='board-order' type="text" value={order} onChange={boardOrderChange} />
        );
    }

