import axios from 'axios';

const initialState = {};

// action constants

const SET_LOGGED_IN = 'SET_LOGGED_IN';

// action creators

const setLoggedIn = user => ({
  type: SET_LOGGED_IN,
  user
});

// thunks

export const fetchLoggedIn = (uid, password) => async dispatch => {
  try {
    const {data} = await axios.post('/api/users/login', {uid, password});
    dispatch(setLoggedIn(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const createNewUser = userData => async dispatch => {
  try {
    const {data} = await axios.post('/api/users/signup', userData);
    dispatch(setLoggedIn(data));
  }
  catch (error) {
    console.error(error);
  }
}

// user reducer

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGGED_IN:
      return action.user;
    default:
      return state;
  }
}

export default reducer;