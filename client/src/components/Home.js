import React from 'react';
import '../stylesheets/Home.css';

class Home extends React.Component {
  constructor() {
    super();

    this.handleCreateStrategy = this.handleCreateStrategy.bind(this);
  }

  handleCreateStrategy() {
    this.props.history.push('/strategies/create');
  }

  render() {
    return (
      <div id="home-container">
        <div id="home-welcome">
          <h1>Welcome to FFXIV Strategizer!</h1>
          <button type="button" onClick={this.handleCreateStrategy}>Create a Strategy</button>
        </div>
        <div id="home-strategies">
          <div className="header-flex">
            <h2>Featured Strategies</h2>
            <button type="button">Browse All</button>
          </div>
          <div className="strategy-list">
            <img src="/encounter_thumbnails/E5.png" />
            <img src="/encounter_thumbnails/E6.png" />
            <img src="/encounter_thumbnails/E7.png" />
            <img src="/encounter_thumbnails/E8.png" />
            <img src="/encounter_thumbnails/E1.png" />
            <img src="/encounter_thumbnails/E2.png" />
            <img src="/encounter_thumbnails/E3.png" />
            <img src="/encounter_thumbnails/E4.png" />
            <img src="/encounter_thumbnails/MEMORIA_MISERA.png" />
            <img src="/encounter_thumbnails/INNOCENCE.png" />
            <img src="/encounter_thumbnails/TITANIA.png" />
            <img src="/encounter_thumbnails/HADES.png" />
            <img src="/encounter_thumbnails/EPIC_OF_ALEXANDER_ULTIMATE.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;