import axios from 'axios';

const initialState = {
  allUsers: [],
  singleUser: {},
}

const SET_USERS = 'SET_USERS';
const SET_SINGLE_USER = 'SET_SINGLE_USER';
const CLEAR_SINGLE_USER = 'CLEAR_SINGLE_USER';

const setUsers = users => ({
  type: SET_USERS,
  users
})

const setSingleUser = user => ({
  type: SET_SINGLE_USER,
  user
})

export const clearSingleUser = () => ({
  type: CLEAR_SINGLE_USER,
})

// thunks

export const fetchUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users/');
    dispatch(setUsers(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const fetchSingleUser = uid => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${uid}`);
    dispatch(setSingleUser(data));
  } 
  catch (error) {
    console.error(error);
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return {...state, allUsers: action.users};
    case SET_SINGLE_USER:
      return {...state, singleUser: action.user};
    case CLEAR_SINGLE_USER:
      return {...state, singleUser: {}};
    default:
      return state;
  }
}

export default reducer;