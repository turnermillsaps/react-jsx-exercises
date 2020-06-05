let ProfilePic = () => {
    return <span>
        <img src="Shoresy.jpg"></img>
    </span>
}

let CommentBody = () => {
    return <span>
        <h1>Shoresy</h1>
    </span>
}

let Comment = () => {
    return <span>
        <ProfilePic />
        <CommentBody />
        <p>Give your balls a tug!</p>
    </span>
}

let Comments = () => {
    return <span>
        <Comment />
        <Comment />
        <Comment />
    </span>
}

ReactDOM.render(<Comments />, document.getElementById('root'))