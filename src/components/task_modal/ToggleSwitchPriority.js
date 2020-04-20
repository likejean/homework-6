import React, { Component } from "react";
import Switch from "react-switch";
import { MDBRow, MDBCol } from "mdbreact";

export default class SwitchButton extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
        this.props.switchPriority(checked);
    }

    render() {
        return (
            <label>
                <MDBRow>
                    <MDBCol md="2">
                        <Switch onChange={this.handleChange} checked={this.state.checked} />
                    </MDBCol>
                    <MDBCol md="10">
                        <span style={{ marginLeft: 15, fontSize: 20 }}>Please, select if this task is priority</span>
                    </MDBCol>
                </MDBRow>
            </label>
        );
    }
}