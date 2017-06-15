class NavBarItemList extends React.Component {
  render () {

    return (
        <li className="nav-item active">
            <a className="nav-link" href={this.props.path}>{this.props.value} </a>
        </li>
    );
  }
}


