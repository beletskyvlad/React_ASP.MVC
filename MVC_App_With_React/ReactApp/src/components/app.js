import React from 'react';
import ReactDOM from 'react-dom';
import { CommentBox } from './CommentBox.jsx';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const urls = {
  commentsUrl: 'http://localhost:64222/comments',
  submitUrl: 'http://localhost:64222/comments/new'
}

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routerBasename = "/react"; // url segment for the view where the app is rendered
  }
  
  render () {
    return (
      <BrowserRouter basename={this.routerBasename}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/comments">
            <CommentBox initialData={null} url={urls.commentsUrl} submitUrl={urls.submitUrl} pollInterval={2000} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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