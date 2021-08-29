import { combineReducers } from 'redux';

import auth from './auth/reducer'
import filter from './filter/reducer'

export default combineReducers({
    auth,
    filter
});