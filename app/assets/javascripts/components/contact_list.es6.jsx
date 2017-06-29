class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state = {contacts: []};
    }
    componentWillMount(){
        fetch('./contacts.json',
            {
                credentials: 'same-origin',
                method: 'GET'
            })
            .then((response) => {
                    return response.json()
            })
            .then((response) =>{
                this.setState({ contacts: response })
            })
    }
    render () {
        var contacts = this.state.contacts.map((contact) => {
           return (
               <ContactItemList contact={contact} key={contact.id}/>
           )
        });
    return (
        <table className="table table-responsive table-hover" id="contact-table">
            <thead className="bg-info">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Company</th>
                    <th>Birthday</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    );
    }
}


