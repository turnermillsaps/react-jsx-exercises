let ListGroupItem = () => {
    return <span>
        <ul className="list-group">
            <li className="list-group-item"><a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></li>
        </ul>
    </span>
}

let ListGroup = () => {
    return <span>
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
    </span>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))