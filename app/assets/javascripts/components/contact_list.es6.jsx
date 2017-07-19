class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state = {contacts: []};
        this.removeContactFromDOM = this.removeContactFromDOM.bind(this);
        this.archiveContactFromDOM = this.archiveContactFromDOM.bind(this);
    }
    componentDidMount(){
        fetch(this.props.action + '.json',
            {
                credentials: 'same-origin',
                method: 'GET'
            })
            .then((response) => {
                    return response.json();
            })
            .then((response) =>{
                this.setState({ contacts: response })
            })
    }

    removeContactFromDOM(id) {
        const main = this;
        fetch('/contacts/' + id,{
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'DELETE',
        })
        .then(function (response) {
            return response;
        })
        .then(function (response) {
            var newContacts = main.state.contacts.filter((contact) => {
                return contact.id != id;
            });
            this.setState({ contacts: newContacts });
        })
    }

    archiveContactFromDOM(id){
        const main = this;
        fetch('/archive/' + id,{
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'POST',
        })
            .then(data => {
                console.log(data);
            })
            .then(function (response) {
                var newContacts = main.state.contacts.filter((contact) => {
                    return contact.id != id;
                });
                main.setState({ contacts: newContacts });
            })
    }


    render () {
        let archive_or_not = "Archive";
        if(this.props.title == "Archived Contact List")
            archive_or_not = "Restore";
        let contacts = this.state.contacts.map((contact) => {
           return (
               <ContactItemList contact={contact}
                key={contact.id}
                title={this.props.title}
                handleDelete={this.removeContactFromDOM} handleArchive={this.archiveContactFromDOM}/>
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
                    <th>{archive_or_not}</th>
                </tr>
            </thead>
            <tbody>
                {contacts}
            </tbody>
        </table>
    );
    }
}


