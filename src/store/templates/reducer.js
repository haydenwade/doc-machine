import * as actions from './actions';
import initialState from './initial-state';

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case actions.FETCH_TEMPLATE_COMPLETE:
      newState.template = action.payload.template;
      return newState;
    default:
      return state;
  }
}