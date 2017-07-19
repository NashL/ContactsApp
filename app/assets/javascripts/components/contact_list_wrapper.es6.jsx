class ContactListWrapper extends React.Component {
  render () {
      let button = "";
      if (this.props.title == "Contact List")
          button = <a className=" margin-bot btn btn-success" href="/contacts/new" role="button">Add Contact</a>;
    return (
        <div className="container-fluid">
            <h1> {this.props.title}</h1>
            {button}
            <ContactList action={this.props.action} title={this.props.title}/>
        </div>
    );
  }
}


