import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default ({ userLoginAuth, handleToggleModal }) => {

    const [userLoginCredentials, setUserLoginCredentials] = useState({
        email: '',
        password: ''
    });

    const handleUserLoginInputs = e => {
        const { name, value } = e.target;
        setUserLoginCredentials({
            ...userLoginCredentials,
            [name]: value
        });
    };

    const handleUserCredentialSubmit = () => {
        userLoginAuth({
            email: userLoginCredentials.email,
            password: userLoginCredentials.password
        });
        handleToggleModal();
    };

    return (
        <MDBContainer>
            <MDBRow center>
                <MDBCol md="6">
                    <div>
                        <h3 className="h4 text-center mb-4">SIGN IN</h3>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="defaultFormLoginEmailEx"
                            name='email'
                            className="form-control"
                            value={userLoginCredentials.email}
                            onChange={handleUserLoginInputs}
                        />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Your password
                        </label>
                        <input
                            type="password"
                            id="defaultFormLoginPasswordEx"
                            name='password'
                            className="form-control"
                            value={userLoginCredentials.password}
                            onChange={handleUserLoginInputs}
                        />
                        <div className="text-center mt-4">
                            <MDBBtn
                                onClick={handleUserCredentialSubmit}
                                color="indigo"
                                type="submit"
                            >
                                LOGIN
                            </MDBBtn>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

