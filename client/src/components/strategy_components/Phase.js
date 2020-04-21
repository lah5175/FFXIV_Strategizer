import React from 'react';
import {connect} from 'react-redux';
import '../../stylesheets/Sidebar.css';
import { addPhaseThunk, updatePhaseThunk, deletePhaseThunk, addStepThunk, getPhaseThunk } from '../../store';

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
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAddStep = this.handleAddStep.bind(this);
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

  handleSelect() {
    this.props.getPhase(this.props.phase.id);
  }

  handleAddStep() {
    let nextStep = 1;
    if (this.props.steps) nextStep = this.props.steps.length + 1;
    this.props.addStep(this.props.stratId, this.props.phase.id, nextStep)
  }

  render() {
    const selected = this.props.phaseId === this.props.phase.id;

    return (
      <div className="phase-container">
        <div className={selected ? "phase-selected" : "phase-div"} onClick={this.handleSelect}>
          {this.state.edit
            ? <input type="text" defaultValue={this.props.phase.name} onKeyPress={this.handleChangeName} />
            : <h3 onClick={this.handleEdit}>{this.props.phase.name}</h3>
          }
          <div className="phase-btns">
            <button type="button" onClick={this.handleAddPhase}>New Phase</button>
            <button type="button" onClick={this.handleAddStep}>New Step</button>
            <button type="button" onClick={this.handleDelete}>X</button>
          </div>
        </div>
        {
          selected &&
           (
              <div className="steps">
                {this.props.steps.map(step => {
                  return <div key={`step${step.id}`} className="step-div">{step.number}</div>
                })}
              </div>
            )
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  stratId: state.strategy.singleStrategy.id,
  steps: state.strategy.phase.steps,
  phaseId: state.strategy.phase.id,
})

const mapDispatchToProps = dispatch => ({
  addPhase: (stratId) => dispatch(addPhaseThunk(stratId)),
  updatePhase: (phase) => dispatch(updatePhaseThunk(phase)),
  deletePhase: (phaseId) => dispatch(deletePhaseThunk(phaseId)),
  addStep: (stratId, phaseId, stepId) => dispatch(addStepThunk(stratId, phaseId, stepId)),
  getPhase: (phaseId) => dispatch(getPhaseThunk(phaseId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Phase)