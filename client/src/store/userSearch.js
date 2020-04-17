import axios from 'axios';

const initialState = {
  allUsers: [],
}

const SET_USERS = 'SET_USERS';

const setUsers = users => ({
  type: SET_USERS,
  users
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

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USERS:
      return {...state, allUsers: action.users};
    default:
      return state;
  }
}

export default reducer;