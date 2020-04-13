import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="app-content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
