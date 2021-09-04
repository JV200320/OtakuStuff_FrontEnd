import { combineReducers } from 'redux';

import auth from './auth/reducer'
import kindOfContentListToDisplay from './kindOfContentListToDisplay/reducer'

export const rootReducer = combineReducers({
    auth,
    kindOfContentListToDisplay
});

export type RootState = ReturnType<typeof rootReducer>