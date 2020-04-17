import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../store';
import UserBox from './list_components/UserBox';
import '../stylesheets/community.css';

class Community extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const users = this.props.users;

    return (
      <div id="community-container">
        <h1>Community</h1>
        {users.length
        ? (
          <div id="user-list">
            {users.map(user => <UserBox key={user.id} user={user} />)}
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