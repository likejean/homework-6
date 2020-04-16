import React from "react";
import { MDBInput } from 'mdbreact';
import "./style.css";

export default ({ boardOrderChange, order }) => {
        return (
            <MDBInput type="number" value={order} onChange={boardOrderChange} />
        );
    }

