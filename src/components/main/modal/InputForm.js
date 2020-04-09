import React from "react";
import { MDBInputGroup, MDBInput } from "mdbreact";

export default () => {
    return (
        <MDBInputGroup
            prepend="Delegated to: "
            inputs={
                <>
                    <MDBInput noTag type="text" />
                    <MDBInput noTag type="text" />
                </>
            }
        />
    );
}