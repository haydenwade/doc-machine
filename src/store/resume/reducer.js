import * as actions from './actions';
import initialState from './initial-state';

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case actions.SET_RESUME_CONTENT:
      newState.content = action.payload.content;
      return newState;
    case actions.START_OVER:
      newState = Object.assign({},initialState);
      newState.education.length  = 0;
      newState.experience.length = 0;
      return newState;
    default:
      return state;
  }
}