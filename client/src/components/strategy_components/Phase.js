import React from 'react';
import '../../stylesheets/Sidebar.css';

class Phase extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      name: ''
    }

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState({edit: true});
  }

  changeName(event) {
    if (event.key === "Enter") {
      console.log('Thunk call goes here')
    }
  }

  render() {
    return (
      <div className="phase-div">
        {this.state.edit
          ? <input type="text" defaultValue={this.props.phase.name} onKeyPress={this.changeName} />
          : <h3 onClick={this.handleEdit}>{this.props.phase.name}</h3>
        }

        <button type="button">New Phase</button>
        <button type="button">New Step</button>
      </div>
    )
  }
}

export default Phase;