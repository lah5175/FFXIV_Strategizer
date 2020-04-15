import axios from 'axios';

const initialState = {};

// action constants

const SET_LOGGED_IN = 'SET_LOGGED_IN';
const LOG_OUT = 'LOG_OUT';

// action creators

const setLoggedIn = user => ({
  type: SET_LOGGED_IN,
  user,
});

const logOut = () => ({
  type: LOG_OUT,
})

// thunks

export const fetchLoggedIn = userData => async dispatch => {
  try {
    console.log('thunk')
    const {name, password} = userData;
    const {data} = await axios.post('/api/users/login', {name, password});
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

export const me = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users/me');
    dispatch(setLoggedIn(data || {}));
  } 
  catch (error) {
    console.error(error);
  }
}

export const logOutThunk = () => async dispatch => {
  try {
    await axios.post('/api/users/logout');
    dispatch(logOut());
  } 
  catch (error) {
    console.error(error)
  }
}

// user reducer

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGGED_IN:
      return action.user;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
}

export default reducer;