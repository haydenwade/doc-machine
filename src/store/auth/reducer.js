import * as actions from './actions';
import initialState from './initial-state';

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      newState.isFetching = true;
      newState.isAuthenticated = false;
      newState.user = action.payload.creds;
      return newState;
    case actions.LOGIN_SUCCESS:
      newState.isFetching = false;
      newState.isAuthenticated = true;
      newState.errorMessage = ''
      return newState;
    case actions.LOGIN_FAILURE:
      newState.isFetching = false;
      newState.isAuthenticated = false;
      newState.errorMessage = action.payload.message;
      return newState;
    case actions.LOGOUT_SUCCESS:
      newState.isFetching = true;
      newState.isAuthenticated = false;
      return newState;
    default:
      return state;
  }
}