class ContactListWrapper extends React.Component {
  render () {
    return (
        <div className="container-fluid">
            <a className=" margin-bot btn btn-success" href="/contacts/new" role="button">Add Contact</a>
            <ContactList/>
        </div>
    );
  }
}


