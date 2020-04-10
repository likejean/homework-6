import React from "react";
import { MDBInputGroup, MDBInput } from "mdbreact";
export default ( { handleDelegateNameChange, fullname } ) => {

    const handleFirstNameInputChange = e => handleDelegateNameChange(e.target.getAttribute('name'), e.target.value);
    const handleLastNameInputChange  = e => handleDelegateNameChange(e.target.getAttribute('name'), e.target.value);


    return (
        <MDBInputGroup
            prepend="Delegated to: "
            inputs={
                <>
                    <MDBInput noTag name="first" value={fullname.first_name} onChange={handleFirstNameInputChange} type="text" />
                    <MDBInput noTag name="last" value={fullname.last_name} onChange={handleLastNameInputChange} type="text" />
                </>
            }
        />
    );
}