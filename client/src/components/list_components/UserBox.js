import React, { useReducer } from 'react';
import '../../stylesheets/listItems.css';

const UserBox = props => {
  return (
    <div className="user-box">
      <img className="user-small" src={props.user.imageUrl} />
      <div>
        <p>{props.user.username}</p>
        <p>{props.user.server}</p>
      </div>
    </div>
  )
}

export default UserBox;