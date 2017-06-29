class NavBarList extends React.Component {
  constructor(props){
      super(props);
      this.state = {list: this.props.list.map((item) =>
      <NavBarItemList path={item.path} value={item.value} key={item.path} access={item.acc}/>
      )};

  }
  screamingList(){
      for(i=0; i <this.state.list.length; i++){
          if(this.props.user_signed_in == this.state.list[i].props.access)
              this.state.list.splice(i,i);
      }
  }
  render () {
      this.screamingList();
    return (
        <ul className="navbar-nav mr-auto">
            {this.state.list}
        </ul>
    );
  }
}


