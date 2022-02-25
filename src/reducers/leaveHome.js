import { LEAVE_HOME, GOTO_HOME } from '../actions/types';

export default (state = null, action) => {
    switch(action.type){
        case LEAVE_HOME:
            return action.payload; 
        case GOTO_HOME:
            return null;
        default:
            return state;
    }
}