import React from 'react';
import logo from './logo.svg';
import './stylesheets/App.css';

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
      </div>
    </div>
  );
}

export default App;
