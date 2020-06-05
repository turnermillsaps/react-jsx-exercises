let TextInput = () => {
    return <span>
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
    </span>
}

let YesNoRadio = () => {
    return <span>
        <input type="radio" id="yes"></input>
        <label for="yes">Yes</label>
        <input type="radio" id="no"></input>
        <label for="no">No</label>
    </span>
}

let SubmitButton = () => {
    return <span>Make this component render a styled button of type "submit"</span>
}

let Form = () => {
    return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))