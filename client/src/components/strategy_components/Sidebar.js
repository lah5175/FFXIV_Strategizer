import React from 'react';
import Phase from './Phase';
import '../../stylesheets/Sidebar.css';

const Sidebar = props => {
  return (
    <div id="sidebar">
      {
        props.phases.map((phase, idx) => <Phase key={`phase${idx}`} phase={phase} />)
      }
    </div>
  )
}

export default Sidebar;