import React from 'react';
import ReactDOM from 'react-dom';
import { AppComponent } from './components/AppComponent.jsx';

//#region SSR
/* Uncomment to enable server-side rendering using ReactJS.NET with custom bundle*/
/* import ReactDOMServer from 'react-dom/server';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.AppComponent = AppComponent; */
//#endregion SSR

// remove the following when using SSR to render the app
const wrapper = document.getElementById("content");
wrapper && ReactDOM.render(<AppComponent />, wrapper);