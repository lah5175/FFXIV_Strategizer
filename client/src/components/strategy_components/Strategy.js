import React from 'react';
import {connect} from 'react-redux';
import {addStrategy} from '../../store';
import "../../stylesheets/Strategy.css";

const {E1S, E2S, E3S, E4S,
        E5S, E6S, E7S, E8S,
        E1N, E2N, E3N, E4N,
        E5N, E6N, E7N, E8N,
        MEMORIA_MISERA_EX, RUBY_WEAPON_EX, HADES_EX, INNOCENCE_EX, TITANIA_EX,
        EPIC_OF_ALEXANDER_ULTIMATE,} = require('../../constants');

class Strategy extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      encounter: 'misc',
      visibility: 'public',
      arena: 'square',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addStrategy(this.state);
  }

  render() {
    return (
      <div id="create-strategy-container">
        <h1>Create a New Strategy</h1>
        <form id="create-strategy-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Strategy Name</label>
            <div className="c-s-input-div">
              <input name="name" value={this.state.name} type="text" placeholder="Enter a name for your strategy" onChange={this.handleChange} />
            </div>
          </div>

          <div>
          <label htmlFor="encounter">Encounter</label>
            <div className="c-s-input-div">
              <select name="encounter" value={this.state.encounter} onChange={this.handleChange}>
                <option value="misc">None Selected</option>
                <optgroup label="ShB - Savage Raids">
                  <option value={E1S}>Eden's Gate: Resurrection (Savage)</option>
                  <option value={E2S}>Eden's Gate: Descent (Savage)</option>
                  <option value={E3S}>Eden's Gate: Inundation (Savage)</option>
                  <option value={E4S}>Eden's Gate: Sepulture (Savage)</option>
                  <option value={E5S}>Eden's Verse: Fulmination (Savage)</option>
                  <option value={E6S}>Eden's Verse: Furor (Savage)</option>
                  <option value={E7S}>Eden's Verse: Iconoclasm (Savage)</option>
                  <option value={E8S}>Eden's Verse: Refulgence (Savage)</option>
                </optgroup>
                <optgroup label="ShB - Normal Raids">
                  <option value={E1N}>Eden's Gate: Resurrection</option>
                  <option value={E2N}>Eden's Gate: Descent</option>
                  <option value={E3N}>Eden's Gate: Inundation</option>
                  <option value={E4N}>Eden's Gate: Sepulture</option>
                  <option value={E5N}>Eden's Verse: Fulmination</option>
                  <option value={E6N}>Eden's Verse: Furor</option>
                  <option value={E7N}>Eden's Verse: Iconoclasm</option>
                  <option value={E8N}>Eden's Verse: Refulgence</option>
                </optgroup>
                <optgroup label="ShB - Trials (Extreme)">
                  <option value={TITANIA_EX}>The Dancing Plague (Extreme)</option>
                  <option value={INNOCENCE_EX}>The Crown of the Immaculate (Extreme)</option>
                  <option value={HADES_EX}>Minstrel's Ballad: Hades's Elegy</option>
                  <option value={RUBY_WEAPON_EX}>Cinder Drift (Extreme)</option>
                  <option value={MEMORIA_MISERA_EX}>Memoria Misera (Extreme)</option>
                </optgroup>
                <optgroup label="Ultimate Raids">
                  <option value={EPIC_OF_ALEXANDER_ULTIMATE}>The Epic of Alexander (Ultimate)</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="visibility">Visibility</label>
            <div className="c-s-input-div">
              <select name="visibility" value={this.state.visibility} onChange={this.handleChange}>
                <option value="public">Public</option>
                <option value="group">Group/Friends</option>
                <option value="friend">Friends Only</option>
                <option value="private">Private</option> 
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="arena">Arena Shape</label>
            <div className="c-s-input-div">
              <select name="arena" value={this.state.arena} onChange={this.handleChange}>
                <option value="square">Square</option>
                <option value="circle">Circle</option>
              </select>
            </div>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addStrategy: (strat) => dispatch(addStrategy(strat))
})

export default connect(null, mapDispatchToProps)(Strategy);