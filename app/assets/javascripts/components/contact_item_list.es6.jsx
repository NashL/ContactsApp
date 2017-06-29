class ContactItemList extends React.Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(id){
        window.location="/contacts/"+id;
    }

    handleDelete(id){
        fetch('/contacts/' + id,{
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: 'DELETE',
        })
        .then(data => {
            console.log(data);
            window.location="/contacts";
        })
    }

    render () {
      const contact = this.props.contact;
    return (
        <tr>
            <td> {contact.name}</td>
            <td> {contact.email}</td>
            <td> {contact.phone}</td>
            <td> {contact.address}</td>
            <td> {contact.company}</td>
            <td> {contact.bod}</td>
            <td>
                <button title="Edit" className="btn btn-primary btn-default btn-sm"
                    onClick={this.handleEdit.bind(this, contact.id)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
            </td>
            <td>
                <button title="Remove" className="btn btn-danger btn-default btn-sm"
                    onClick={this.handleDelete.bind(this,contact.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
        </tr>
    );
    }
    }


