﻿class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: this.props.initialData };
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
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

        const data = new FormData();
        data.append('Author', comment.Author);
        data.append('Text', comment.Text);

        const xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = () => this.loadCommentsFromServer();
        xhr.send(data);
    }
    componentDidMount() {
        window.setInterval(
            () => this.loadCommentsFromServer(),
            this.props.pollInterval,
        );
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