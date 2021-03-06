import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/layout';
import './index.css';

const content = <React.StrictMode><Layout/></React.StrictMode>;

ReactDOM.render(content, document.getElementById('root'));