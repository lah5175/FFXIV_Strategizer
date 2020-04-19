import React from 'react';
import Phase from './Phase';
import '../../stylesheets/Sidebar.css';

const Sidebar = props => {
  return (
    <div id="sidebar">
      {
        props.phases.map(phase => <Phase phase={phase} />)
      }
    </div>
  )
}

export default Sidebar;