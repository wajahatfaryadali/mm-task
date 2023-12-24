// rootReducer.js
import { combineReducers } from 'redux';
import signupReducer from '../slices/authSlice/signUpSlice'

const rootReducer = combineReducers({
    signup: signupReducer,
});

export default rootReducer;
