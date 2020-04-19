import React from "react";
import { MDBInputGroup, MDBInput } from "mdbreact";
export default ( { handleDelegateNameChange, fullname } ) => {

    const handleFirstNameInputChange = e => handleDelegateNameChange(e.target.getAttribute('name'), e.target.value);
    const handleLastNameInputChange  = e => handleDelegateNameChange(e.target.getAttribute('name'), e.target.value);

    return (
        <MDBInputGroup style={{ marginBottom: 10 }}
            prepend="Delegated to: "
            inputs={
                <>
                    <MDBInput noTag name="first" value={fullname.first} onChange={handleFirstNameInputChange} type="text" />
                    <MDBInput noTag name="last" value={fullname.last} onChange={handleLastNameInputChange} type="text" />
                </>
            }
        />
    );
}