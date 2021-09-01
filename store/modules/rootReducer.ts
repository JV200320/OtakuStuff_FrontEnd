import { combineReducers } from 'redux';

import auth from './auth/reducer'
import kindOfContentToDisplay from './kindOfContentToDisplay/reducer'

export const rootReducer = combineReducers({
    auth,
    kindOfContentToDisplay
});

export type RootState = ReturnType<typeof rootReducer>