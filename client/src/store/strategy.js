import axios from 'axios';

const initialState = {
  allStrategies: [],
  singleStrategy: {},
  phase: {}
}

// action constants

const SET_STRATEGIES = 'SET_STRATEGIES';
const SET_SINGLE_STRATEGY = 'SET_SINGLE_STRATEGY';
const ADD_PHASE = 'ADD_PHASE';
const UPDATE_PHASE = 'UPDATE_PHASE';
const DELETE_PHASE = 'DELETE_PHASE';
const SELECT_PHASE = 'SELECT_PHASE';

// action creators

const setStrategies = strats => ({
  type: SET_STRATEGIES,
  strats
});

const setSingleStrategy = strat => ({
  type: SET_SINGLE_STRATEGY,
  strat
});

const addPhase = phase => ({
  type: ADD_PHASE,
  phase
})

const updatePhase = phase => ({
  type: UPDATE_PHASE,
  phase
})

const deletePhase = phaseId => ({
  type: DELETE_PHASE,
  phaseId
})

export const selectPhase = phase => ({
  type: SELECT_PHASE,
  phase
})

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

export const addPhaseThunk = stratId => async dispatch => {
  try {
    const {data} = await axios.post(`/api/strategies/${stratId}/phase`);
    dispatch(addPhase(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const updatePhaseThunk = phase => async dispatch => {
  try {
    const {data} = await axios.put(`/api/strategies/phases/${phase.id}`, phase);
    dispatch(updatePhase(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const deletePhaseThunk = phaseId => async dispatch => {
  try {
    await axios.delete(`/api/strategies/phases/${phaseId}`);
    dispatch(deletePhase(phaseId));
  } 
  catch (error) {
    console.error(error);
  }
}

export const getPhaseThunk = phaseId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/strategies/phases/${phaseId}`);
    dispatch(selectPhase(data));
  } 
  catch (error) {
    console.error(error);
  }
}

export const addStepThunk = (stratId, phaseId, stepId) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/strategies/${stratId}/phases/${phaseId}/steps/${stepId}`);
    console.log(data)
    dispatch(updatePhase(data));
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
    case ADD_PHASE:
      const addedPhaseStrat = {...state.singleStrategy, phases: [...state.singleStrategy.phases, action.phase]};
      return {...state, singleStrategy: addedPhaseStrat};
    case UPDATE_PHASE:
      let updatedPhaseStrat = {...state.singleStrategy};
      updatedPhaseStrat.phases = updatedPhaseStrat.phases.map(phase => phase.id === action.phase.id ? action.phase : phase);
      return {...state, singleStrategy: updatedPhaseStrat, phase: action.phase};
    case DELETE_PHASE:
      let deletedPhaseStrat = {...state.singleStrategy};
      deletedPhaseStrat.phases = deletedPhaseStrat.phases.filter(phase => phase.id !== action.phaseId);
      return {...state, singleStrategy: deletedPhaseStrat};
    case SELECT_PHASE:
      return {...state, phase: action.phase};
    default:
      return state;
  }
}

export default reducer;