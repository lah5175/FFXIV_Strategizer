import React from 'react';
import {Route} from 'react-router-dom';

import logo from './logo.svg';
import './stylesheets/App.css';
import Signup from './components/Signup';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div id="App">
      <Header />
      <div id="app-content">
        <Sidebar />
        <Main />
        <Route path="/signup" component={Signup} />
      </div>
    </div>
  );
}

export default App;
