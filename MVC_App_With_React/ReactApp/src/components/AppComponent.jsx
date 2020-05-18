import React from 'react';
import { CommentBox } from './CommentBox.jsx';
import {
  Switch,
  Route,
  Link,
  StaticRouter,
  BrowserRouter,
  Redirect
} from "react-router-dom"

export function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}

const urls = {
  commentsUrl: 'http://localhost:64222/api/comments',
  submitUrl: 'http://localhost:64222/api/comments/new'
}

export class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.routerBasename = "/react";
  }
  
  render () {
    const app = (
      <div>
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
        <Route
              exact
              path="/"
              render={() => <Redirect to="/home" />}
          />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/comments">
            <CommentBox initialData={null} url={urls.commentsUrl} submitUrl={urls.submitUrl} pollInterval={2000} />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    );

  if (typeof window === 'undefined') {
    return (
        <StaticRouter
            context={this.props.context}
            location={this.props.location}
            basename={this.routerBasename}
        >
            {app}
        </StaticRouter>
    );
  } else {
    return (<BrowserRouter basename={this.routerBasename}>{app}</BrowserRouter>);
  }
  }
}