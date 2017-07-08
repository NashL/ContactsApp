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

    handleArchive(id){
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
        <tr className="click-able" onClick={this.handleEdit.bind(this, contact.id)}>
            <td> {contact.name}</td>
            <td className="hidden-xs-down"> {contact.email}</td>
            <td> {contact.phone}</td>
            <td className="hidden-md-down"> {contact.address}</td>
            <td className="hidden-md-down"> {contact.company }</td>
            <td className="hidden-md-down"> {contact.bod}</td>
            <td className="hidden-md-down"> {contact.age}</td>
            <td className="hidden-xs-down no-click-able">
                <button title="Edit" className="btn btn-outline-primary btn-default btn-sm click-able"
                    onClick={this.handleEdit.bind(this, contact.id)}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
            </td>
            <td className="text-center no-click-able">
                <button title="Remove" className="btn btn-outline-danger btn-default btn-sm click-able"
                    onClick={this.handleDelete.bind(this,contact.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </td>
            <td className="text-center no-click-able ">
                <button title="Archive" className="btn btn-outline-warning btn-default btn-sm click-able"
                    onClick={this.handleArchive.bind(this,contact.id)}>
                    <i className="fa fa-archive" aria-hidden="true"></i>
                </button>
            </td>
        </tr>
    );
    }
    }


