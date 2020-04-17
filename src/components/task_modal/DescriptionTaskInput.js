import React from 'react';
import { MDBInput, MDBContainer } from 'mdbreact';

export default ({ description, descriptionInputChange }) =>
    <MDBContainer>
        <MDBInput
            value={description}
            name='task-description'
            onChange={descriptionInputChange}
            type="textarea"
            label="Task Description"
            outline
        />
    </MDBContainer>
