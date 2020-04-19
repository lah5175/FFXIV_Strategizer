import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {me} from './store';

import logo from './logo.svg';
import './stylesheets/App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import SingleUser from './components/SingleUser';
import Home from './components/Home';
import About from './components/About';
import FormSelect from './components/forms/FormSelect';
import BugReport from './components/forms/BugReport';
import GeneralForm from './components/forms/GeneralForm';
import Community from './components/Community';
import Strategy from './components/strategy_components/Strategy';
import StratContainer from './components/strategy_components/StratContainer';

class App extends React.Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div id="App">
        <Route path="/" component={Header}/>
        <div id="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/users/:userId" component={SingleUser} />
            <Route exact path="/contact" component={FormSelect} />
            <Route path="/contact/bugs" component={BugReport} />
            <Route path="/contact/business" component={GeneralForm} />
            <Route path="/contact/questions" component={GeneralForm} />
            <Route path="/contact/suggestions" component={GeneralForm} />
            <Route path="/community" component={Community} />
            <Route path="/strategies/create" component={Strategy} />
            <Route path="/strategies/:stratId" component={StratContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(me()),
})

export default connect(null, mapDispatchToProps)(App);
