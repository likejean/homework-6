import React from 'react';
import { MDBInput } from 'mdbreact';

export default ( { description, descriptionInputChange }) => <MDBInput
    value={description}
    onChange={descriptionInputChange}
    type="textarea"
    label="Task Description"
    outline
/>