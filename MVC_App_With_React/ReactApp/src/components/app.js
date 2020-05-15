import React from 'react';
import ReactDOM from 'react-dom';
import { CommentBox } from './CommentBox.jsx';

const urls = {
  commentsUrl: 'http://localhost:64222/comments',
  submitUrl: 'http://localhost:64222/comments/new'
}

function App() {
  return (
    <CommentBox initialData={null} url={urls.commentsUrl} submitUrl={urls.submitUrl} pollInterval={2000} />
  );
}

const wrapper = document.getElementById("content");
wrapper && ReactDOM.render(<App />, wrapper);