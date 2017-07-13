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
        <table className="table table-striped table-hover table-responsive">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="hidden-xs-down">Email</th>
                    <th>Phone</th>
                    <th className="hidden-md-down">Address</th>
                    <th className="hidden-md-down">Company</th>
                    <th className="hidden-md-down">Birthday</th>
                    <th className="hidden-md-down">Age</th>
                    <th className="hidden-xs-down">Edit</th>
                    <th>Delete</th>
                    <th>Archive</th>
                </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    );
    }
}


