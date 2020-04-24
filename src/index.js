import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as AlertProvider} from 'react-alert';
import App from './App';
import {options} from './helpers/AlertOptions';
import AlertTemplate from 'react-alert-template-basic';

ReactDOM.render(
        <AlertProvider template={AlertTemplate} {...options}>
            <App/>
        </AlertProvider>,
    document.getElementById('root'));

