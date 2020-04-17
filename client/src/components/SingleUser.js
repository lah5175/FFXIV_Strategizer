import React from 'react';
import {connect} from 'react-redux';
import {fetchSingleUser, clearSingleUser} from '../store';
import '../stylesheets/SingleUser.css';

class SingleUser extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.userId);
  }

  componentWillUnmount() {
    this.props.clearSingleUser();
  }

  render() {
    const user = this.props.user;

    if (!user.id) {
      return (
        <div>Loading...</div>
      )
    }
    else {
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
}

const mapStateToProps = state => ({
  user: state.userSearch.singleUser,
})

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: uid => dispatch(fetchSingleUser(uid)),
  clearSingleUser: () => dispatch(clearSingleUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser);