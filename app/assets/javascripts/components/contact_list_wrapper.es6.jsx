class ContactListWrapper extends React.Component {
  render () {
    return (
        <div className="container">
            <a className=" margin-bot btn btn-success btn-lg" href="/contacts/new" role="button">Add Contact</a>
            <ContactList/>
        </div>
    );
  }
}


