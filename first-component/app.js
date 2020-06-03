let FirstComponent = () => {
    let windowsImage = (
            <div class="row" style="">
                <div className="col-3" style="color:orange"></div>
                <div className="col-3" style="color:green"></div>
                <div className="col-3" style="color:blue"></div>
                <div className="col-3" style="color:yellow"></div>
            </div>
    )
    return <span><img src="https://www.channelweb.co.uk/api/v1/wps/993bb81/daa6fb74-bb2f-48c9-a399-464612d8252a/2/windows-logo-580x358.jpg"></img></span>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))