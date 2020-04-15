import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {me} from './store';

import logo from './logo.svg';
import './stylesheets/App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div id="App">
        <Route path="/" component={Header}/>
        <div id="app-content">
          <Sidebar />
          <Main />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(me()),
})

export default connect(null, mapDispatchToProps)(App);
