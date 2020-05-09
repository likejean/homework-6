import {MDBNotification} from 'mdbreact';
import React from "react";

export default ({ serverNote, resetServerNotes }) => {

    return (
        <MDBNotification
            autohide={8000}
            onClick={() => resetServerNotes()}
            bodyClassName="p-5 font-weight-bold white-text"
            className="stylish-color-dark"
            closeClassName="blue-grey-text"
            fade
            icon="bell"
            iconClassName="blue-grey-text"
            message={serverNote}
            show
            title="Server Notification"
            titleClassName="elegant-color-dark white-text"
        />
    )
}
