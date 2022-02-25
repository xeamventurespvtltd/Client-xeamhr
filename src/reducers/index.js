import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import leaveHome from './leaveHome';
import scrollTo from './scrollTo';
import showLoader from './showLoader';

export default combineReducers({
    header: leaveHome,
    form: formReducer,
    scrollTo,
    loader: showLoader
});