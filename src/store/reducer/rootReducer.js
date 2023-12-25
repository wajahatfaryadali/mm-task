import { combineReducers } from 'redux';
import authReducer from '../slices/authSlice/authSlice'

const rootReducer = combineReducers({
    login: authReducer,
});

export default rootReducer;
