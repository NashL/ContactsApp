class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {action: this.props.action}
    }

    componentDidMount(){
        if (this.props.method == 'PUT') {
            this.setState((prevState, props) => ({
                action: prevState.action + '/' + props.contact.id
            }));
        }
    }

    handleClick() {
        fetch( this.state.action,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            method: this.props.method,
            body: JSON.stringify({
                id: this.props.contact.id,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                company: this.state.company,
                bod: this.state.bod,
            })
        })
        .then(data => {
            console.log(data);
            window.location="/contacts";
        })
    }

    render () {
        var contact = this.props.contact;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-12">
                        <h1> {this.props.title} </h1>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" id="name" defaultValue={contact.name}
                                   onChange={ (e) => this.setState({ name: e.target.value }) }/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" id="email" defaultValue={contact.email}
                                   onChange={ (e) => this.setState({ email: e.target.value }) }/>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" placeholder="Phone" id="phone" defaultValue={contact.phone}
                                   onChange={ (e) => this.setState({ phone: e.target.value }) }/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Address" id="address" defaultValue={contact.address}
                                   onChange={ (e) => this.setState({ address: e.target.value }) }/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Company" id="company" defaultValue={contact.company}
                                   onChange={ (e) => this.setState({ company: e.target.value }) }/>
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" placeholder="Birthdate" id="bod" defaultValue={contact.bod}
                                   onChange={ (e) => this.setState({ bod: e.target.value }) }/>
                        </div>
                        <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}


