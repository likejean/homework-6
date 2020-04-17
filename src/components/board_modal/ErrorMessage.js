import React from 'react';
import { MDBContainer, MDBAlert } from 'mdbreact';

export default ({ error }) => (
        <MDBContainer>
            <MDBAlert color="danger" >
                {error}
            </MDBAlert>
        </MDBContainer>
    );

