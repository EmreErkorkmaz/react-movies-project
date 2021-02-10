import {combineReducers} from 'redux';
import contentsReducer from './contentsReducer';

const rootReducer = combineReducers({
    contents: contentsReducer
});

export default rootReducer;