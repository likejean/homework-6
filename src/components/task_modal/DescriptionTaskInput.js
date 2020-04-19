import React from 'react';
import { MDBInput, MDBContainer } from 'mdbreact';

export default ({ description, descriptionInputChange }) =>
    <MDBContainer className='task-description'>
        <MDBInput
            value={description}
            name='task_description'
            onChange={descriptionInputChange}
            type="textarea"
            label="Task Description"
            outline
        />
    </MDBContainer>
