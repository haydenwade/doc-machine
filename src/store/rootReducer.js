import { combineReducers } from 'redux';
// import auth from './auth/reducer';//TODO
import resume from './resume/reducer';
import templates from './templates/reducer';

export default function rootReducer(injectedReducers) {
    return combineReducers({
        // auth,
        resume,
        templates,
        ...injectedReducers
    });
}