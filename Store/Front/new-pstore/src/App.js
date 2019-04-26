import React from 'react';
import {bindActionCreators} from 'redux';
import userLogin from './actions/logged-user-actions';
import './App.css';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }










  
  onUserLogin(event) {
    console.log(this.props)
    this.props.onUserLogin(event.target.value);
  }

}


const mapStateToProps = (state, props) => {
  return {
    userlogin: state.userLogin,
  }
};

const mapActionsToProps = (dispatch, props) => {
    return bindActionCreators({
      onUserLogin: userLogin,
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(App);
