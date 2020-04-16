import React from 'react';
import '../stylesheets/Home.css';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="home-container">
        <div id="home-welcome">
          <h1>Welcome to FFXIV Strategizer!</h1>
          <button type="button">Create a Strategy</button>
        </div>
        <div id="home-strategies">
          <div className="header-flex">
            <h2>Featured Strategies</h2>
            <button type="button">Browse All</button>
          </div>
          <div className="strategy-list">
            <img src="/default-user-temp.png" />
            <img src="/default-user-temp.png" />
            <img src="/default-user-temp.png" />
            <img src="/default-user-temp.png" />
            <img src="/default-user-temp.png" />
            <img src="/default-user-temp.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;