import React from 'react';
import '../../stylesheets/Sidebar.css';

const Step = props => {
  return (
    <div className="step-div">
      {props.step.number}
    </div>
  )
}

export default Step;