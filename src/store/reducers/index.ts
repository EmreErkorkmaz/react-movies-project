import {combineReducers} from 'redux';
import authReducer from './authReducer';
import contentsReducer from './contentsReducer';

const rootReducer = combineReducers({
    contents: contentsReducer,
    auth: authReducer
});

export default rootReducer;