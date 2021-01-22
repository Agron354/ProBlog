import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/layout';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Layout/>
    </React.StrictMode>,
    document.getElementById('body')
);