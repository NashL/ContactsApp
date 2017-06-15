class NavBar extends React.Component {
  render () {
      list =[
          {
              path: '/',
              value: 'Home',
              acc: true
          },
          {
              path: '/contacts',
              value: 'Contacts',
              acc: false
          },
          {
              path: '/about',
              value: 'About',
              acc: true
          }

      ];
      console.log(this.props.user_signed_in);
      let sign_actions = null;
      if (this.props.user)
          sign_actions = <a className="navbar-brand" href="users/sign_out" data-method="delete" rel="nofollow"> Sign Out</a>;
      else
          sign_actions=
              <form className="form-inline">
                  <a className="navbar-brand" href="users/sign_in" data-method="get" rel="nofollow"> Sign In</a>
                  <a className=" navbar-brand" href="users/sign_up" data-method="get" rel="nofollow"> Sign Up</a>
              </form>;

    return (

        <nav className="navbar navbar-toggleable-md bg-inverse navbar-inverse">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" >
                <span className="navbar-toggler-icon"></span>

            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <NavBarList
                   user_signed_in={this.props.user_signed_in}
                   user={this.props.user}
                   list={list}
               />
                {sign_actions}
            </div>
        </nav>
    );
  }
}


