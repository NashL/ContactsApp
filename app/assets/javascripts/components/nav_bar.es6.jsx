class NavBar extends React.Component {
  render () {
    return (
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
            <div id="container">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Link</a>
                </div>
            </div>
            </div>
        </nav>
    );
  }
}


