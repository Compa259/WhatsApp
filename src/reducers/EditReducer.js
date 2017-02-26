import { EDIT } from '../actions/types';

const INITIAL = false; 
export default (state = INITIAL, action) => {
    switch (action.type) {
        case EDIT:
           return action.payload;
        default:
           return state;
    }   
};
