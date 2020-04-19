import React from "react";
import { MDBInput } from 'mdbreact';
import "./style.css";

export default ({ boardOrderChange, order }) => {
    return (
        <MDBInput label="Enter Board Order" name='board_order' type="text" value={order} onChange={boardOrderChange}/>
    );
}

