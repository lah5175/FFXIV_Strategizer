import React from 'react';
import {connect} from 'react-redux';
import '../stylesheets/SingleUser.css';

class SingleUser extends React.Component {
  constructor() {
    super();
  }

  render() {
    const user = this.props.user;

    return (
      <div id="single-user-container">
        <div id="user-div">
          <img src={user.imageUrl} />
          <div id="user-info">
            <h2>{user.username}</h2>
            <h2>Server: {user.server}</h2>
          </div>
        </div>
        <div id="user-strategies">
          <h1>Strategies</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(SingleUser);