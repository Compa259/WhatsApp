import { combineReducers } from 'redux';
import ListChatReducer from './ListChatReducer';
import EditReducer from './EditReducer';

export default combineReducers({
    ListChatReducer,
    EditReducer
});
