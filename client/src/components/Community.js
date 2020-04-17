import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../store';
import UserBox from './list_components/UserBox';
import '../stylesheets/community.css';

class Community extends React.Component {
  constructor() {
    super();

    this.handleUserClick = this.handleUserClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleUserClick(event, uid) {
    this.props.history.push(`/users/${uid}`)
  }

  render() {
    const users = this.props.users;

    return (
      <div id="community-container">
        <h1>Community</h1>
        {users.length
        ? (
          <div id="user-list">
            {users.map(user => <UserBox key={user.id} user={user} handleUserClick={this.handleUserClick} />)}
          </div>
        )
        : (<div>Loading...</div>)
      }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.userSearch.allUsers,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);