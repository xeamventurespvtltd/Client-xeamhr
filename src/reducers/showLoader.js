import { SHOW_LOADER } from '../actions/types';

export default (state = false, action) => {
    switch(action.type){
        case SHOW_LOADER:
            return action.payload
        default:
            return state
    }
}