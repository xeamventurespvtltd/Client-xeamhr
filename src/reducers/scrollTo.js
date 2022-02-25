import { SCROLL_TO } from '../actions/types';

export default (state = null, action) => {
    switch(action.type){
        case SCROLL_TO:
            return action.payload;
        default:
            return state;
    }
}