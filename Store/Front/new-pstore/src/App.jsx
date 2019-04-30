import React from 'react';
import NavigationBar from './navigation/navigation-bar';
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
        <NavigationBar/>
        <input onClick= {() => console.log(this.props)}/>
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


export default connect(mapStateToProps)(App);
