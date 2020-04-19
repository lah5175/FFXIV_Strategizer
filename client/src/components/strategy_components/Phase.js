import React from 'react';
import {connect} from 'react-redux';
import '../../stylesheets/Sidebar.css';
import { addPhaseThunk, updatePhaseThunk, deletePhaseThunk } from '../../store';

class Phase extends React.Component {
  constructor() {
    super();
    this.state = {
      edit: false,
      name: ''
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleAddPhase = this.handleAddPhase.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.setState({edit: true});
  }

  handleChangeName(event) {
    if (event.key === "Enter") {
      this.props.updatePhase({...this.props.phase, name: event.target.value});
      this.setState({edit: false})
    }
  }

  handleAddPhase() {
    this.props.addPhase(this.props.stratId);
  }

  handleDelete() {
    this.props.deletePhase(this.props.phase.id);
  }

  render() {
    return (
      <div className="phase-div">
        {this.state.edit
          ? <input type="text" defaultValue={this.props.phase.name} onKeyPress={this.handleChangeName} />
          : <h3 onClick={this.handleEdit}>{this.props.phase.name}</h3>
        }

        <button type="button" onClick={this.handleAddPhase}>New Phase</button>
        <button type="button">New Step</button>
        <button type="button" onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stratId: state.strategy.singleStrategy.id
})

const mapDispatchToProps = dispatch => ({
  addPhase: (stratId) => dispatch(addPhaseThunk(stratId)),
  updatePhase: (phase) => dispatch(updatePhaseThunk(phase)),
  deletePhase: (phaseId) => dispatch(deletePhaseThunk(phaseId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Phase)