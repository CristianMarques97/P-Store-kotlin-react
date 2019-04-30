import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';

class UserInfoNavigation extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {  }
    }
    render() { 
        return ( 
            <div>{ this.props.userlogin.profile_icon !== "" ?
                <Avatar alt="Avatar do Usuário" src = ""/> :
                <Avatar>this.props.userLogin.name.charAt(0) + this.props.userLogin.lastname.charAt(0)</Avatar>
                }
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
      userlogin: state.userLogin,
    }
  };

export default connect(mapStateToProps)(UserInfoNavigation);