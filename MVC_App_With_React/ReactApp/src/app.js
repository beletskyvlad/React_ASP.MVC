import React from 'react';
import ReactDOM from 'react-dom';
import { AppComponent } from './components/AppComponent.jsx';
import ReactDOMServer from 'react-dom/server';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.AppComponent = AppComponent;