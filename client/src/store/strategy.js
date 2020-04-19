import axios from 'axios';

const initialState = {
  allStrategies: [],
  singleStrategy: {}
}

// action constants

const SET_STRATEGIES = 'SET_STRATEGIES';
const SET_SINGLE_STRATEGY = 'SET_SINGLE_STRATEGY';

// action creators

const setStrategies = strats => ({
  type: SET_STRATEGIES,
  strats
});

const setSingleStrategy = strat => ({
  type: SET_SINGLE_STRATEGY,
  strat
});

// thunks

export const fetchStrategies = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/strategies');
    dispatch(setStrategies(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const fetchSingleStrategy = stratId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/strategies/${stratId}`);
    dispatch(setSingleStrategy(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const addStrategy = strat => async dispatch => {
  try {
    const {data} = await axios.post('/api/strategies', strat);
    dispatch(setSingleStrategy(data));
  } 
  catch (error) {
    console.error(error);
  }
}

// reducer

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_STRATEGIES:
      return {...state, allStrategies: action.strats};
    case SET_SINGLE_STRATEGY:
      return {...state, singleStrategy: action.strat};
    default:
      return state;
  }
}

export default reducer;