import { CommentList, CommentForm } from "./CommentComponents.jsx";
import React, { Component } from "react";

export class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.initialData };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    componentDidMount() {
        this.state.data || this.loadCommentsFromServer();
        this.intervalId = window.setInterval(
            () => this.loadCommentsFromServer(),
            this.props.pollInterval
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadCommentsFromServer() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }

    handleCommentSubmit(comment) {
        const comments = this.state.data;
        comment.Id = comments.length + 1;
        const newComments = comments.concat([comment]);
        this.setState({ data: newComments });

        const data = JSON.stringify({ Author: comment.Author, Text: comment.Text });

        const xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onload = () => this.loadCommentsFromServer();
        xhr.send(data);
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
}